import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form-snackbar');
formElem.addEventListener('submit', onBtnHendle);

function onBtnHendle(e) {
  e.preventDefault();
  const delay = formElem.elements.delay.value;
  const state = formElem.elements.state.value;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        res(
          iziToast.show({
            position: 'topRight',
            backgroundColor: '#01a81dff',
            messageColor: 'white',
            title: '✅',
            message: `Fulfilled promise in ${delay} ms`,
          })
        );
      } else {
        rej(
          iziToast.show({
            position: 'topRight',
            backgroundColor: '#fa5656',
            messageColor: 'white',
            title: '❌',
            message: `Rejected promise in ${delay} ms`,
          })
        );
      }
    }, delay);
  });

  formElem.reset();
}
