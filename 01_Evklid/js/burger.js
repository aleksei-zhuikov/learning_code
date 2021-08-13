// Меню Бургер
window.addEventListener("DOMContentLoaded", function () {
  const MenuOpen = document.querySelector('.menu-open');
  const nav = document.querySelector('.nav');

  MenuOpen.addEventListener("click", function() {
  document.body.classList.toggle('_lock');
  MenuOpen.classList.toggle('_active-burg');
  nav.classList.toggle('_active-burg');
  });


})









