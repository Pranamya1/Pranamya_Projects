let display = document.getElementById('display');

function append(value) {
  display.innerHTML += value;
}

function clearDisplay() {
  display.innerHTML = '';
}

function calculate() {
  display.innerHTML = eval(display.innerHTML);
}

function plusMinus() {
  display.innerHTML = eval(display.innerHTML + '* -1');
}