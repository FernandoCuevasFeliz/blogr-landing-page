const $btnMenu = document.getElementById('btnMenu');
const $mainMenu = document.getElementById('mainMenu');
const $submenu = document.querySelectorAll('.submenu');

$btnMenu.addEventListener('click', () => {
  $mainMenu.classList.toggle('menu--active');
  $btnMenu.classList.toggle('btn--close');

  $submenu.forEach((el) => {
    el.classList.remove('submenu--active');
  });
});

$mainMenu.addEventListener('click', (e) => {
  const attribute = e.target.getAttribute('data-menu');
  const submenu = document.querySelector(`ul[data-menu=${attribute}]`);

  if (submenu) {
    submenu.classList.toggle('submenu--active');
  }

  console.log(submenu);
});
