$(document).ready(function () {
  $(".news-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="news-slider-btn news-prev-btn"><img src="img/main/content/news/arrow.png"></button>',
    nextArrow: '<button type="button" class="news-slider-btn news-next-btn"><img src="img/main/content/news/next.png"></button>'
  });
  $(".partners-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="partners-slider-btn partners-prev-btn"><img src="img/main/content/news/arrow.png"></button>',
    nextArrow: '<button type="button" class="partners-slider-btn partners-next-btn"><img src="img/main/content/news/next.png"></button>'
  });
  $(".main-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1
  });
  $(".service-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="service-slider-btn service-prev-btn"><img src="img/main/content/news/arrow.png"></button>',
    nextArrow: '<button type="button" class="service-slider-btn service-next-btn"><img src="img/main/content/news/next.png"></button>',
    responsive: [{
      breakpoint: 991,
      settings: "slick"
    }, {
      breakpoint: 4000,
      settings: "unslick"
    }]
  });
  $(".product-deal_slaider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="service-slider-btn proddeal-prev-btn"><img src="img/main/content/news/arrow.png"></button>',
    nextArrow: '<button type="button" class="service-slider-btn proddeal-next-btn"><img src="img/main/content/news/next.png"></button>',
    responsive: [{
      breakpoint: 991,
      settings: "slick"
    }, {
      breakpoint: 4000,
      settings: "unslick"
    }]
  });
});