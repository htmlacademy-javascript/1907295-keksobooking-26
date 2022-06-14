function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    throw 'Значение min и max должно быть >= 0';
  } else if (max <= min) {
    throw 'Значение max не может быть меньше или равным min';
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.random() * (max - min + 1);
  return Math.floor(randomNumber);
}

const randomInteger = getRandomInteger(10, 50);

randomInteger();

function getGeographicCoordinates(from, before) {
  if (from < 0 || before < 0) {
    throw 'Значение from и before должно быть >= 0';
  } else if (before <= from) {
    throw 'Значение before не может быть меньше или равным from';
  }

  from = Math.round(from.toFixed(1));
  before = Math.round(before.toFixed(1));

  const coordinatesX = from * Math.cos();
  const coordinatesY = before * Math.sin();
  return Math.random(coordinatesX.toFixed(1), coordinatesY.toFixed(1));
}

const geographicCoordinates = getGeographicCoordinates(1.1, 2.2);

geographicCoordinates();
