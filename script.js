const body = document.body;
const nav = document.querySelector("#navigation-container");
const icon = document.querySelector(".icon");
const links = document.querySelectorAll(".links");
const tryForFree = document.querySelector("#try-for-free");
const menu = document.querySelector(".menu");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
// const button = document.querySelector("#button");

hamburgerMenuIcon.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("menu-responsive");
});

// Event listeners

//Redirect page on clik and using local storage to send id of audio to playAudio.js
button1.addEventListener("click", () => {
  window.location.href = "Play Audio/playAudio.html";
  localStorage.setItem("audioId", 0);
});

button2.addEventListener("click", () => {
  window.location.href = "Play Audio/playAudio.html";
  localStorage.setItem("audioId", 1);
});

button3.addEventListener("click", () => {
  window.location.href = "Play Audio/playAudio.html";
  localStorage.setItem("audioId", 2);
});

button4.addEventListener("click", () => {
  window.location.href = "Play Audio/playAudio.html";
  localStorage.setItem("audioId", 3);
});

tryForFree.addEventListener("click", () => {
  document.documentElement.scrollTop = 232;
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    nav.classList.add("on-scroll-nav");
    icon.classList.add("on-scroll-nav-text");
    links.forEach((link) => link.classList.add("on-scroll-nav-text"));
  } else {
    nav.classList.remove("on-scroll-nav");
    icon.classList.remove("on-scroll-nav-text");
    links.forEach((link) => link.classList.remove("on-scroll-nav-text"));
  }
});
