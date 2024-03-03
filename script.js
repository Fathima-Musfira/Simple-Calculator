function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    try {
        var result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
