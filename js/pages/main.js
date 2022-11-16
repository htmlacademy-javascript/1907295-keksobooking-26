import {
  START_COORDINATES,
  DEFAULT_OFFERS_COUNT,
  RERENDER_DELAY
} from '../const.js';

import {
  init as initMap,
  setMarkers
} from '../map.js';

import {
  onFiltersChange,
  createOffersFilters
} from '../filter.js';

import {
  showAlert,
  debounce
} from '../util.js';

import {getOffers} from '../api.js';

import '../form.js';
import '../validator.js';
import '../slider.js';
import '../message.js';
import '../preview.js';

const mapElement = document.querySelector('.map__canvas');
const addressElement = document.querySelector('#address');
const leafletMap = initMap(mapElement, addressElement, START_COORDINATES);

async function bootstrap() {
  try {
    const offers = await getOffers();
    setMarkers(offers.slice(0, DEFAULT_OFFERS_COUNT), leafletMap);
    onFiltersChange(debounce(
      () => setMarkers(offers.slice().sort(createOffersFilters).slice(0, DEFAULT_OFFERS_COUNT)),
      RERENDER_DELAY
    ));
  } catch (error) {
    showAlert(error);
  }
}

bootstrap();
