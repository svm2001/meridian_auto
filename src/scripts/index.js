import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb'

import { locomotive } from "./components/locomotive";
import { popup } from "./components/popup";
import { scroll } from "./components/scroll";
import { scrollTop } from "./components/scrollTop";
import { header } from "./components/header";
import { scrollDown } from "./components/scrollDown";
import { slider } from "./components/slider";
import { tabs } from "./components/tabs";
import { mapInit } from "./components/mapInit";
import { products } from "./components/products";

document.addEventListener('DOMContentLoaded', () => {
  locomotive();
  popup();
  scroll();
  scrollTop();
  header();
  scrollDown();
  slider();
  mapInit();
  products();

  if(document.querySelector('.products__filters')) {
    tabs({
      tabParentSelector: '.products__filters',
      tabHeaderSelector: '.products__filters-item',
      tabHeaderActiveClass: 'active',
      event: 'click'
    })
  }

  if(document.querySelector('.pressCentr__tabs')) {
    tabs({
      tabParentSelector: '.pressCentr__tabs',
      tabHeaderSelector: '.pressCentr__tabs-item',
      tabHeaderActiveClass: 'active',
      event: 'click'
    })
  }

  if(document.querySelector('.map')) {
    tabs({
      tabParentSelector: '.map',
      tabHeaderSelector: '.city__tab',
      tabHeaderActiveClass: 'active',
      event: 'click'
    })
  }

  $(document).ready(function () {
    $('input[type="tel"]').inputmask({"mask": "+7 (999) 999-99-99",
      "oncomplete": function(e) {
      this.classList.add('validated');
      var inputmaskValue = this.inputmask.unmaskedvalue();
      },
      "onincomplete": function (e) {
      this.classList.remove('validated');
      },
      "onclear": function (e) {
      this.classList.remove('validated');
      },
    });
  });

  if(window.innerWidth >= 1024) {
    AOS.init();
  }
})
