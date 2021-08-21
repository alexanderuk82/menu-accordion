const sliders = document.querySelectorAll(".panel");

function removeClass() {
  sliders.forEach((slider) => {
    slider.classList.remove("active");
  });
}

sliders.forEach((slider) => {
  slider.addEventListener("click", () => {
    removeClass();
    slider.classList.add("active");
  });
});
