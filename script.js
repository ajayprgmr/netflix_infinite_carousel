'use strict'
const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
let sections = document.querySelectorAll('.slider section');
const noOfSections = sections.length;
const noOfSectionsPerScreen = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--no-of-sections-per-screen'));
console.log(noOfSectionsPerScreen);

let direction;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Function to update the section reference after changing DOM
function updateSections() {
    sections = document.querySelectorAll('.slider section');
    console.log('updated Sections',sections);
}

next.addEventListener('click', function () {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${100}vw)`;
});

prev.addEventListener('click', function () {
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(${100}vw)`;
});



slider.addEventListener('transitionend', function () {
    updateSections();
    const sectionArray = Array.from(sections); // Convert NodeList to array
    const nodesToAppend = sectionArray.slice(0,noOfSectionsPerScreen); 
    // Append the nodes to the slider based on the direction
    if (direction === -1) {
        // Direction -1: Move the first noOfSectionsPerScreen sections to the end (append them)
        nodesToAppend.forEach(node => {
            slider.appendChild(node);
        });
    } else if (direction === 1) {
        // Direction 1: Move the last noOfSectionsPerScreen sections to the front (prepend them)
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
    });
});

