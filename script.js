'use strict'

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

let direction;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// "Next" button click
next.addEventListener('click', function() {
    direction = -1;  // Slide to the next item (right)
    slider.style.transition = 'transform 0.5s ease';  // Apply smooth transition
    slider.style.transform = 'translateX(-20%)';  
});

// "Prev" button click
prev.addEventListener('click', function() {
    direction = 1;  // Slide to the previous item (left)
    slider.style.transition = 'transform 0.5s ease';  // Apply smooth transition
    slider.style.transform = 'translateX(20%)';  
});

// Handle the transition end event
slider.addEventListener('transitionend', function() {
    if (direction === -1) {
        // After moving the slider to the left, append the first item to the end
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        // After moving the slider to the right, prepend the last item to the front
        slider.prepend(slider.lastElementChild);
    }

    // Reset the transform to its initial state (no translation)
    slider.style.transition = 'none';  // Temporarily disable transition
    slider.style.transform = 'translateX(0)';  // Reset position

    // Re-enable transition after a brief delay
    setTimeout(function() {
        slider.style.transition = 'transform 0.5s ease';  // Re-enable smooth transition
    }, 50);
});
