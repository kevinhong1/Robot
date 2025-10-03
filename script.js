document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  const threshold = hero ? hero.offsetHeight - (navbar?.offsetHeight || 0) : 80;

  function onScroll() {
    if (window.scrollY > threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});