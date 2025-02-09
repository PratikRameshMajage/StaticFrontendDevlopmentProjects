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

// Dark Mode: 
// Check saved preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

document.getElementById('dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});