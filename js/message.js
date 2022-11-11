import {isEscapeKey} from './util.js';
import {adFormElement} from './validator.js';

const mainElement = document.querySelector('main');

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

function onEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function closeMessage () {
  adFormElement.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeydown);
}

// Сообщение об успешной отправке
export function showSuccess () {
  const successElement = successTemplate.cloneNode(true); // создание сообщение через клонирование
  document.addEventListener('keydown', closeMessage); // подписка на закрытие при нажатии
  document.addEventListener('click', closeMessage); // подписка на закрытие при клике
  mainElement.append(successElement); // вставляем в дом дерево сообщение об отправке
}

// Сообщение об ошибке
export function showError () {
  const errorElement = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', closeMessage);
  errorElement.querySelector('.error__button').addEventListener('click', closeMessage);
  mainElement.append(errorElement);
}
