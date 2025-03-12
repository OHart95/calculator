//basic operators
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

document.addEventListener("DOMContentLoaded", () => {
    // Select all number buttons
    const numberButtons = document.querySelectorAll(".number");

    // Select the display element
    const value = document.querySelector('#value');

    // Loop through each button and add an event listener
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            // If the display value is '0', replace it with the clicked number
            if (value.textContent === '0') {
                value.textContent = button.textContent;
            } else {
                // Otherwise, append the clicked number to the current display value
                value.textContent += button.textContent;
            }
        });
    });
});

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    value.textContent = '0'
});