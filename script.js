const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let expression = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      expression += button.textContent;
      display.textContent = expression;
    } else if (button.classList.contains('operator')) {
      expression += ` ${button.textContent} `;
      display.textContent = expression;
    } else if (button.classList.contains('equal')) {
      display.textContent = eval(expression);
      expression = '';
    } else if (button.classList.contains('clear')) {
      display.textContent = '';
      expression = '';
    }
  });
});
