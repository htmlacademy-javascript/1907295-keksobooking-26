import {pristine} from './validator.js';
import {postOffer} from './api.js';
import {showSuccess,showError} from './message.js';

const adFormElement = document.querySelector('.ad-form');
const mapFormElement = document.querySelector('.map__filters');
const submitButton = adFormElement.querySelector('.ad-form__submit');

// Активация формы
function turnFormOff (formElement, active) {
  formElement.querySelectorAll('fieldset')
    .forEach ((element) => {
      element.disabled = !active;
    });
}

export function setActiveAdForm(active) {
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

// Отправка данных на сервер
function blockSubmitButton () {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
}

function unblockSubmitButton () {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

adFormElement.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  const isValid  = pristine.validate();

  if (!isValid) {
    return;
  }

  const formData = new FormData(evt.target);
  blockSubmitButton();

  try {
    await postOffer(formData);
    showSuccess();
  } catch (error) {
    showError(error.message);
  }

  unblockSubmitButton();
});
