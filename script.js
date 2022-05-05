const body = document.body;
const nav = document.querySelector("#navigation-container");
const icon = document.querySelector(".icon");
const links = document.querySelectorAll(".links");
const tryForFree = document.querySelector("#try-for-free");
const menu = document.querySelector(".menu");
const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const barsIcon = document.querySelector(".bars-icon");
// const button = document.querySelector("#button");

let menuShow = true;

// Event listener

// Toggle bars and close icon, make menu responsive
barsIcon.addEventListener("click", () => {
  if (menuShow) {
    barsIcon.style.display = "none";
    closeIcon.style.display = "block";
    menu.classList.remove("menu");
    menu.classList.add("menu-responsive");
  }
});

// Toggle close button and menu class on nav element
closeIcon.addEventListener("click", () => {
  barsIcon.style.display = "block";
  closeIcon.style.display = "none";
  menu.classList.add("menu");
});

// Revert menu-responsive class on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu-responsive");
  } else {
    menu.classList.add("menu-responsive");
  }
});

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
