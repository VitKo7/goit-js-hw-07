// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// * Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// * Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// * Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const valueRef = document.querySelector('#value');
let counterValue = Number(valueRef.textContent);

const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]',
);

function increment(value) {
  value += 1;
  return value;
}
function decrement(value) {
  value -= 1;
  return value;
}

const onIncrementButton = () => {
  counterValue = increment(counterValue);
  updateValue(counterValue);
};
const onDecrementButton = () => {
  counterValue = decrement(counterValue);
  updateValue(counterValue);
};

function updateValue(value) {
  valueRef.textContent = value;
}

decrementBtn.addEventListener('click', onDecrementButton);
incrementBtn.addEventListener('click', onIncrementButton);
