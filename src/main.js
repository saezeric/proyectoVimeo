// src/main.js

import "./styles/bootstrap.scss";
import "./styles/custom.scss";
import "bootstrap";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar.bg-transparent.fixed-top");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
