const calculateButton = document.getElementById('calculate');
const firstNumberElement = document.getElementById('firstnumber');
const secondNumberElement = document.getElementById('secondnumber');
const operatorElement = document.getElementById('operator');
const resultField = document.getElementById('result');

const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  x: (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
};
calculateButton.addEventListener('click', () => {
  const num1 = Number(firstNumberElement.value.trim());
  const num2 = Number(secondNumberElement.value.trim());

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    resultField.value = '';
    return;
  }
  const operation = operations[operatorElement.value];
  const answer = operation(num1, num2);
  resultField.value = answer;
});
