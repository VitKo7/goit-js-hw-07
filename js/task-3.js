const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gall = document.querySelector('#gallery');

const createGall = (ul, arr) => {
  arr.forEach(({ url, alt }) => {
    let sample = `<img src=${url} alt=${alt} class='picture'>`;

    let li = document.createElement('li');
    ul.append(li);

    let img = document.createElement('img');
    img.classList.add('.picture');
    li.insertAdjacentHTML('afterbegin', sample);
  });
};

createGall(gall, images);
