const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('active');
});