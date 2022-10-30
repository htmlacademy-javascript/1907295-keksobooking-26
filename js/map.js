import {getCardElement} from './card.js';
import {setActiveAdForm} from './form.js';

export const COORDINATE_LAT = 35.68950;
export const COORDINATE_LNG = 139.69171;
const ZOOM = 13;

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

// Получение координат
function getAddress(addressElement, {lat, lng}) {
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

// Добавление марки и балуна
export function setMarkers(offers, markerGroup) {
  offers.forEach((offer) => {
    const cardElement = getCardElement(offer);
    const marker = L.marker(
      { lat: offer.location.lat, lng: offer.location.lng },
      { icon: pinIcon }
    );

    marker
      .addTo(markerGroup)
      .bindPopup(cardElement);
  });
}

// Отображение карты
export function init(mapElement, addressElement) {
  const map = L.map(mapElement)
    .on('load', () => {
      setActiveAdForm(true);
    })
    .setView({ lat: COORDINATE_LAT, lng: COORDINATE_LNG }, ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinMarker = L.marker(
    { lat: COORDINATE_LAT, lng: COORDINATE_LNG },
    { draggable: true, icon: mainPinIcon, },
  );

  const markerGroup = L.layerGroup().addTo(map);
  mainPinMarker.addTo(markerGroup);

  mainPinMarker.on('moveend', ({target}) => {
    getAddress(addressElement, target.getLatLng());
  });

  return map;
}
