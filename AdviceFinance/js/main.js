$(function () {

$('.main-feedback__slider').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">'
});

$('.main-reazon__sertifice-img').magnificPopup({
  type: 'image',
  closeOnContentClick: true,
  closeBtnInside: false,
  fixedContentPos: true,
  mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
  image: {
    verticalFit: true
  },
  zoom: {
    enabled: true,
    duration: 300 // don't foget to change the duration also in CSS
  }
});

let btn = document.querySelectorAll('.btn'),
    modal = document.querySelector('.wrap-modal'),
    modal1 = document.querySelector('.modal_1'),
    modal2 = document.querySelector('.modal_2'),
    btnModal = document.querySelector('.modal-form__btn-submit'),
    close1 = document.querySelector('.modal-form__icon'),
    close2 = document.querySelector('.modal-answer__icon');

for(let i = 0; i < btn.length; i++){
  $(btn).bind('click', function(){
    $(modal).show();
    $(modal1).show();
  });
};


$(close1).on('click', function(){
  $(modal).hide();
});

$(btnModal).on('click', function(){
  $(modal1).hide();
  $(modal2).show();
});

$(close2).on('click', function(){
  $(modal).hide();
  $(modal2).hide();
});



});    