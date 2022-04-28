const body = document.body;
const nav = document.querySelector("#navigation-container");
const icon = document.querySelector("#icon");
const links = document.querySelectorAll(".links");

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
