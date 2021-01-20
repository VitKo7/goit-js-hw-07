// 1) Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. // 'В списке 3 категории.'.
// ! done
const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

// 2) Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
/*
Например для первой категории получится:
Категория: Животные
Количество элементов: 4 
*/
// ! done
const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');

items.forEach(node => {
  const h2 = node.querySelector('h2');
  console.log(`Категория: ${h2.textContent}`);

  const ul = node.querySelector('ul');
  const li = ul.querySelectorAll('li');
  console.log(`Количество элементов: ${li.length}`);
});
