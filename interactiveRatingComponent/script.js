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

ratingButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.classList.add("hover");
  });
  button.addEventListener("mouseout", () => {
    button.classList.remove("hover");
  });
});

const submitButton = document.querySelector(".btn--submit");

submitButton.addEventListener("click", () => {
  const ratingValue = document.querySelector(".selected").textContent;
  const ratingResult = document.querySelector(".rating-result");
  ratingResult.textContent = ratingValue;
  const modalComponent = document.querySelector(".modal-component");
  const ratingComponent = document.querySelector(".rating-component");
  ratingComponent.classList.add("closed");
  modalComponent.classList.add("open");
});
