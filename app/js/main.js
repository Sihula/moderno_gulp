$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    normalFill: "#A0A0A0",
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 801,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots:false,
        },
      },
    ],
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",

    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$",
  });

  $(".icon-th-list").on("click", function () {
    $(".products__item").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });
  $(".icon-th-large").on("click", function () {
    $(".products__item").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").slideToggle();
  });

  $(".header__btn-menu").on("click", function () {
    $(".header__box").toggleClass("active");
  });

  $(".product-one__tabs .tab, .settings__tabs .tab").on("click", function (
    event
  ) {
    var id = $(this).attr("data-id");
    $(".product-one__tabs, .settings__tabs")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".product-one__tabs .tabs, .settings__tabs .tabs")
      .find(".tab")
      .removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });

  $('input[type="file"], select').styler();

  var mixer = mixitup(".products__inner-box");
});
