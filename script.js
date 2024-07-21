const display = document.getElementById("display");

let operandOne = 0;
let operandTwo = null;
let operator = null;
let flag = true;
let cont = false;

function appendToDisplay(input) {
    if(flag  === false) {
        display.value = "";
        flag = true;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    operandOne = 0;
    operandTwo = null;
    operator = null;
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
    if(operator != null && flag === true) {
        calculate();
    }
    operator = clicked;
    operandOne = parseInt(display.value);
    flag = false;
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
    operandTwo = 0;
}