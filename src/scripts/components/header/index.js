export function header() {

  // ******************** ADDRESS ******************** //
  const headerAddressBtn = document.querySelector('.js-header-btn-address');
  const headerAddress = document.querySelector('.header__address');
  const headerAddressClose = document.querySelector('.header__address-close');
  const alwaysVisibleBtns = document.querySelectorAll('.js-btn-visible')
  const body = document.querySelector('body')
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
  const openAddressBlock = function () {
    headerAddress.classList.add('active')
  }
  const closeAddressBlock = function () {
    headerAddress.classList.remove('active')
  }
  if(headerAddressBtn && headerAddress) {
    headerAddressBtn.addEventListener('mouseover', () => {
      openAddressBlock()
      alwaysVisibleBtnsShow()
      closeBurgerBlock()
    })
  }
  headerAddressClose.addEventListener('mouseover', () => {
    closeAddressBlock()
    alwaysVisibleBtnsHide()
  })



  // ******************** BURGER ******************** //
  const headerBurgerBtn = document.querySelector('.js-header-btn-burger');
  const headerBurger = document.querySelector('.header__burger');
  const headerBurgerClose = document.querySelector('.header__burger-close');
  const visibleBurgerBtn = document.querySelector('.header__btn.burger');

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
    })
  }
  headerBurgerClose.addEventListener('mouseover', () => {
    closeBurgerBlock()
    alwaysVisibleBtnsHide()
  })
}
