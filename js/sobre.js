(() => {
  const form = document.getElementById('testimony-form');
  const fields = document.getElementById('testimony-fields');
  const formStatus = document.getElementById('testimony-form-status');
  const feed = document.getElementById('testimony-feed');
  const feedStatus = document.getElementById('testimony-feed-status');

  if (!form || !fields || !formStatus || !feed || !feedStatus) return;

  const config = window.RHEMA_SUPABASE_CONFIG || {};
  const projectUrl = typeof config.url === 'string' ? config.url.trim().replace(/\/$/, '') : '';
  const publishableKey = typeof config.publishableKey === 'string' ? config.publishableKey.trim() : '';

  if (!projectUrl || !publishableKey) {
    formStatus.textContent = 'O envio e o mural público serão liberados quando o banco online da RHEMA estiver ativo.';
    feedStatus.textContent = 'Ainda não há testemunhos públicos. O mural será conectado ao banco online da RHEMA antes de receber relatos.';
    return;
  }

  const endpoint = `${projectUrl}/rest/v1/rhema_testimonies`;
  const headers = {
    apikey: publishableKey,
    Authorization: `Bearer ${publishableKey}`
  };
  fields.disabled = false;
  formStatus.textContent = 'Seu relato será revisado antes de aparecer no mural.';

  function createStatus(message) {
    const status = document.createElement('p');
    status.className = 'testimony-feed-status';
    status.textContent = message;
    return status;
  }

  function renderTestimony(item) {
    const card = document.createElement('article');
    card.className = 'testimony-card';
    card.setAttribute('aria-label', `Testemunho de ${item.display_name}`);

    const name = document.createElement('h3');
    name.textContent = item.display_name;

    const content = document.createElement('p');
    content.textContent = item.testimony;

    card.append(name, content);

    if (item.created_at) {
      const date = new Date(item.created_at);
      if (!Number.isNaN(date.getTime())) {
        const time = document.createElement('time');
        time.dateTime = date.toISOString();
        time.textContent = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(date);
        card.append(time);
      }
    }

    return card;
  }

  async function loadTestimonials() {
    feed.setAttribute('aria-busy', 'true');
    feed.replaceChildren(createStatus('Carregando testemunhos publicados...'));

    try {
      const response = await fetch(`${endpoint}?select=id,display_name,testimony,created_at&status=eq.published&order=created_at.desc&limit=30`, {
        headers
      });
      if (!response.ok) throw new Error('Não foi possível carregar o mural agora.');

      const testimonials = await response.json();
      feed.replaceChildren();

      if (!Array.isArray(testimonials) || testimonials.length === 0) {
        feed.append(createStatus('Ainda não há testemunhos publicados. Quando um relato for aprovado, ele aparecerá aqui.'));
        return;
      }

      testimonials.forEach(item => feed.append(renderTestimony(item)));
    } catch {
      feed.replaceChildren(createStatus('O mural não está disponível neste momento. Tente novamente mais tarde.'));
    } finally {
      feed.setAttribute('aria-busy', 'false');
    }
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const submit = form.querySelector('button[type="submit"]');
    const displayName = form.elements.display_name.value.trim();
    const testimony = form.elements.testimony.value.trim();

    if (displayName.length < 1 || displayName.length > 50 || testimony.length < 20 || testimony.length > 1200) {
      formStatus.textContent = 'Confira o nome e o tamanho do testemunho antes de enviar.';
      return;
    }

    submit.disabled = true;
    formStatus.textContent = 'Enviando seu relato para revisão...';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { ...headers, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
        body: JSON.stringify({ display_name: displayName, testimony })
      });
      if (!response.ok) throw new Error('Não foi possível enviar o relato.');

      form.reset();
      formStatus.textContent = 'Obrigado por compartilhar sua história. O relato foi enviado para revisão e aparecerá aqui se for aprovado.';
    } catch {
      formStatus.textContent = 'Não foi possível enviar agora. Verifique sua conexão e tente novamente.';
    } finally {
      submit.disabled = false;
    }
  });

  loadTestimonials();
})();
