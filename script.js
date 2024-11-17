'use strict'

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

let direction;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function() {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = 'translateX(-20%)';  
});

prev.addEventListener('click', function() {
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = 'translateX(20%)';  
});

slider.addEventListener('transitionend', function() {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';

    setTimeout(function() {
        slider.style.transition = 'transform 0.5s ease';
    }, 50);
});

// Function to auto-scroll the slider every X milliseconds
function autoScroll() {
    next.click(); // Programmatically trigger the next button click
}

// Start auto-scrolling every 3 seconds (3000 milliseconds)
setInterval(autoScroll, 1000);
