import {createOffers, DEFAULT_OFFERS_COUNT} from './data.js';
import './form.js';
import './validator.js';
import './slider.js';
import {init as initMap, setMarkers} from './map.js';

const offers = createOffers(DEFAULT_OFFERS_COUNT);
const mapElement = document.querySelector('.map__about');
const addressElement = document.querySelector('#address');

// const COORDINATE_LAT = 55.75222;
// const COORDINATE_LNG = 37.61556;

const leafletMap = initMap(mapElement, addressElement);
setMarkers(offers, leafletMap);
