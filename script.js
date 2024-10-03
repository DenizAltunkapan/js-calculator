const display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

let currentInput = '';
let operators = [];

operatorButtons.forEach(button => {
    operators.push(button.textContent);
});

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function append(input){
    currentInput = currentInput + input;
    updateDisplay();
}

function evaluate(calculation){
    // %- evaluation still missing
    currentInput = eval(calculation.replaceAll('×', '*').replaceAll('÷', '/'));
}

[...numberButtons, ...operatorButtons].forEach(button => {
    button.addEventListener('click', function() {
        const number = this.textContent;
        append(number);
    });
});

equalButton.addEventListener('click', function(){
    evaluate(currentInput);
    updateDisplay();
});

