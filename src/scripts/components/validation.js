export function validation() {
  const formButton = document.querySelector('.faq__form .btn__orange');
  let formName = document.querySelector('.faq__form input[name="name"]')
  let formEmail = document.querySelector('.faq__form input[name="email"]')
  let formTel = document.querySelector('.faq__form input[name="phone"]')

  let formSuccess = document.querySelector('.form__success');
  let formWrapper = document.querySelector('.form__wrapper');

  if(formButton) {
    formButton.addEventListener('click', (e) => {
      e.preventDefault();

      $(document).ready(function () {
        $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99",
          "oncomplete": function(e) {
            this.classList.add('validated');
            var inputmaskValue = this.inputmask.unmaskedvalue();
            // console.log(inputmaskValue.length);
          },

          "onincomplete": function (e) {
            this.classList.remove('validated');
            this.style.borderBottom = '1px solid red';
          },

          "onclear": function (e) {
            this.classList.remove('validated');
          },
        });
      });

      if(formName.value.length < 2) {
        formName.style.borderBottom = '1px solid red';
      } else {
        formName.style.borderBottom = '1px solid rgba(255,255,255,.5)';
      }

      if(formEmail.value.length < 5) {
        formEmail.style.borderBottom = '1px solid red';
      } else {
        formEmail.style.borderBottom = '1px solid rgba(255,255,255,.5)';
      }

      if(formTel.value.length === 0) {
        formTel.style.borderBottom = '1px solid red';
      } else {
        formTel.style.borderBottom = '1px solid rgba(255,255,255,.5)';
      }

      if(formName.value.length >= 2 && formEmail.value.length >= 5 && formTel.classList.contains('validated')) {
        formWrapper.remove();
        formSuccess.style.display = 'flex';
      }
    })
  }

}
