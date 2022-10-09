import {createOffers, DEFAULT_OFFERS_COUNT} from './data.js';
import {getCardElement} from './card.js';
import {getRandomArrayElement} from './util.js';
import './form.js';
import './validator.js';
import './map.js';
import './slider.js';

const offers = createOffers(DEFAULT_OFFERS_COUNT);
const cardElement = getCardElement(getRandomArrayElement(offers));
const mapElement = document.querySelector('.map__canvas');

mapElement.appendChild(cardElement);
