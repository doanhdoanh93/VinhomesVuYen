var GUI = (function () {
  var win = $(window);
  var html = $("html,body");

  var menuDesktop = function () {
    var m_nav = $(".menu-header-desktop").children("ul");
    m_nav.find("li").each(function () {
      if ($(this).find("ul>li").length > 0) {
        $(this).prepend('<i class="fa fa-angle-down" aria-hidden="true"></i>');
      }
    });
  };
  var menuMobile = function () {
    $(document).ready(function ($) {
      $(".btn_sp_menu").on("click", function (event) {
        $(".animated-icon1").toggleClass("open");
        $(".bg-over-menu").toggleClass("show-over");
        $("#main-menu-mobile").toggleClass("active-menu-mobile");
      });
      $(".bg-over-menu").on("click", function (event) {
        $(".animated-icon1").toggleClass("open");
        $(".bg-over-menu").toggleClass("show-over");
        $("#main-menu-mobile").toggleClass("active-menu-mobile");
      });
      $(".close-menu-btn").on("click", function (event) {
        $(".animated-icon1").toggleClass("open");
        $(".bg-over-menu").toggleClass("show-over");
        $("#main-menu-mobile").toggleClass("active-menu-mobile");
      });
    });
    $("#main-menu-mobile .menu_clone")
      .find("ul li")
      .each(function () {
        if ($(this).find("ul>li").length > 0) {
          $(this).prepend("<i></i>");
        }
      });
    $("#main-menu-mobile .menu_clone ul")
      .find("li i")
      .click(function (event) {
        var ul = $(this).nextAll("ul");
        if (ul.is(":hidden")) {
          $(this).addClass("active");
          ul.slideDown(200);
        } else {
          $(this).removeClass("active");
          ul.slideUp();
        }
      });
  };
  var menuFixed = function () {
    win.scroll(function (event) {
      if (win.scrollTop() > $(".main-header").height()) {
        $(".main-header").addClass("fixed");
      }
      if (win.scrollTop() == 0) {
        $(".main-header").removeClass("fixed");
      }
    });
  };
  var slideBannerHome = function () {
    if ($(".h-slide-banner").length > 0) {
      var slider = tns({
        container: ".h-slide-banner",
        items: 1,
        slideBy: "page",
        autoplay: true,
        controls: false,
        nav: false,
        autoplayButton: false,
        autoplayText: ["", ""],
        autoplayButtonOutput: false,
        mouseDrag: true,
      });
    }
  };

  var map = function () {
    setTimeout(function () {
      var str =
        '<iframe title="Google map" src="' +
        $(".map").attr("data-src") +
        '" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
      $(".map").html(str);
    }, 3000);
  };

  var slideReson = function () {
    if ($(".reson_slide").length > 0) {
      var resonSlider = tns({
        container: ".reson_slide",
        items: 4,
        slideBy: "page",
        autoplay: true,
        controls: false,
        autoplayButton: false,
        autoplayText: ["", ""],
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: false,
        gutter: 20,

        responsive: {
          300: {
            items: 1,
            gutter: 10,
          },
          700: {
            items: 2,
            gutter: 20,
          },
          991: {
            items: 3,
            gutter: 20,
          },
          1200: {
            items: 4,
            gutter: 20,
            nav: false,
          },
        },
      });
    }
  };

  var popupRegis = function () {
    if ($(".main-popup-regis").length > 0) {
      setTimeout(function () {
        $(".main-popup-regis").fadeIn(300);
      }, 40000);
    }
    $(".frame-frm-regis .close-popup").click(function (event) {
      event.preventDefault();
      $(".main-popup-regis").fadeOut(300);
    });
    $(".close-main").click(function (event) {
      event.preventDefault();
      $(".main-popup-regis").fadeOut(300);
    });
    $(".btn-bao-gia").click(function (event) {
      event.preventDefault();
      $(".main-popup-regis").fadeIn(300);
    });
  };
  var backToTop = function () {
    if ($(".back_to_top").length > 0) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
          $(".back_to_top").fadeIn();
        } else {
          $(".back_to_top").fadeOut();
        }
      });
      $(".back_to_top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
      });
    }
  };
  var wowJs = function () {
    var wow = new WOW();
    wow.init();

    WOW.prototype.addBox = function (element) {
      this.boxes.push(element);
    };

    $(".wow")
      .on("scrollSpy:exit", function () {
        $(this)
          .css({
            visibility: "hidden",
            "animation-name": "none",
          })
          .removeClass("animated");
        wow.addBox(this);
      })
      .scrollSpy();
  };

  var _initSocial = function () {
    $(window).bind("load", function () {
      setTimeout(function () {
        $("body").append('<div id="fb-root"></div>');
        $.ajax({
          global: false,
          url: "theme/frontend/js/social.js",
          dataType: "script",
        });
        window.___gcfg = {
          lang: "vi",
          parsetags: "onload",
        };
      }, 3000);
    });
  };

  var fixedMenu = function () {
    var header = $("header");
    var heightHeader = $("header").outerHeight();
    var nextItem = header.next();
    $(window).scroll(function (event) {
      var _posCurrent = $(window).scrollTop();
      if (_posCurrent > heightHeader) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    });
  };

  return {
    _: function () {
      menuMobile();
      // menuFixed();
      menuDesktop();
      slideBannerHome();
      popupRegis();
      backToTop();
      wowJs();
      _initSocial();
      // fixedMenu();
      slideReson();
      // map();
    },
  };
})();

