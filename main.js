"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// const home = document.querySelector("#home");
// const home_top = home.getBoundingClientRect().top;
// document.addEventListener("click",()=>{
//   window.scrollTo(0, home_top);
// })
// const about = document.querySelector(".navbar__menu__item#home");
// const about_top = about.getBoundingClientRect().top;
// about.addEventListener("click", () => {
//   window.scrollTo(0, about_top);
// });
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
