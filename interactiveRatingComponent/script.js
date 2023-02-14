// rating component

const ratingButtons = document.querySelectorAll(".round-icon.rating");
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

const formField = document.querySelector(".form-field");

formField.addEventListener("submit", (e) => {
  e.preventDefault();

  // if user clicks outside of label, radio button will not be ticked.
  // this code will check the parent container that has been selected, and returns the direct child's input value
  // perhaps a better way would be to apply styling to the label instead
  const selectedRating = document.querySelector('input[name="rating"]:checked')
    ? document.querySelector('input[name="rating"]:checked').value
    : document.querySelector(".selected").querySelector(".rating-input").value;

  const ratingResult = document.querySelector(".rating-result");
  ratingResult.textContent = selectedRating;

  const modalComponent = document.querySelector(".modal-component");
  const ratingComponent = document.querySelector(".rating-component");
  ratingComponent.classList.add("hidden");
  modalComponent.classList.add("open");
});
