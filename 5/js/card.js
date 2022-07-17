import {createOffers} from './data.js';

const map = document.querySelector('.map');
const cardElement = map.querySelector('.map__filters');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const offers = createOffers();

const fragment = document.createDocumentFragment();

function getCardElement(ads) {
  const card = cardTemplate.cloneNode(true);
  titleElement.querySelector('.popup__title') = ads.offer.title;
  adressElement.querySelector('.popup__text--address') = ads.offer.adress;
  priceElement.querySelector('.popup__text--price') = ads.offer.price;
  typeElement.querySelector('.popup__type') = ads.offer.type;
  roomsElement.querySelector('.popup__text--capacity') = ads.offer.rooms;
  guestsElement.querySelector('.popup__text--capacity') = ads.offer.guests;
  checkinElement.querySelector('.popup__text--time') = ads.offer.checkin;
  checkoutElement.querySelector('.popup__text--time') = ads.offer.checkout;
  featuresElement.querySelector('.popup__features') = ads.offer.features;
  descriptionElement.querySelector('.popup__description') = ads.offer.description;
  photosElement.querySelector('.popup__photos') = ads.offer.photos;
  avatarElement.querySelector('.popup__avatar') = ads.offer.avatar;
  fragment.appendChild(card);
}

cardElement.appendChild(fragment);

console.log(getCardElement);


