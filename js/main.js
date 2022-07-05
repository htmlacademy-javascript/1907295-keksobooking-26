function getRandomNumber (min, max) { //получить случайное число
  if (min <= 0 || max <= 0) {
    throw 'Значение min и max должно быть >= 0';
  } else if (max <= min) {
    throw 'Значение max не может быть меньше или равным min';
  }
  return Math.random() * (max - min + 1) + min;
}

function getRandomInteger(min, max) { //получить случайное целое число
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandomNumber(min, max));
}

const randomInteger = getRandomInteger(1, 30);

randomInteger();

function getRandomFloat(min, max, signCount) { //получить плавающее значение
  return Number(getRandomNumber(min, max).toFixed(signCount));
}

const randomFloat = Number(getRandomFloat(1.1, 2.2, 1));

randomFloat();

/*
Итак! Рассказываю! Что я планировала сделать
Для начала я получила функции от Кекса.
Почему то я решила, что мне надо создать 2 разных объекта (автора и описание объекта), не знаю мне показалось что так легче
На счёт автора, немного не знаю, добавить цикл с переменной до 10 и вывести return 'img/avatars/user' + 'i' + '.png'
На счет описания объекта, с локацией немного не поняла, тоже через цикл, но там 2 значения, или может мин мах ввести, но как то громоздко получается
:( функция не вызывается, короче всё не то
*/

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger();//возвращающая случайное целое число из переданного диапазона включительно

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

getRandomPositiveFloat();//возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// const author = {};

const offer = {
  title: [
    'Новостройка',
    'Элитное',
    'Апартаменты',
  ],
  // address: {
  //   location: {
  //     lat:
  //     lng:
  //   }
  // },
  price: getRandomInteger(),
  type: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel'
  ],
  rooms: getRandomInteger(1, 7),
  guests: getRandomInteger(1, 30),
  checkin: [
    '12:00',
    '13:00',
    '14:00'
  ],
  checkout: [
    '12:00',
    '13:00',
    '14:00'
  ],
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ],
  description: [
    'Жилое помещение',
    'Коммерческое помещение'
  ],
  photos: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ]
};

const createAds = function() {
  return {
    title: getRandomArrayElement(offer.title),
    address: '',
    price: '',
    type: getRandomArrayElement(offer.type),
    rooms: '',
    guests: '',
    checkin: getRandomArrayElement(offer.checkin),
    checkout: getRandomArrayElement(offer.checkout),
    features: getRandomArrayElement(offer.features),
    description: offer.title[getRandomPositiveInteger(0, offer.title.length - 1)],
    photos: ''
  };
};

createAds();
