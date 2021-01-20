// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const userInput = document.querySelector('#validation-input');
const checkNum = userInput.dataset.length;

function inputCheck() {
  userInput.value.length == checkNum
    ? userInput.classList.add('valid')
    : userInput.classList.add('invalid');
}

userInput.addEventListener('blur', inputCheck);
