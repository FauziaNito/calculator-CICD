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
calculateButton.addEventListener('click', async () => {
  const firstNumber = Number(firstNumberElement.value.trim());
  const secondNumber = Number(secondNumberElement.value.trim());

  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) {
    resultField.value = '';
    return;
  }
  const operator = operatorElement.value;
  const data = JSON.stringify({firstNumber, secondNumber, operator})
  const {result} = await fetch("/calculate",{
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: data
  }).then(response => response.json());
  resultField.value = result;
});
