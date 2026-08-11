const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const percentButton = document.querySelector(".percent");

const equals = document.querySelector(".equals");

let expression = "";


function updateDisplay() {
  display.textContent = expression || "0";
}
numbers.forEach(button => {
  button.addEventListener("click", () => {

    const value = button.textContent;

    if (value === "." && expression.endsWith(".")) {
      return;
    }

    expression += value;

    updateDisplay();
  });
});
clearButton.addEventListener("click", () => {

  expression = "";

  updateDisplay();
});
deleteButton.addEventListener("click", () => {

  expression = expression.slice(0, -1);

  updateDisplay();
});
plusButton.addEventListener("click", () => {
  expression += "+";
  updateDisplay();
});

minusButton.addEventListener("click", () => {
  expression += "-";
  updateDisplay();
});

multiplyButton.addEventListener("click", () => {
  expression += "*";
  updateDisplay();
});

divideButton.addEventListener("click", () => {
  expression += "/";
  updateDisplay();
});
percentButton.addEventListener("click", () => {

  if (!expression) return;

  expression += "/100";

  updateDisplay();
});
equals.addEventListener("click", () => {

  if (!expression) return;

  const result = eval(expression);

  expression = result.toString();

  updateDisplay();
});
