export function slider () {

  if(document.querySelector('.production__slider')) {
    $('.production__slider').slick({
      slidesToShow: 3.6,
      slidesToScroll: 1.5,
      arrows: false,
      dots: false,
      speed: 1000
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

  if(document.querySelector('.cases__slider')) {
    $('.cases__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 1000,
    });
  }

  // if(document.querySelector('.brands__line-items-wrap')) {
  //   $('.brands__line-items-wrap').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     dots: false,
  //     speed: 100,
  //   });
  // }
}
