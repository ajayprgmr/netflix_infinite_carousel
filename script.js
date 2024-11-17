'use strict'

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let direction;
// -1:left and 1:right

prev.addEventListener('click', function () {
    console.log('from prev')
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    }
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translateX(20%)';
});

next.addEventListener('click', function () {
    console.log('from next')
    if(direction===1) {
        slider.prepend(slider.firstElementChild)
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translateX(-20%)';
});

slider.addEventListener('transitionend', function () {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';

    setTimeout(function () {
        slider.style.transition = 'transform 0.5s ease';
    }, 5);
});
