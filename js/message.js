import {isEscapeKey} from '../js/util.js';

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

// Сообщение об ошибке
export function showError (message) {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__message').textContent = message;
  errorElement.style.zIndex = '100';

  // const buttonElement = errorElement.querySelector('error__button');
}

// Сообщение об успешной отправке
export function showSuccess (text) {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__message').textContent = text;
  successElement.style.zIndex = '100';

  const closeshowSuccess = () => {
    successElement.classList.add('hidden');
    document.removeEventListener('keydown', isEscapeKey);
  };

  successElement.addEventListener('click', () => {
    closeshowSuccess();
  });
}
