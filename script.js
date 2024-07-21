const display = document.getElementById("display");

let operandOne = 0;
let operandTwo = null;
let operator = null;
let flag = true;

function appendToDisplay(input) {
    if(flag  === false) {
        display.value = "";
        flag = true;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return num1 / num2;
}

function getOperator(clicked) {
    operator = clicked;
    operandOne = parseInt(display.value);
    flag = false;

    if(operator != null && operandOne != null && operandTwo != null) {
        calculate();
    }
}

function calculate() {
    operandTwo = parseInt(display.value);
    if(operator === '+'){
        display.value = add(operandOne,operandTwo);
    }
    else if(operator === '*'){
        display.value = multiply(operandOne,operandTwo);
    }
    else if(operator === '-'){
        display.value = subtract(operandOne,operandTwo);
    }
    else if(operator === '*'){
        display.value = multiply(operandOne,operandTwo);
    }

    operandOne = display.value;
    operandTwo = null;
}