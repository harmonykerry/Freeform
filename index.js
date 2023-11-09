const navButton = document.querySelector(".navbar-burger");
const navigationList = document.querySelector(".navbar_nav");
const popupButton = document.querySelector(".popup-btn");
const popupText = document.querySelector(".popup-text");
const burgerDots = document.querySelectorAll(".burger_dot");
const stickyWrapper = document.querySelector(".sticky-wrapper");
const roundedSection = document.querySelectorAll(".rounded-section");
const inputWrapper = document.querySelector(".input-wrapper");
const textarea = document.querySelector("#message");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("open"); // Add or remove the "open" class
  navigationList.classList.toggle("open");
});

const input = document.querySelector(".input");

inputWrapper.addEventListener("click", function () {
  // Check if the input field is autofilled
  const isInputEmpty = input.value.trim() === "";

  // Toggle the js-focus class if not autofilled

  if (isInputEmpty) {
    inputWrapper.classList.toggle("js-focus");
  }
});

popupButton.addEventListener("click", function () {
  console.log("test");
  popupText.classList.toggle("show");
});
