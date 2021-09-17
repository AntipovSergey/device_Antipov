// //Маска для поля tel
// let selector = document.getElementById('form-tel');
// let im = new Inputmask('+7 (999) 999-99-99');

// if(selector) {
//   im.mask(selector);
// }

// //Отправка формы
// const form = document.querySelector('.promo__form');
// if(form) {
//   form.onsubmit = async (e) => {
//     e.preventDefault();

//     await fetch('https://echo.htmlacademy.ru/', {
//       method: 'POST',
//       body: new FormData(form)
//     })

//     form.reset();
//   };
// }

// //Local storage
// window.addEventListener('DOMContentLoaded', function(){
//   const formTel = document.getElementById('form-tel');
//   const formName = document.getElementById('form-name');
//   const button = document.querySelector('.form__button')
//   if(button) {
//     button.addEventListener('click', function(){
//         localStorage.setItem('tel', formTel.value);
//         localStorage.setItem('name', formName.value);
//     })
//   }
// })
