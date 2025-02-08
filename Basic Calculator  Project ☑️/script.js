let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

// function calculateResult() {
//     try {
//         display.value = eval(display.value);
//     } catch {
//         display.value = "Error";
//     }
// }

function calculateResult() {
    try {
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = "Error";
    }
}


