const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.hidden = false;
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.querySelector('.nav').addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const language = document.querySelector('.language');
  if (language.open) {
    language.open = false;
    language.querySelector('summary').focus();
  } else if (toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
const dialog = document.querySelector('.cookie-dialog');
document.querySelector('.cookie-button').addEventListener('click', () => dialog.showModal());
const scratch = document.querySelector('.scratch-list');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    scratch.classList.toggle('playing', entry.isIntersecting);
  }, { threshold: 0.15 }).observe(scratch);
}
