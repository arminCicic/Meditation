const backButton = document.querySelector("#back-button");
const tooltip = document.querySelector("#tooltip");

// Event listeners
backButton.addEventListener("mouseenter", () => {
  tooltip.hidden = false;
});
backButton.addEventListener("mouseleave", () => {
  tooltip.hidden = true;
});
