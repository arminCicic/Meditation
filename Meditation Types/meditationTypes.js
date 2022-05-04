const backButton = document.querySelector("#back-button");
const tooltip = document.querySelector("#tooltip");

// Event listeners
backButton.addEventListener("mouseenter", () => {
  console.log("visible");
  tooltip.hidden = false;
});
backButton.addEventListener("mouseleave", () => {
  tooltip.hidden = true;
  console.log("leave");
});
