//Маска для поля tel
let selectorForm = document.getElementById('tel');
let selectorPopup = document.getElementById('popup__tel');
let im = new Inputmask('+7 (999) 999-99-99');

if(selectorForm) {
  im.mask(selectorForm);
};

if(selectorPopup) {
  im.mask(selectorPopup);
};

//Отправка формы
const questionsForm = document.querySelector('.questions__form');
const popupForm = document.querySelector('.popup__form');

const sendForm = function(form) {
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
}

sendForm(questionsForm);
// sendForm(popupForm);


//Local storage
window.addEventListener('DOMContentLoaded', function(){
  const questionsFormTel = document.getElementById('tel');
  const questionsFormName = document.getElementById('name');
  const questionsFormText = document.getElementById('text');
  const popupFormTel = document.getElementById('popup__tel');
  const popupFormName = document.getElementById('popup__name');
  const popupFormText = document.getElementById('popup__text');
  const buttons = document.querySelectorAll('.form__button')
  if(buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', function(){
        localStorage.setItem('questionsFormTelephone', questionsFormTel.value);
        localStorage.setItem('questionsFormName', questionsFormName.value);
        localStorage.setItem('questionsFormText', questionsFormText.value);
        localStorage.setItem('popupFormTelephone', popupFormTel.value);
        localStorage.setItem('popupFormName', popupFormName.value);
        localStorage.setItem('popupFormText', popupFormText.value);
      })
    })
  }
})


//Аккордеон
const accordeons = document.querySelectorAll('.main-footer__accordeon');

if (accordeons) {
  accordeons.forEach(el => {
    el.classList.remove('main-footer__accordeon--nojs');
  })

  accordeons.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = document.querySelector('.main-footer__accordeon-button');
      const content = document.querySelector('.main-footer__accordeon-bottom');


      // self.classList.toggle('is-open');
      if (self.classList.contains('is-open')) {
        self.classList.remove('is-open');
      } else {
        for (item of accordeons) {
          item.classList.remove('is-open');
        }
        self.classList.add('is-open');
      }

      if (self.classList.contains('is-open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });
}

//Popup
const buttonOpen = document.querySelector('.main-header__button');
const buttonClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const submit = document.querySelector('.btn--popup');

if(buttonOpen) {
  buttonOpen.addEventListener('click', () => {
    overlay.classList.toggle('overlay--shown');
    popup.classList.toggle('popup--opened');
  })
};

if(buttonClose) {
  buttonClose.addEventListener('click', () => {
    overlay.classList.remove('overlay--shown');
    popup.classList.remove('popup--opened');
  })
};

document.addEventListener('keydown', (evt) => {
  if(evt.keyCode === 27) {
    overlay.classList.remove('overlay--shown');
    popup.classList.remove('popup--opened');
  }
})

if(overlay) {
  overlay.addEventListener('click', (evt) => {
    if (evt.target === overlay) {
      overlay.classList.remove('overlay--shown');
      popup.classList.remove('popup--opened');
    }
  });
};


// if(submit) {
//   submit.addEventListener('click', () => {
//     overlay.classList.toggle('overlay--shown');
//     popup.classList.toggle('popup--opened');
//   })
// };

//Set focus
const element = document.getElementById('popup__name');
buttonOpen.addEventListener('click', () => {
  element.focus();
});

//Валидация формы popup
new JustValidate('.popup__form', {
  rules: {
    checkbox: {
      required: true,
    },
    tel: {
      required: true,
    },
    name: {
      required: true,
    },
  },

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'https://echo.htmlacademy.ru/',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
        console.log(response)
      }
    });
    form.reset();
    overlay.classList.toggle('overlay--shown');
    popup.classList.toggle('popup--opened');
  },
});
