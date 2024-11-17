'use strict'

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const sections = document.querySelectorAll('.slider section');

let direction;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function () {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = 'translateX(-300%)';
});

prev.addEventListener('click', function () {
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = 'translateX(300%)';
});



slider.addEventListener('transitionend', function () {
    const sectionArray = Array.from(sections); // Convert NodeList to array
    const nodesToAppend = sectionArray.slice(0, 4); // Get the first 4 sections to append

    // Log the nodes to append for debugging purposes
    console.log(nodesToAppend);

    // Append the nodes to the slider based on the direction
    if (direction === -1) {
        // Direction -1: Move the first 4 sections to the end (append them)
        nodesToAppend.forEach(node => {
            slider.appendChild(node);
        });
    } else if (direction === 1) {
        // Direction 1: Move the last 4 sections to the front (prepend them)
        nodesToAppend.forEach(node => {
            slider.prepend(node);
        });
    }

    // Reset the transform and transition after the movement
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(0)';

    // Re-enable the transition with a small delay
    setTimeout(function () {
        slider.style.transition = 'transform 0.5s ease';
    }, 50);
});

