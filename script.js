const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});