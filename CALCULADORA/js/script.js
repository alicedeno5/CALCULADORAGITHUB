let currentInput = "";
let operation = "";
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (firstOperand === null && currentInput !== "") {
        firstOperand = parseFloat(currentInput);
        currentInput = "";
        operation = op;
    } else if (currentInput !== "") {
        calculateResult();
        operation = op;
    }
}

function calculateResult() {
    if (firstOperand !== null && currentInput !== "") {
        let secondOperand = parseFloat(currentInput);
        switch (operation) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                if (secondOperand !== 0) {
                    currentInput = (firstOperand / secondOperand).toString();
                } else {
                    currentInput = "Error";
                }
                break;
            default:
                break;
        }
        firstOperand = null;
        operation = "";
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    firstOperand = null;
    operation = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
