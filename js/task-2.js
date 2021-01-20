const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const vegList = document.querySelector('#ingredients');

const listCreator = (ul, arr) => {
  arr.forEach(item => {
    let element = document.createElement('li');
    ul.append(element);
    element.textContent = item;
  });
};

listCreator(vegList, ingredients);
