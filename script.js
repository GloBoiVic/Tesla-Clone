const menuBtn = document.querySelector('.menuBtn');
const backdrop = document.querySelector('.backdrop');
const aside = document.querySelector('aside');
const closeBtn = document.querySelector('button.close');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});

const openMenu = () => {
  backdrop.classList.add('active');
  aside.classList.add('active');
};

const closeMenu = () => {
  backdrop.classList.toggle('active');
  aside.classList.toggle('active');
};

closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
