
const image = document.querySelectorAll('.slides img');
let index = 0;
let interValid = null;

document.addEventListener('DOMContentLoaded', initializeImage());

function initializeImage() {
  if(image.length != 0) {
    image[index].classList.add('display');
    interValid = setInterval(nextSlide, 3000);
  }
}

function showSlide() {
  if(index >= image.length) {
    index = 0;
  } else if (index < 0) {
    index = image.length - 1;
  }

  image[index].classList.add('display');
}

function nextSlide() {
  image[index].classList.remove('display');
  index++;
  showSlide();
}

function prevSlide() {
  image[index].classList.remove('display');
  index--;
  clearInterval(interValid);
  showSlide();
}

