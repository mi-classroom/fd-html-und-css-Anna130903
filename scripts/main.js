const menuOpenButton = document.querySelector('[data-js-main-menu-open]');
const menuOverlay = document.querySelector('[data-js-main-menu-target]');
const menuCloseButton = document.querySelector('[data-js-main-menu-close]');

menuOpenButton.addEventListener('click', function() {
  menuOverlay.classList.add('is-active');
});

menuCloseButton.addEventListener('click', function() {
  menuOverlay.classList.remove('is-active');
});
