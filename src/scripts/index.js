import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb'

import { popup } from "./components/popup";
import { scroll } from "./components/scroll";
import { scrollTop } from "./components/scrollTop";
import { header } from "./components/header";
import { scrollDown } from "./components/scrollDown";
import { slider } from "./components/slider";
import { tabs } from "./components/tabs";
import { mapInit } from "./components/mapInit";



document.addEventListener('DOMContentLoaded', () => {
  popup();
  scroll();
  scrollTop();
  header();
  scrollDown();
  slider();
  mapInit();

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

  if(window.innerWidth >= 1024) {
    AOS.init();
  }

  const scrollMainScreen = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    getDirection: false,
  });

  scrollMainScreen.on('scroll', function(obj) {
    let windowHeight = window.innerHeight;
    let scrollPosition = obj.scroll.y;

    if (scrollPosition >= 1) {
      document.querySelector('header').style.background = '#3613C1'
    } else {
      document.querySelector('header').style.background = 'none'
    }
  });

  let previousScrollPosition = scrollMainScreen.scroll.instance.scroll.y;
  scrollMainScreen.on('scroll', function(scrollInstance) {
    let currentScrollPosition = scrollInstance.scroll.y;

    if (currentScrollPosition > previousScrollPosition) {
      document.querySelector('header').classList.remove('visible')
    } else {
      document.querySelector('header').classList.add('visible')
    }

    previousScrollPosition = currentScrollPosition;
  });

  let scrollButton = document.querySelectorAll(".btn__down");
  if(scrollButton) {
    scrollButton.forEach(item => {
      item.addEventListener("click", function() {
        let targetElement = document.querySelector('[data-scroll-id="section2"]');
        scrollMainScreen.scrollTo(targetElement);
      });
    })
  }

  scrollMainScreen.update();

  if(document.getElementById('map')) {
    document.getElementById('map').addEventListener('mouseenter', function() {
      scrollMainScreen.stop();
    });

    document.getElementById('map').addEventListener('mouseleave', function() {
      scrollMainScreen.start();
    });
  }
})
