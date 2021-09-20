//Маска для поля tel
let selector = document.getElementById('tel');
let im = new Inputmask('+7 (999) 999-99-99');

if(selector) {
  im.mask(selector);
}

//Отправка формы
const form = document.querySelector('.questions__form');
if(form) {
  form.onsubmit = async (e) => {
    e.preventDefault();

    await fetch('https://echo.htmlacademy.ru/', {
      method: 'POST',
      body: new FormData(form)
    })

    form.reset();
  };
}

//Local storage
window.addEventListener('DOMContentLoaded', function(){
  const formTel = document.getElementById('tel');
  const formName = document.getElementById('name');
  const formText = document.getElementById('text');
  const button = document.querySelector('.form__button')
  if(button) {
    button.addEventListener('click', function(){
        localStorage.setItem('tel', formTel.value);
        localStorage.setItem('name', formName.value);
        localStorage.setItem('text', formText.value);
    })
  }
})
