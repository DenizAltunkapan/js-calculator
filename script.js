const display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

let currentInput = '';

function updateDisplay() {
    display.textContent = currentInput || '0';
}

function append(input){
    currentInput = currentInput + input;
    updateDisplay();
}

function evaluate(caculation){
    
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

