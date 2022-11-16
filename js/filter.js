// import {DEFAULT_OFFERS_COUNT} from '../const.js';

const DEFAULT_OFFER = 'any';
const PRICE_LOW = 10000;
const PRICE_HIGH = 50000;

const priceList = {
  ANY: 'any',
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high'
};

const filterElement = document.querySelector('.map__filters');
const typeFilter = filterElement.querySelector('#housing-type');
const priceFilter = filterElement.querySelector('#housing-price');
const roomsFilter = filterElement.querySelector('#housing-rooms');
const guestsFilter = filterElement.querySelector('#housing-guests');
const featuresFilter = filterElement.querySelectorAll('.map__checkbox');

const choiceOfferType = function({offer}) {
  return typeFilter.value === (offer.type || DEFAULT_OFFER);
};

const choiceOfferRooms = function({offer}) {
  return roomsFilter.value === (offer.rooms || DEFAULT_OFFER);
};

const choiceOfferGuests = function({offer}) {
  return guestsFilter.value === (offer.guests || DEFAULT_OFFER);
};

const choiceOfferPrice = function({offer}) {
  switch (priceFilter.value) {
    case priceList.ANY:
      return true;
    case priceList.LOW:
      return priceFilter.value < PRICE_LOW;
    case priceList.MIDDLE:
      return priceFilter.value >= PRICE_LOW && offer.price < PRICE_HIGH;
    case priceList.HIGH:
      return priceFilter.value >= PRICE_HIGH;
    default:
      return false;
  }
};

const choiceOfferFeatures = function({offer}) {
  Array.from(featuresFilter)
    .every((features) => {
      if (!features.checked) {
        return true;
      }
      if (!features) {
        return false;
      }
    });

  return offer.features.includes(offer.features.value);
};

export const createOffersFilters = function(count) {
  const filteredOffers = [];
  for (let i = 0; i < count.length; i++) {
    const offer = count[i];
    if (filteredOffers.length === 10) {
      break;
    }
    if (
      choiceOfferType(offer) &&
      choiceOfferPrice(offer) &&
      choiceOfferRooms(offer) &&
      choiceOfferGuests(offer) &&
      choiceOfferFeatures(offer)
    ) {
      filteredOffers.push(offer);
    }
  }
  return filteredOffers;
};

export const onFiltersChange = (cb) => {
  filterElement.addEventListener('change', () => {
    cb();
  });
};
