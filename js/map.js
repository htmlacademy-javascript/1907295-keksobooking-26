import {createOffers, DEFAULT_OFFERS_COUNT} from './data.js';
import {getCardElement} from './card.js';
import {getRandomArrayElement} from './util.js';

const offers = createOffers(DEFAULT_OFFERS_COUNT);
const cardElement = getCardElement(getRandomArrayElement(offers));
const mapElement = document.querySelector('.map__canvas');
const addressElement = document.querySelector('#address');

//Создание карты
const map = L.map(mapElement)
  .setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 10);

//Отображение карты
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Стилизация маркера
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const PinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//Добавление маркера
const mainPinMarker = L.marker(
  {
    lat: 35.68950,
    lng: 139.69171,
  },
  {
    draggable: true,//перемещение метки
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

offers.forEach((offer) => {
  const marker = L.marker(
    {
      lat: offer.location.lat,
      lng: offer.location.lng,
    },
    {
      icon: PinIcon,
    }
  );

  marker
    .addTo(map)
    .bindPopup(cardElement);
});

//Записываем новые координаты при передвижении метки
function getAddress ({lat, lng}) {
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

mainPinMarker.on('moveend', (evt) => {
  getAddress(evt.target.getLatLng());
});

// mapElement.appendChild(cardElement);
