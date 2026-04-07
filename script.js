document.addEventListener('DOMContentLoaded', () => {
  const yearSpans = document.querySelectorAll('[data-current-year]');
  yearSpans.forEach(span => span.textContent = new Date().getFullYear());
});
