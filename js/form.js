function turnFormOff (formElement, active) {
  formElement.querySelectorAll('fieldset')
    .forEach ((element) => {
      element.disabled = !active;
    });
}

export function setActiveAdForm(active) {
  const adFormElement = document.querySelector('.ad-form');
  const mapFormElement = document.querySelector('.map__filters');

  turnFormOff (adFormElement, active);
  turnFormOff (mapFormElement, active);

  mapFormElement.querySelectorAll('select').forEach((item) => {
    item.disabled = !active;
  });

  if (!active) {
    adFormElement.classList.add('ad-form--disabled');
    mapFormElement.classList.add('map__filters--disabled');
  } else {
    adFormElement.classList.remove('ad-from--disabled');
    mapFormElement.classList.remove('map__filters--disabled');
  }
}