var AJAX = (function () {
  var video = function () {
    function youtubeParser(url) {
      var regExp =
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    }

    $(".video").each(function () {
      var html =
        '<iframe width="100%" src="https://www.youtube.com/embed/' +
        youtubeParser($(this).attr("data-link")) +
        '?autoplay=0" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      $(this).append(html);
    });
  };
  var slideGalaryImg = function () {
    if ($(".slider-for").length > 0) {
      $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        asNavFor: ".slider-nav",
      });
    }
    if ($(".slider-nav").length > 0) {
      $(".slider-nav").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "30px",
        asNavFor: ".slider-for",
        dots: false,
        focusOnSelect: true,

        responsive: [
          {
            breakpoint: 992,
            settings: {
              vertical: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              vertical: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 580,
            settings: {
              vertical: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 380,
            settings: {
              vertical: false,
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  };
  var ajaxImg = function (url_img) {
    if ($("#img-tab").length > 0) {
      $.ajax({
        url: url_img,
        type: "GET",
        dataType: "html",
      })
        .done(function (data) {
          $(".gellary_img").html(data);
          slideGalaryImg();
        })
        .fail(function () {
          console.log("error");
        })
        .always(function () {
          console.log("complete");
        });
    }
  };
  var ajaxVideo = function (url_img) {
    if ($("#video-tab").length > 0) {
      $.ajax({
        url: url_img,
        type: "GET",
        dataType: "html",
      })
        .done(function (data) {
          $(".gellary_img").html(data);
          slideGalaryImg();
          video();
        })
        .fail(function () {
          console.log("error");
        })
        .always(function () {
          console.log("complete");
        });
    }
  };

  var clickAjax = function () {
    $("#img-tab").click(function (event) {
      var url = window.location.origin;
      var g_img = $(this).attr("data-link");
      var url_img = url + "/" + g_img;
      $(this).addClass("img");
      ajaxImg(url_img);
    });
    $("#video-tab").click(function (event) {
      var url = window.location.origin;
      var g_img = $(this).attr("data-link");
      var url_img = url + "/" + g_img;

      ajaxVideo(url_img);
    });
  };

  var loadImg = function () {
    var url = window.location.origin;

    var g_img = $("#img-tab").attr("data-link");
    var url_img = url + "/" + g_img;
    ajaxImg(url_img);
  };

  return {
    _: function () {
      loadImg();
      clickAjax();
    },
  };
})();

function youtubeParser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
$(document).on("click", ".video_add", function (e) {
  var html =
    '<iframe width="100%" src="https://www.youtube.com/embed/' +
    youtubeParser($(this).attr("data-link")) +
    '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  $(this).append(html);
});

function youtubeParser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

$(document).ready(function ($) {
  AJAX._();
  GUI._();
  success = function (json) {
    if (json.code == 200) {
      toastr.success(json.message);
      setTimeout(function () {
        window.location.reload();
      }, 500);
    } else {
      toastr.error(json.message);
    }
  };
});

// function disableSelection(e) {
// 	if (typeof e.onselectstart != "undefined") e.onselectstart = function () {
// 		return false
// 	};
// 	else if (typeof e.style.MozUserSelect != "undefined") e.style.MozUserSelect = "none";
// 	else e.onmousedown = function () {
// 		return false
// 	};
// 	e.style.cursor = "default"
// }
// window.onload = function () {
// 	disableSelection(document.body)
// };
// window.addEventListener("keydown", function (e) {
// 	if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 67 || e.which == 70 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) {
// 		e.preventDefault()
// 	}
// });
// document.keypress = function (e) {
// 	if (e.ctrlKey && (e.which == 65 || e.which == 66 || e.which == 70 || e.which == 67 || e.which == 73 || e.which == 80 || e.which == 83 || e.which == 85 || e.which == 86)) { }
// 	return false
// };
// document.onkeydown = function (e) {
// 	e = e || window.event;
// 	if (e.keyCode == 123 || e.keyCode == 18) {
// 		return false
// 	}
// };
// document.oncontextmenu = function (e) {
// 	return false
// };
// document.ondragstart = function () {
// 	return false
// };
document.addEventListener("copy", function (e) {
  e.preventDefault();
  var copyText = "Muốn copy hãy liên hệ 0822381111";
  e.clipboardData.setData("text/plain", copyText);
});
