import {isEscapeKey} from './util.js';

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

function onOverlayClick() {
  closeMessage();
}

function closeMessage () {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onEscKeydown);
  document.removeEventListener('click', onOverlayClick);
}

// Сообщение об успешной отправке
export function showSuccess () {
  const successElement = successTemplate.cloneNode(true); // создание сообщение через клонирование
  document.addEventListener('keydown', onEscKeydown); // подписка на закрытие при нажатии
  document.addEventListener('click', onOverlayClick); // подписка на закрытие при клике
  mainElement.append(successElement); // вставляем в дом дерево сообщение об отправке
}

// Сообщение об ошибке
export function showError () {
  const errorElement = errorTemplate.cloneNode(true);
  document.addEventListener('keydown', onEscKeydown);
  errorElement.querySelector('.error__button').addEventListener('click', onOverlayClick);
  mainElement.append(errorElement);
}
