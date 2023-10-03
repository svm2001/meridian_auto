export function products () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    nav:false,
    items: 1,
    smartSpeed: 0,
    rtl:true,
    mouseDrag: false,
    fluidSpeed: false,
    startPosition: 32
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
      owl.trigger('next.owl');
    } else {
      owl.trigger('prev.owl');
    }
    e.preventDefault();
  });

  $("#polzunok").slider({
    min: 0,
    max: $(".owl-carousel .item").length - 1,
    start: 1,
    slide: function(event, ui){
      owl.trigger('to.owl.carousel', [ui.value, 0]);
    }
  });

  owl.on('changed.owl.carousel', function(e) {
    $("#polzunok").slider('value', e.item.index);
  });


}
