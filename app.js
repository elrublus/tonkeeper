const navList = document.querySelector('.nav');
const menuIcon = document.querySelector('#boton');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const naveg = document.querySelector('navega');
naveg.addEventListener('click', () => {
  navList.classList.toggle('show');
  navList.style.transition = 'transform 1s ease-in-out';
});
