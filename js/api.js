const GET_OFFERS_URL = 'https://26.javascript.pages.academy/keksobooking/data';
const POST_OFFERS_URL = 'https://26.javascript.pages.academy/keksobooking';

async function load(url, config = { method: 'GET'}) {
  // Для описания взаимодействия с сервером
  const response = await fetch(url, {...config});

  if (!response.ok) {
    throw new Error('Не удалось загрузить объявления');
  }

  return await response.json();
}

export async function getData(onSuccess, onFail) {
  // Для прикладной задачи (загрузка объявлений)
  try {
    const offers = await load(GET_OFFERS_URL);
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
}

export async function sendData(body, onSuccess, onFail) {
  // Для прикладной задачи (отправка формы объявления)
  try {
    const response = await load(POST_OFFERS_URL, {
      method: 'POST',
      body,
    });

    if (!response.ok) {
      throw new Error('Не удалось отправить форму');
    }

    onSuccess();

  } catch (error) {
    onFail(error.message);
  }
}
