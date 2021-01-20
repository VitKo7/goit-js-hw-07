// * Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const changeRange = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const fontChange = event => {
  // textRef.setAttribute('style', `font-size: ${event.target.value}px`);

  textRef.style.fontSize = `${event.target.value}px`;
};

changeRange.addEventListener('input', fontChange);
