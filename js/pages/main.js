import {createOffers} from '../data.js';
import '../form.js';
import '../validator.js';
import '../slider.js';
import {init as initMap, setMarkers} from '../map.js';

const DEFAULT_OFFERS_COUNT = 10;
const coordinates = {
  lat: 35.68950,
  lng: 139.69171
};

const offers = createOffers(DEFAULT_OFFERS_COUNT);
const mapElement = document.querySelector('.map__canvas');
const addressElement = document.querySelector('#address');
const leafletMap = initMap(mapElement, addressElement, coordinates);

setMarkers(offers, leafletMap);
