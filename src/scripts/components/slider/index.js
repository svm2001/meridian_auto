export function slider () {

  if(document.querySelector('.production__slider')) {
    const productionSlider = new Swiper('.production__slider', {
      breakpointsInverse: false,
      slidesPerView: 3.5,
      spaceBetween: 20,
      speed: 400,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      // draggable: true,
      navigation: {
        nextEl: '.slick-next.slick-arrow',
        prevEl: '.slick-prev.slick-arrow',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      on: {
        bannerProgress: '',
        activeBullet: '',
        init(productionSlider) {
          this.activeBullet = productionSlider.pagination.bullets[productionSlider.activeIndex]
          this.bannerProgress = ''
          this.activeBullet.insertAdjacentHTML('afterbegin', `
                    <span class="swiper-slide-progress" data-banner="progress"></span>
                `)
          this.bannerProgress = document.querySelector('.production__slider .swiper-slide-progress')
        },
        autoplayTimeLeft(swiper, timeLeft, progress) {
          if (this.bannerProgress) {
            this.bannerProgress.style.width = `${(1 - progress) * 100}%`
          }
        },
        slideChange() {
          const activeIndex = productionSlider.activeIndex,
            bullets = productionSlider.pagination.bullets
          this.activeBullet = bullets[activeIndex]
          this.bannerProgress.remove()
          this.bannerProgress = ''
          this.activeBullet.insertAdjacentHTML('afterbegin', `<span class="swiper-slide-progress" data-banner="progress"></span>`)
          this.bannerProgress = document.querySelector('.production__slider .swiper-slide-progress')
        }
      },
    });
  }

  if(document.querySelector('.production__slider')) {
    $('.products__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 1000,
      fade: true,
    });
  }

  // if(document.querySelector('.cases__slider')) {
  //   $('.cases__slider').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     dots: true,
  //     speed: 1000,
  //   });
  // }

  if(document.querySelector('.cases__slider')) {
    const casesSlider = new Swiper('.cases__slider', {
      breakpointsInverse: false,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 400,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      // draggable: true,
      navigation: {
        nextEl: '.slick-next.slick-arrow',
        prevEl: '.slick-prev.slick-arrow',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      on: {
        bannerProgress: '',
        activeBullet: '',
        init(casesSlider) {
          this.activeBullet = casesSlider.pagination.bullets[casesSlider.activeIndex]
          this.bannerProgress = ''
          this.activeBullet.insertAdjacentHTML('afterbegin', `
                    <span class="swiper-slide-progress"></span>
                `)
          this.bannerProgress = document.querySelector('.cases__slider .swiper-slide-progress')
        },
        autoplayTimeLeft(swiper, timeLeft, progress) {
          if (this.bannerProgress) {
            this.bannerProgress.style.width = `${(1 - progress) * 100}%`
          }
        },
        slideChange() {
          const activeIndex = casesSlider.activeIndex,
            bullets = casesSlider.pagination.bullets
          this.activeBullet = bullets[activeIndex]
          this.bannerProgress.remove()
          this.bannerProgress = ''
          this.activeBullet.insertAdjacentHTML('afterbegin', `<span class="swiper-slide-progress"></span>`)
          this.bannerProgress = document.querySelector('.cases__slider .swiper-slide-progress')
        }
      },
    });
  }
}
