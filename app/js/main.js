$(function () {
  $('.slider__inner').slick({

    nextArrow: '  <button class="slick-arrow slick-prev"><img src="images/previous.png" alt="prev arrow"></button>',
    prevArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt="next arrow"></button>',
    // asNavFor: '.slider__inner-bottom',
    slidesToScroll: 1,
    slidesToShow: 1,
    responsive: [{
      breakpoint: 701,
      settings: {
        nextArrow: false,
        prevArrow: false,
      }
    }, ],

  });
  $('.slider__inner-bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 701,
      settings: {
        slidesToShow: 4,
        slidesToShow: 1,
        variableWidth: false,

      }
    }, ],
    responsive: [{
      breakpoint: 591,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
      }
    }, ],
    responsive: [{
      breakpoint: 435,
      settings: {
        slidesToShow: 2,
        variableWidth: false,

      }
    }, ],

  });

  $('.header__btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });

  $('.header__menu-down.drop-down').on('click', function () {
    $(this).children('.drop-down__inner').slideToggle();
  });



});