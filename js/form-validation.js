const pristine = new Pristine(form);
const form = document.querySelector('.ad-form');
const titleFormElement = document.querySelector('#title');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  const titleForm = titleFormElement.value.length;
  if() {}
});
