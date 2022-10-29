import {createOffers, DEFAULT_OFFERS_COUNT} from './data.js';
import './form.js';
import './validator.js';
import './slider.js';
import {init as initMap, setMarkers} from './map.js';

const offers = createOffers(DEFAULT_OFFERS_COUNT);
const mapElement = document.querySelector('.map__canvas');
const addressElement = document.querySelector('#address');

const leafletMap = initMap(mapElement, addressElement);
setMarkers(offers, leafletMap);
