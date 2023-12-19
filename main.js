// Hamburger button fonction on small
const hamburgerBtn = document.querySelector(".hamburger_icon");
const nav = document.querySelector("header .nav");

hamburgerBtn.addEventListener("click", function (e) {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    hamburgerBtn.src = "images/icon-hamburger.svg";
    document.body.style.overflowY = "auto";
  } else {
    nav.classList.add("active");
    hamburgerBtn.src = "images/icon-close.svg";
    document.body.style.overflowY = "hidden";
  }
});
