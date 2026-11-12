(() => {
  const feed = document.getElementById('home-testimonials-feed');
  const status = document.getElementById('home-testimonials-status');
  if (!feed || !status) return;

  const config = window.RHEMA_SUPABASE_CONFIG || {};
  const projectUrl = typeof config.url === 'string' ? config.url.trim().replace(/\/$/, '') : '';
  const publishableKey = typeof config.publishableKey === 'string' ? config.publishableKey.trim() : '';

  const showStatus = message => {
    const notice = document.createElement('p');
    notice.className = 'testimony-feed-status';
    notice.textContent = message;
    feed.replaceChildren(notice);
  };

  if (!projectUrl || !publishableKey) {
    showStatus('Os testemunhos aprovados aparecerão aqui quando o mural público estiver conectado.');
    return;
  }

  const renderTestimony = item => {
    const card = document.createElement('article');
    card.className = 'testimony-card';

    const name = document.createElement('h3');
    name.textContent = typeof item.display_name === 'string' && item.display_name.trim()
      ? item.display_name.trim()
      : 'Comunidade RHEMA';

    const message = document.createElement('p');
    message.textContent = typeof item.testimony === 'string' ? item.testimony.trim() : '';
    card.append(name, message);

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
  };

  const loadPublishedTestimonials = async () => {
    feed.setAttribute('aria-busy', 'true');
    showStatus('Carregando testemunhos publicados...');
    const endpoint = `${projectUrl}/rest/v1/rhema_testimonies?select=id,display_name,testimony,created_at&status=eq.published&order=created_at.desc&limit=3`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          apikey: publishableKey,
          Authorization: `Bearer ${publishableKey}`
        }
      });
      if (!response.ok) throw new Error('Falha ao carregar testemunhos.');

      const testimonials = await response.json();
      const published = Array.isArray(testimonials)
        ? testimonials.filter(item => typeof item.testimony === 'string' && item.testimony.trim())
        : [];

      if (!published.length) {
        showStatus('Ainda não há testemunhos publicados. Quando um relato for aprovado, ele aparecerá aqui.');
        return;
      }

      feed.replaceChildren(...published.map(renderTestimony));
    } catch {
      showStatus('Não foi possível carregar os testemunhos neste momento.');
    } finally {
      feed.setAttribute('aria-busy', 'false');
    }
  };

  loadPublishedTestimonials();
})();
