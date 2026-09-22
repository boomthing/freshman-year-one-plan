'use strict';
document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
document.querySelectorAll('[data-consult]').forEach(button => button.addEventListener('click', () => {
  const status = document.getElementById('contact-status');
  status.hidden = false;
  status.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
}));
