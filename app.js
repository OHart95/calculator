//basic operators
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

//global functions
function isLastCharNum(str) {
    if (str.length === 0) return false;
    return !isNaN(str.trim().slice(-1));
}

function calculateExpression(expression) {
    try {
        return new Function(`return ${expression}`)();
    } catch {
        return "Error";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    // Select all number buttons
    const numberButtons = document.querySelectorAll(".number");

    // Select the liveCalc display element
    const liveCalc = document.querySelector('#liveCalc');

    // Loop through each button and add an event listener
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            // If the display value is '0', replace it with the clicked number
            if (liveCalc.textContent === '0') {
                liveCalc.textContent = button.textContent;
            } else {
                // Otherwise, append the clicked number to the current display value
                liveCalc.textContent += button.textContent;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const operations = document.querySelectorAll('.operation');

    const liveCalc = document.querySelector('#liveCalc');

    operations.forEach(operation => {
        operation.addEventListener("click", () => {
            if (!(liveCalc.textContent === '0') && isLastCharNum(liveCalc.textContent)) {
                liveCalc.textContent += operation.textContent;
            }
        })
    })
})


const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    liveCalc.textContent = '0'
    value.textContent = '0';
});


//resolve the equation when equals is pressed
const calculate = document.querySelector('#equals');

calculate.addEventListener('click', () => {
    const liveCalc = document.querySelector('#liveCalc');
    const value = document.querySelector('#value');

    if (isLastCharNum(liveCalc.textContent)) {
        liveCalc.textContent = calculateExpression(liveCalc.textContent);
        value.textContent = calculateExpression(liveCalc.textContent);
    }
});