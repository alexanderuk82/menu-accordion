const sliders = document.querySelectorAll('.panel');

function removeClas() {
  sliders.forEach(slider => {
    slider.classList.remove('active');
  });
}

sliders.forEach(slider => {
  slider.addEventListener('click', () => {
    removeClas();
    slider.classList.add('active');
  });
});
