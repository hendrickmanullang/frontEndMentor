// rating component

const ratingButtons = document.querySelectorAll(".rating-selection");
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((button) => {
      button.classList.remove("selected");
    });
    button.classList.add("selected");
  });
});
