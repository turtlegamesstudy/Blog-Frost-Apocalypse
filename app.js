(() => {
  'use strict';
  const data = window.PROJECT_DATA;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;' }[char]));
  const formatDate = date => new Intl.DateTimeFormat('es-NI', { day:'numeric', month:'long', year:'numeric' }).format(new Date(`${date}T12:00:00`));
  let activeFilter = 'Todas';

  $('#project-title').textContent = data.project.title;
  $('#project-studio').textContent = data.project.studio;
  $('#project-status').textContent = data.project.status;
  $('#project-tagline').textContent = data.project.tagline;
  $('#project-description').textContent = data.project.description;
  $('#platform-value').textContent = data.project.platform;
  $('#developer-value').textContent = data.project.developer;
  $('#last-update').textContent = formatDate(data.projectUpdates.at(-1).date);
  $('#updates-total').textContent = String(data.projectUpdates.length).padStart(2, '0');

  const categories = ['Todas', ...new Set(data.projectUpdates.map(item => item.category))];
  $('#category-filter').innerHTML = categories.map(category => `<button class="filter ${category === 'Todas' ? 'active' : ''}" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join('');

  function renderUpdates() {
    const query = $('#search-updates').value.trim().toLowerCase();
    const updates = data.projectUpdates.filter(item => (activeFilter === 'Todas' || item.category === activeFilter) && (!query || `${item.title} ${item.summary} ${item.tags.join(' ')}`.toLowerCase().includes(query)));
    $('#updates-count').textContent = `${updates.length} ${updates.length === 1 ? 'entrada' : 'entradas'}`;
    $('#updates-list').innerHTML = updates.length ? updates.slice().sort((a,b) => b.date.localeCompare(a.date)).map(item => `<article class="update-card reveal is-visible"><div class="update-date"><span>${escapeHTML(item.year)}</span>${formatDate(item.date)}</div><div class="update-content"><span class="eyebrow">${escapeHTML(item.category)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.summary)}</p><div class="update-body">${item.body || ''}</div><div class="tags">${item.tags.map(tag => `<span>#${escapeHTML(tag)}</span>`).join('')}</div><button class="text-button read-more" type="button">Leer entrada completa <span aria-hidden="true">→</span></button></div></article>`).join('') : '<div class="empty-state"><h3>No encontramos entradas</h3><p>Prueba con otra palabra o cambia el filtro.</p></div>';
    $$('.read-more').forEach(button => button.addEventListener('click', () => { const body = button.previousElementSibling.previousElementSibling; body.classList.toggle('expanded'); button.firstChild.textContent = body.classList.contains('expanded') ? 'Ocultar entrada ' : 'Leer entrada completa '; }));
  }
  $('#search-updates').addEventListener('input', renderUpdates);
  $('#category-filter').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (!button) return; activeFilter = button.dataset.category; $$('.filter').forEach(item => item.classList.toggle('active', item === button)); renderUpdates(); });
  renderUpdates();

  $('#faq-list').innerHTML = data.faq.map(([question, answer]) => `<details><summary>${escapeHTML(question)}</summary><p>${escapeHTML(answer)}</p></details>`).join('');

  function renderComments() {
    const comments = JSON.parse(localStorage.getItem('frost-comments') || '[]');
    $('#comments-list').innerHTML = comments.length ? comments.map(comment => `<article class="comment"><div><strong>${escapeHTML(comment.name)}</strong><time datetime="${comment.date}">${formatDate(comment.date.slice(0,10))}</time></div><p>${escapeHTML(comment.text)}</p></article>`).join('') : '<p class="muted">Aún no hay comentarios en este navegador. Sé la primera persona en participar.</p>';
  }
  $('#comment-form').addEventListener('submit', event => { event.preventDefault(); const form = new FormData(event.currentTarget); const name = String(form.get('name')).trim(); const text = String(form.get('text')).trim(); if (!name || !text || text.length > 500) return; const comments = JSON.parse(localStorage.getItem('frost-comments') || '[]'); comments.unshift({ name, text, date: new Date().toISOString() }); localStorage.setItem('frost-comments', JSON.stringify(comments.slice(0, 50))); event.currentTarget.reset(); renderComments(); $('#comment-message').textContent = 'Comentario guardado en este navegador.'; });
  renderComments();

  const modal = $('#editor-modal');
  $('#open-editor').addEventListener('click', () => modal.showModal());
  $('#close-editor').addEventListener('click', () => modal.close());
  $('#editor-form').addEventListener('submit', event => { event.preventDefault(); const password = $('#editor-password').value; const expected = localStorage.getItem('frost-editor-password'); if (!expected) { $('#editor-message').textContent = 'Primero establece una contraseña local con “Cambiar contraseña local”.'; return; } if (password !== expected) { $('#editor-message').textContent = 'Contraseña incorrecta.'; return; } $('#editor-panel').hidden = false; $('#editor-login').hidden = true; $('#editor-message').textContent = ''; });
  $('#save-draft').addEventListener('click', () => { localStorage.setItem('frost-project-data', JSON.stringify(data)); $('#editor-message').textContent = 'Borrador guardado localmente. No se publica en GitHub automáticamente.'; });
  $('#export-data').addEventListener('click', () => { const file = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); link.href = URL.createObjectURL(file); link.download = 'frost-project-data.json'; link.click(); URL.revokeObjectURL(link.href); });
  $('#set-password').addEventListener('click', () => { const password = prompt('Escribe una nueva contraseña local (mínimo 8 caracteres):'); if (password && password.length >= 8) { localStorage.setItem('frost-editor-password', password); $('#editor-message').textContent = 'Contraseña local actualizada en este navegador.'; } });
  $('#reset-draft').addEventListener('click', () => { localStorage.removeItem('frost-project-data'); location.reload(); });

  const year = new Date().getFullYear(); $('#copyright-year').textContent = year;
})();
