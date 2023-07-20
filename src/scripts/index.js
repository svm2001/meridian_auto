import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb'

import { popup } from "./components/popup";
import { scroll } from "./components/scroll";
import { scrollTop } from "./components/scrollTop";


document.addEventListener('DOMContentLoaded', () => {
  popup();
  scroll();
  scrollTop();




    $(document).ready(function () {
      $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99",
        "oncomplete": function(e) {
          this.classList.add('validated');
          var inputmaskValue = this.inputmask.unmaskedvalue();
          // console.log(inputmaskValue.length);
        },

        "onincomplete": function (e) {
          this.classList.remove('validated');
        },

        "onclear": function (e) {
          this.classList.remove('validated');
        },
      });
    });

  // if(window.innerWidth >= 1024) {
  //   AOS.init();
  // }
})
