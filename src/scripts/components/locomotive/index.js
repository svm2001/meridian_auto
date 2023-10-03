export function locomotive () {
  const scrollMainScreen = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    getDirection: true,
  });

  new ResizeObserver(() => scrollMainScreen.update()).observe(
    document.querySelector("[data-scroll-container]")
  );

  scrollMainScreen.on('scroll', function(obj) {
    let windowHeight = window.innerHeight || document.documentElement.clientHeight;
    let scrollPosition = obj.scroll.y;

    if (scrollPosition >= 1) {
      document.querySelector('header').style.background = '#3613C1'
    } else {
      document.querySelector('header').style.background = 'none'
    }

    // let isProductsReached = false;
    // const products = document.querySelector('.products');
    // const productsRect = products.getBoundingClientRect();
    //
    // if (isProductsReached === false && productsRect.top <= scrollPosition - 1200) {
    //   scrollMainScreen.stop();
    //   isProductsReached = true;
    // } else if (!isProductsReached) {
    //   console.log(isProductsReached)
    //   $('.owl-carousel').on('changed.owl.carousel', function(event) {
    //     let currentSlide = event.item.index + 1;
    //     console.log(currentSlide)
    //     if (currentSlide === 1) {
    //       scrollMainScreen.start();
    //       isProductsReached = false;
    //     }
    //
    //     if (currentSlide === 33) {
    //       scrollMainScreen.start();
    //       isProductsReached = false;
    //     }
    //   });
    // }
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
        let targetElement = document.querySelector('[data-scroll-id="section1"]');
        scrollMainScreen.scrollTo(targetElement);
      });
    })
  }

  // scrollMainScreen.update();

  if(document.getElementById('map')) {
    document.getElementById('map').addEventListener('mouseenter', function() {
      scrollMainScreen.stop();
    });

    document.getElementById('map').addEventListener('mouseleave', function() {
      scrollMainScreen.start();
    });
  }

  const alwaysVisibleBtnsShow = function () {
    alwaysVisibleBtns.forEach(item => {
      item.classList.add('visible')
    })
  }
  const alwaysVisibleBtnsHide = function () {
    alwaysVisibleBtns.forEach(item => {
      item.classList.remove('visible')
    })
  }


  // ******************** SEARCH ******************** //
  const headerSearchBtn = document.querySelector('.js-header-btn-search');
  const headerSearch = document.querySelector('.header__search');
  const headerSearchClose = document.querySelector('.header__search-close');
  const headerSearchResult = document.querySelector('.header__search-result');
  const headerSearchInput = document.querySelector('.header__search-input');
  const headerSearchResultClose = document.querySelector('.header__search-result-close');

  if(headerSearchInput && headerSearchResult) {
    headerSearchInput.addEventListener('input', (e) => {
      console.log(e.target.value)
      if(e.target.value.length >= 2) {
        headerSearchResult.classList.add('active')
      } else {
        headerSearchResult.classList.remove('active')
      }
    })
  }

  if(headerSearchResultClose) {
    headerSearchResultClose.addEventListener('click', () => {
      closeSearchBlock();
      headerSearchResult.classList.remove('active');
      headerSearchInput.value = '';
    })
  }

  const openSearchBlock = function () {
    headerSearch.classList.add('active')
    document.querySelector('header').style.zIndex = 1
    document.querySelector('header').style.borderBottom = `none`
    // scrollMainScreen.stop();
  }
  const closeSearchBlock = function () {
    headerSearch.classList.remove('active')
    document.querySelector('header').style.zIndex = 2
    document.querySelector('header').style.borderBottom = `1px solid rgba(255, 255, 255, 0.2)`
  }

  if(headerSearchBtn && headerSearch) {
    headerSearchBtn.addEventListener('mouseover', () => {
      openSearchBlock()
      alwaysVisibleBtnsShow()
      closeBurgerBlock()
      closeAddressBlock()
      scrollMainScreen.stop();
    })
  }
  headerSearchClose.addEventListener('mouseover', () => {
    closeSearchBlock()
    alwaysVisibleBtnsHide()
    scrollMainScreen.start();
  })



  // ******************** ADDRESS ******************** //
  const headerAddressBtn = document.querySelector('.js-header-btn-address');
  const headerAddress = document.querySelector('.header__address');
  const headerAddressClose = document.querySelector('.header__address-close');
  const alwaysVisibleBtns = document.querySelectorAll('.js-btn-visible')
  const body = document.querySelector('body')

  if(headerAddressBtn && headerAddress) {
    headerAddressBtn.addEventListener('mouseover', () => {
      openAddressBlock()
      alwaysVisibleBtnsShow()
      closeBurgerBlock()
      closeSearchBlock()
      scrollMainScreen.stop();
    })
  }
  headerAddressClose.addEventListener('click', () => {
    closeAddressBlock()
    closeSearchBlock()
    alwaysVisibleBtnsHide()
    scrollMainScreen.start();
  })

  const openAddressBlock = function () {
    headerAddress.classList.add('active')
  }
  const closeAddressBlock = function () {
    headerAddress.classList.remove('active')
  }

  // ******************** BURGER ******************** //
  const headerBurgerBtn = document.querySelector('.js-header-btn-burger');
  const headerBurger = document.querySelector('.header__burger');
  const headerBurgerClose = document.querySelector('.header__burger-close');

  const openBurgerBlock = function () {
    headerBurger.classList.add('active')
  }
  const closeBurgerBlock = function () {
    headerBurger.classList.remove('active')
  }
  if(headerBurgerBtn && headerBurger) {
    headerBurgerBtn.addEventListener('mouseover', () => {
      openBurgerBlock()
      alwaysVisibleBtnsShow()
      closeAddressBlock()
      closeSearchBlock()
      scrollMainScreen.stop();
    })
  }
  headerBurgerClose.addEventListener('click', () => {
    closeBurgerBlock()
    alwaysVisibleBtnsHide()
    scrollMainScreen.start();
  })
}
