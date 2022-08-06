"use strict";

let toggler = document.querySelectorAll(".nav-toggler");
let body = document.querySelector("body");

toggler.forEach(toggle =>
  toggle.addEventListener("click", function () {
    toggle.firstElementChild.classList.toggle("fa-angle-up");
  })
);
