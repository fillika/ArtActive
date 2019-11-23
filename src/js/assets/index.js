import "popper.js";

$(document).ready(function() {
  $(".third-block__slider").slick({
    prevArrow:
      "<div class='third-block__prevArrow'> <img src='../../img/arr-left.png'></div>",
    nextArrow:
      "<div class='third-block__nextArrow'> <img src='../../img/arr-right.png'></div>",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    asNavFor: ".slider-wrapper__adresses"
  });

  $(".slider-wrapper__adresses").slick({
    arrows: false,
    asNavFor: ".third-block__slider"
  });

  $(".review-block__slider").slick({
    centerMode: true,
    prevArrow:
        "<div class='review-block__prevArrow'> <img src='../../img/arr-left.png'></div>",
    nextArrow:
        "<div class='review-block__nextArrow'> <img src='../../img/arr-right.png'></div>",
    centerPadding: '6rem'
  });
});
