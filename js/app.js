"use strict";
let header = document.querySelector(".header");
// let body = document.querySelector("body");
let loading = document.querySelector(".loader-box");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loading.style.display = "none";
    // setTimeout(() => {
    //   header.style.opacity = "1";
    // }, 500);
  }, 5000);
});
