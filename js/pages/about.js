import {createOffers} from '../data.js';
import '../form.js';
import '../validator.js';
import '../slider.js';
import {init as initMap, setMarkers} from '../map.js';

const DEFAULT_OFFERS_COUNT = 5;
const coordinates = {
  lat: 55.75222,
  lng: 37.61556
};

const offers = createOffers(DEFAULT_OFFERS_COUNT);
const mapElement = document.querySelector('.map__about');
const addressElement = document.querySelector('#address');
const leafletMap = initMap(mapElement, addressElement, coordinates);

setMarkers(offers, leafletMap);
