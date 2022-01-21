"use strict";
/*===================={variables}=====================*/
const toggler = document.querySelector(".switch_box");
const main_container = document.querySelector(".main_container");
const dark1 = document.querySelectorAll(".facebook");
const dark2 = document.querySelectorAll(".overview_box");
const light_mode = document.querySelectorAll(".light");
const Followers = document.querySelectorAll(".Followers");
const content_top = document.querySelectorAll(".content_top");
// console.log(light_mode);

/*===================={Event listener function}=====================*/
toggler.addEventListener("click", function () {
  // console.log(toggler.checked);
  if (toggler.checked) {
    main_container.classList.add("main_container_dark");
    dark1.forEach((item) => {
      item.classList.add("dark_mode");
    });
    dark2.forEach((item) => {
      item.classList.add("dark_mode");
    });
    light_mode.forEach((item) => {
      item.classList.add("dark_mode_text");
    });
    Followers.forEach((item) => {
      item.classList.add("darkText");
    });
    content_top.forEach((item) => {
      item.classList.add("darkText");
    });
    document.body.style.background = `hsl(230, 17%, 14%)`;
  } else {
    main_container.classList.remove("main_container_dark");
    document.body.style.background = `hsl(0, 0%, 100%)`;
    dark1.forEach((item) => {
      item.classList.remove("dark_mode");
    });
    dark2.forEach((item) => {
      item.classList.remove("dark_mode");
    });
    light_mode.forEach((item) => {
      item.classList.remove("dark_mode_text");
    });
    Followers.forEach((item) => {
      item.classList.remove("darkText");
    });
    content_top.forEach((item) => {
      item.classList.remove("darkText");
    });
  }
});
