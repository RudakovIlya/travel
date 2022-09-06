"use strict";

document.addEventListener("click", e => {
  const modalButton = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".pop-up"),
    modalCloseBtn = document.querySelector("[data-close]"),
    modalBody = document.querySelector(".pop-up__body"),
    modalEmailInput = document.querySelector("#email-input").value,
    modalPasswordInput = document.querySelector("#password-input").value,
    modalSignInUpBtn = document.querySelector("#sign-btn"),
    modalForm = document.querySelector(".pop-up__body"),
    modalContent = document.querySelector(".pop-up__content"),
    modalRegisterBtn = document.querySelector("[data-register]"),
    modalRemoveElements = document.querySelectorAll("[data-remove]"),
    modalAtrChangeText = document.querySelectorAll("[data-change]"),
    targetElement = e.target;

  // Алерт с введенными данными

  if (
    targetElement == modalSignInUpBtn &&
    modalEmailInput &&
    modalPasswordInput &&
    modal.closest(".show-popup") &&
    modalEmailInput.includes("@")
  ) {
    alert(`Your Email: ${modalEmailInput}\nYour Password: ${modalPasswordInput}`);
    e.preventDefault();
    modalForm.reset();
  }

  /*--------------------------------------------------------------------------------*/

  if (targetElement.closest("[data-modal]") || targetElement == modalBody || targetElement.textContent == "Log in") {
    modal.classList.add("show-popup");
    document.body.classList.add("hidden");
  }

  if (targetElement == modalBody || targetElement == modalCloseBtn) {
    closeModal();
  }

  function closeModal() {
    modal.classList.remove("show-popup");
    document.body.classList.remove("hidden");
    modalForm.reset();
  }

  /*---------------------------------------------------------------------*/

  //! Появление модального окна(регистрации)

  if (modal.classList.contains("show-popup") && targetElement == modalRegisterBtn) {
    removeObjects(modalRemoveElements);
    changeText(modalAtrChangeText);
    modalSignInUpBtn.style.marginBottom = "26px";
    modalContent.classList.add("-mh", "fade");

    e.preventDefault();
  }

  if (
    targetElement == modalBody ||
    targetElement == modalButton ||
    targetElement == modalCloseBtn ||
    modalRegisterBtn.textContent == "Log in"
  ) {
    modalContent.classList.remove("-mh");
    modalContent.classList.remove("fade");
    window.setTimeout(addObjects, 300);
    window.setTimeout(changeTextToFirst, 300);
    modalSignInUpBtn.style.marginBottom = "11px";
  }

  function removeObjects(elements) {
    elements.forEach(element => {
      element.classList.toggle("remove");
    });
  }

  function addObjects() {
    modalRemoveElements.forEach(element => {
      element.classList.remove("remove");
    });
  }

  function changeText(list) {
    list.forEach(item => {
      item.classList.toggle("change-text");
    });
  }

  function changeTextToFirst() {
    modalAtrChangeText.forEach(item => {
      item.classList.remove("change-text");
    });
  }

  /*---------------------------------------------------------------------*/
});
