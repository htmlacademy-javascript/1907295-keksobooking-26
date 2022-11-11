import {typesToPrices, typeElement, priceElement} from './validator.js';

export const sliderElement = document.querySelector('.ad-form__slider');
const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const PRICE_STEP = 1000;

noUiSlider.create(sliderElement, {
  range: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  start: typesToPrices[typeElement.value],
  step: PRICE_STEP,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  priceElement.value = sliderElement.noUiSlider.get();
});

typeElement.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: MIN_PRICE,
      max: MAX_PRICE,
    },
    start: typesToPrices[typeElement.value],
  });
});
