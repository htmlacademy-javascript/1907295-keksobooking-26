function getRandomNumber (min, max) {
  if (min <= 0 || max <= 0) {
    throw 'Значение min и max должно быть >= 0';
  } else if (max <= min) {
    throw 'Значение max не может быть меньше или равным min';
  }
  return Math.random() * (max - min + 1);
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(getRandomNumber(min, max));
}

const randomInteger = getRandomInteger(1, 30);

randomInteger();

function getRandomFloat(min, max, signCount) {
  return Number(getRandomNumber(min, max).toFixed(signCount));
}

const randomFloat = Number(getRandomFloat(1.1, 2.2, 1));

randomFloat();
