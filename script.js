const hamburgerBtn = document.querySelector(".hamburger-button");
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const arrow = document.querySelector("arrow");

hamburgerBtn.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});
