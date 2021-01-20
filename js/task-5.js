//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const userName = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

userName.addEventListener('input', event => {
  outputRef.textContent =
    event.target.value === '' ? 'Незнакомец' : userName.value;
});
