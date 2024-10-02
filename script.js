let display = document.getElementById('display');
let historyElement = document.getElementById('history');

window.onload = function() {
  loadHistory();
};

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    let result = eval(display.value);
    let calculation = `${display.value} = ${result}`;
    display.value = result;
    addToHistory(calculation);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

function addToHistory(calculation) {
  let historyItem = document.createElement('div');
  historyItem.textContent = calculation;
  historyElement.appendChild(historyItem);
  
  let history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
  history.push(calculation);
  localStorage.setItem('calculationHistory', JSON.stringify(history));
}

function loadHistory() {
  let history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
  historyElement.innerHTML = '';
  history.forEach(function(item) {
    let historyItem = document.createElement('div');
    historyItem.textContent = item;
    historyElement.appendChild(historyItem);
  });
}

function clearHistory() {
  localStorage.removeItem('calculationHistory');
  historyElement.innerHTML = '';
}
