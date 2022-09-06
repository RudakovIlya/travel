"use strict";
/*
1)Получаем объект бургера
2))Получаем объект меню родительский
3)Вешаем обработчик событий на click на бургер(п.1)
4)Добавляем класс к меню(п.2)
*/
const menuBurger = document.querySelector(".icon-menu");
const menu = menuBurger.closest(".menu");
//const body = document.querySelector("body");
const menuLink = document.querySelectorAll(".menu__link");
const screenWidth = window.screen.width;
if (menuBurger) {
  menuBurger.addEventListener("click", function (e) {
    if (menu) {
      menu.classList.toggle("_active");
    }
  });
}

//При нажатии на ссылку из меню или на любое место экрана при открытом меню-бургер, он закроется.

document.addEventListener("click", e => {
  const targetElement = e.target;
  if (!targetElement.closest(".menu") || targetElement.closest(".menu__link")) {
    menu.classList.remove("_active");
  }
});

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  let headerWrapper = document.querySelector(".header");

  if (scrollTop >= 90 && screenWidth < 768) {
    headerWrapper.classList.add("hide");
  } else if (scrollTop == 0 || screenWidth > 768) {
    headerWrapper.classList.remove("hide");
  }
});
