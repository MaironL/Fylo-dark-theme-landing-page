'use strict';

window.addEventListener('load', () => {
  const input = document.querySelector('.call-to-action__input');
  const form = document.querySelector('.call-to-action');
  const error = document.querySelector('.call-to-action__error');

  form.addEventListener('submit', () => {
    let email = document.querySelector('.call-to-action__input').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(pattern)) {
      error.style.display = 'block';
      input.style.border = 'solid 1px hsl(0, 100%, 63%)';
      setTimeout(() => {
        error.style.display = 'none';
        input.style.border = 'none';
      }, 3000);
    }
  });
});
