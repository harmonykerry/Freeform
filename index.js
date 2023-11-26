const navButton = document.querySelector(".navbar-burger");
const navigationList = document.querySelector(".navbar_nav");
const popupButton = document.querySelector(".popup-btn");
const popupText = document.querySelector(".popup-text");
const burgerDots = document.querySelectorAll(".burger_dot");
const stickyWrapper = document.querySelector(".sticky-wrapper");
const roundedSection = document.querySelector(".rounded-section_wrapper");
const navbar = document.querySelector(".navbar");
const navbarContent = document.querySelector(".navbar-content");

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
  popupText.classList.toggle("show");
});

//////////////////////////////////////////////////////// scroller
document.addEventListener("DOMContentLoaded", function () {
  if (roundedSection) {
    let prevScrollPos = window.scrollY || window.pageYOffset;

    window.onscroll = function () {
      const currentScrollPos = window.scrollY || window.pageYOffset;

      // Check if the rounded section is in the viewport
      const rect = roundedSection.getBoundingClientRect();
      const isOnScreen = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isOnScreen) {
        // Handle scaling for the rounded section
        if (prevScrollPos < currentScrollPos) {
          // Scrolling down, calculate the scale factor based on scroll position
          const scaleFactor = Math.min(
            1.0,
            0.78 + (currentScrollPos / window.innerHeight) * 0.0725 // Adjust this scaling factor for desired speed
          );
          roundedSection.style.transform = `scale(${scaleFactor})`;
        } else {
          // Scrolling up, set initial scale
          roundedSection.style.transform = "scale(0.78)";
        }
      }

      //Next  Handle navbar visibility and blur effect
      if (prevScrollPos > currentScrollPos) {
        // Scroll up, remove hidden and add blur
        navbar.classList.remove("hidden");
        navbarContent.classList.add("blur");
      } else {
        // Scroll down, add hidden and remove blur
        navbar.classList.add("hidden");
        navbarContent.classList.remove("blur");
      }

      prevScrollPos = currentScrollPos;
    };
  }
});
