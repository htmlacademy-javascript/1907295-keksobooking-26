//получить случайное число
function getRandomNumber (min, max) {
  if (min <= 0 || max <= 0) {
    throw 'Значение min и max должно быть >= 0';
  } else if (max <= min) {
    throw 'Значение max не может быть меньше или равным min';
  }
  return Math.random() * (max - min + 1) + min;
}

//получить случайное целое число
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandomNumber(min, max));
}

const randomInteger = getRandomInteger(1, 30);

randomInteger();

//получить плавающее значение
function getRandomFloat(min, max, signCount) {
  return Number(getRandomNumber(min, max).toFixed(signCount));
}

const randomFloat = Number(getRandomFloat(1.1, 2.2, 1));

randomFloat();

//возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}

const title = [
  'Новостройка',
  'Вторичная',
  'Элитное',
  'Апартаменты',
  'Загородная',
  'Аренда'
];

const type = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkin = [
  '12:00',
  '13:00',
  '14:00'
];

const checkout = [
  '12:00',
  '13:00',
  '14:00'
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const description = [
  'Небольшие квартиры для молодежи с возможностью зонировать помещение',
  'Компактные квартиры евроформата с различными функциональными пространствами',
  'Квартиры с большой кухней-гостиной и двумя санузлами',
  'Квартиры с отделкой Nord Line в двух цветовых вариантах – White и Silver',
  'Тихие закрытые внутренние дворы выполнены в пейзажном стиле',
  'Красота и функциональность – главные архитектурные принципы проекта'
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_START = 35.6500;
const LAT_END = 35.7000;
const LNG_START = 139.7000;
const LNG_END = 139.8000;
const MIN_PRICE = 1000000;
const MAX_PRICE = 15000000;

function getAvatarPath(id) {
  let pictureNumber = '';
  if (id < 10) {
    pictureNumber = `0${id.toString()}`;
  } else {
    pictureNumber = id.toString();
  }
  return `img/avatars/user${pictureNumber}.png`;
}

function makeOffer(id) {
  const lat = getRandomPositiveFloat(LAT_START, LAT_END, 4);
  const lng = getRandomPositiveFloat(LNG_START, LNG_END, 4);

  return {
    author: {
      avatar: getAvatarPath(id)
    },
    offer: {
      title: getRandomArrayElement(title),
      address: `${lat}, ${lng}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(type),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 5),
      checkin: getRandomArrayElement(checkin),
      checkout: getRandomArrayElement(checkout),
      features: features.slice(getRandomPositiveInteger(0, features.length - 1)),
      description: getRandomArrayElement(description),
      photos: photos.slice(getRandomPositiveInteger(0, photos.length - 1)),
    },
    location: {
      lat,
      lng
    }
  };
}

function createAds(count) {
  const Ads = [];

  for (let i = 1; i <= count; i++) {
    const newAds = makeOffer(i);
    Ads.push(newAds);
  }

  return Ads;
}

createAds(10);
