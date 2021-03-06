import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement} from './util.js';

const TITLES = [
  'Новостройка',
  'Вторичная',
  'Элитное',
  'Апартаменты',
  'Загородная',
  'Аренда'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Небольшие квартиры для молодежи с возможностью зонировать помещение',
  'Компактные квартиры евроформата с различными функциональными пространствами',
  'Квартиры с большой кухней-гостиной и двумя санузлами',
  'Квартиры с отделкой Nord Line в двух цветовых вариантах – White и Silver',
  'Тихие закрытые внутренние дворы выполнены в пейзажном стиле',
  'Красота и функциональность – главные архитектурные принципы проекта'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_START = 35.6500;
const LAT_END = 35.7000;
const LNG_START = 139.7000;
const LNG_END = 139.8000;
const MIN_PRICE = 100;
const MAX_PRICE = 1000;

const DEFAULT_OFFERS_COUNT = 10;

function getAvatarPath(id) {
  return `img/avatars/user${id.toString().padStart(2, '0')}.png`;
}

function makeOffer(id) {
  const lat = getRandomPositiveFloat(LAT_START, LAT_END, 4);
  const lng = getRandomPositiveFloat(LNG_START, LNG_END, 4);

  return {
    author: {
      avatar: getAvatarPath(id)
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 10),
      guests: getRandomPositiveInteger(1, 5),
      checkin: getRandomArrayElement(CHECKINS),
      checkout: getRandomArrayElement(CHECKOUTS),
      features: FEATURES.slice(getRandomPositiveInteger(0, FEATURES.length - 1)),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: PHOTOS.slice(getRandomPositiveInteger(0, PHOTOS.length - 1)),
    },
    location: {
      lat,
      lng
    }
  };
}

function createOffers(count) {
  const offers = [];

  for (let i = 1; i <= count; i++) {
    offers.push(makeOffer(i));
  }

  return offers;
}

export {createOffers, DEFAULT_OFFERS_COUNT};
