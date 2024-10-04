const display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const delButton = document.querySelector('.delete');
const acButton = document.querySelector('.allclear');

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
    // %- evaluation still missings
    currentInput = String(eval(calculation.replaceAll('×', '*').replaceAll('÷', '/')));
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

delButton.addEventListener('click', function(){
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

acButton.addEventListener('click',function(){
    currentInput='';
    updateDisplay();
});
