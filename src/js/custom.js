<<<<<<< HEAD

$(window).on('load', function() {
  'use strict';
  $('#loading').addClass('hidden');
});

var $iframe = $('iframe'),
    src = $iframe.data('src');

if (window.matchMedia("(min-width: 720px)").matches) {
    $iframe.attr('src', src);
}else{
    $iframe.css('display', 'none');
}

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

(function($) {
  'use strict';

  /*====================================================*/
  /* VARIABLES                                           */
  /*====================================================*/
  var navBar = $('.custom-menu'),
    navbarLinks = $('.custom-menu .nav-link');

  /*====================================================*/
  /* STICKY NAVBAR                                      */
  /*====================================================*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $(navBar).addClass('navbar-is-sticky');
    } else {
      $(navBar).removeClass('navbar-is-sticky');
    }
  });

  $('.navbar-toggler').on('click', function(e) {
    $(this).toggleClass('menu-is-expanded');
  });

  $(document).on('click', '.navbar-collapse.show', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
      $('.navbar-toggler').toggleClass('menu-is-expanded');
      // $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
    }
  });

  /*====================================================*/
  /* NAVBAR ON SCROLL EASING                            */
  /*====================================================*/
  $(navbarLinks).on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  /*====================================================*/
  /* team SLIDER                                 */
  /*====================================================*/

  //initialize new hammer instance and swipe functionalities
var slider = new Hammer.Manager(document.getElementById('carouselExample'), { inputClass: Hammer.TouchInput});
var Swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL});
slider.add(Swipe);

//implement swipe action on the carousel
slider.on('swiperight swipeleft', function(e) {
  e.preventDefault();
  if (e.type == 'swiperight') {
    $(this).carousel('prev');
    checkitem();
  } else {
    $(this).carousel('next');
    checkitem();
  }
});


$('#carouselExample').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});
  /*====================================================*/
  /* TABS INIT                                   */
  /*====================================================*/
  $('.js-tabs a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  /*====================================================*/
  /* TOOLTIPS                                           */
  /*====================================================*/
  $('[data-toggle="tooltip"]').tooltip();

  /*====================================================*/
  /* VIDEO MODALS                                           */
  /*====================================================*/

  $('.js-video-modal-trigger').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });

})(jQuery);
=======
$(window).on("load", function () { "use strict"; $("#loading").addClass("hidden") }); var $iframe = $("iframe"), src = $iframe.data("src"); window.matchMedia("(min-width: 720px)").matches ? $iframe.attr("src", src) : $iframe.css("display", "none"), $(document).ready(function () { $(window).scroll(function () { $(this).scrollTop() > 100 ? $("#scroll").fadeIn() : $("#scroll").fadeOut() }), $("#scroll").click(function () { return $("html, body").animate({ scrollTop: 0 }, 600), !1 }) }), function (e) { "use strict"; var t = e(".custom-menu"), a = e(".custom-menu .nav-link"); e(window).on("scroll", function () { e(this).scrollTop() > 50 ? e(t).addClass("navbar-is-sticky") : e(t).removeClass("navbar-is-sticky") }), e(".navbar-toggler").on("click", function (t) { e(this).toggleClass("menu-is-expanded") }), e(document).on("click", ".navbar-collapse.show", function (t) { e(t.target).is("a") && (e(this).collapse("hide"), e(".navbar-toggler").toggleClass("menu-is-expanded")) }), e(a).on("click", function (t) { var a = e(this); e("html, body").stop().animate({ scrollTop: e(a.attr("href")).offset().top - 50 }, 1250, "easeInOutExpo"), t.preventDefault() }); var o = new Hammer.Manager(document.getElementById("carouselExample"), { inputClass: Hammer.TouchInput }), i = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }); o.add(i), o.on("swiperight swipeleft", function (t) { t.preventDefault(), "swiperight" == t.type ? (e(this).carousel("prev"), checkitem()) : (e(this).carousel("next"), checkitem()) }), e("#carouselExample").on("slide.bs.carousel", function (t) { var a = e(t.relatedTarget).index(), o = e(".carousel-item").length; if (a >= o - 2) for (var i = 3 - (o - a), n = 0; n < i; n++)"left" == t.direction ? e(".carousel-item").eq(n).appendTo(".carousel-inner") : e(".carousel-item").eq(0).appendTo(".carousel-inner") }), e(".js-tabs a").on("click", function (t) { t.preventDefault(), e(this).tab("show") }), e('[data-toggle="tooltip"]').tooltip(), e(".js-video-modal-trigger").magnificPopup({ type: "iframe", iframe: { patterns: { youtube: { index: "youtube.com/", id: function (e) { var t = e.match(/[\\?\\&]v=([^\\?\\&]+)/); return t && t[1] ? t[1] : null }, src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: function (e) { var t = e.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/); return t && t[5] ? t[5] : null }, src: "//player.vimeo.com/video/%id%?autoplay=1" } } } }) }(jQuery);
//# sourceMappingURL=custom.js.map
>>>>>>> 44621b449d05dfc42788ac59c6689047ee3e3541
