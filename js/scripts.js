var topMenu = document.querySelector(".top-menu");
var menuButtonOpen = topMenu.querySelector(".top-menu__toggle");
var menuButtonClose = topMenu.querySelector(".top-menu__button-close");
var menuOpen = topMenu.querySelector(".top-menu__wrapper");
var menuItem1 = topMenu.querySelector(".top-menu__item-1");
var menuItem2 = topMenu.querySelector(".top-menu__item-2");
var menuItem3 = topMenu.querySelector(".top-menu__item-3");
var menuItem4 = topMenu.querySelector(".top-menu__item-4");
var menuItem5 = topMenu.querySelector(".top-menu__item-5");




menuButtonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.add("top-menu__wrapper--open");
});
menuButtonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuOpen.classList.remove("top-menu__wrapper--open");
});