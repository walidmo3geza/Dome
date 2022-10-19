/**
 * @author pxdraft
 * @version 1.0
 *
 */
(function($) {
    "use strict";
    var CRE = {};
    $.fn.exists = function() {
        return this.length > 0;
    };

    /* ---------------------------------------------- /*
     * Pre load
    /* ---------------------------------------------- */
    CRE.PreLoad = function() {
        document.getElementById("loading").style.display = "none";
    }

    /*--------------------
      * Menu toogle header
    ----------------------*/
    CRE.MenuToggleClass = function() {
        $('.navbar-toggler').on('click', function() {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('header').toggleClass('header-toggle');
            }
        })
    }

    /* ---------------------------------------------- /*
     * Header Fixed
    /* ---------------------------------------------- */
    CRE.HeaderFixd = function() {
        var HscrollTop = $(window).scrollTop();
        if (HscrollTop >= 100) {
            $(".navbar-dark").addClass("navbar-light");
            $(".navbar-dark").addClass("navbar-dark-top");
            $(".navbar-dark-top").removeClass("navbar-dark");
            $(".header-main").addClass("fixed-header");
        } else {
            $(".navbar-dark-top").removeClass("navbar-light");
            $(".navbar-dark-top").addClass("navbar-dark");
            $(".navbar-dark").removeClass("navbar-dark-top");
            $(".header-main").removeClass("fixed-header");
        }
    }
    
    /* ---------------------------------------------- /*
     * Header height
    /* ---------------------------------------------- */
    CRE.HeaderHeight = function() {
        var HHeight = $('.header-height').outerHeight()
        var HHeightTop = $('.header-top').outerHeight()
        $('.header-height-bar').css("min-height", HHeight);
        $('.header-main').css("top", - HHeightTop);
    }

    /*--------------------
    * Counter
    ----------------------*/
    CRE.Counter = function() {
        //var counter = jQuery(".counter");
        var $counter = $('.counter');
        if ($counter.length > 0) {
            $counter.each(function() {
                var $elem = $(this);
                $elem.appear(function() {
                    $elem.find('.count').countTo({
                        speed: 2000,
                        refreshInterval: 10
                    });
                });
            });
        }
    }

    /*--------------------
    * Owl Corousel
    ----------------------*/
    CRE.Owl = function() {
        var owlslider = $("div.owl-carousel");
        if (owlslider.length > 0) {
            owlslider.each(function() {
                var $this = $(this),
                    $items = ($this.data('items')) ? $this.data('items') : 1,
                    $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                    $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                    $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                    $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                    $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                    $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                    $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                    $CenterSlider = ($this.data('center')) ? $this.data('center') : false,
                    $stage = ($this.attr('data-stage')) ? $this.data('stage') : 0,
                    $space = ($this.attr('data-space')) ? $this.data('space') : 30;

                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                        0: {
                            items: $this.data('xs-items') ? $this.data('xs-items') : 1
                        },
                        576: {
                            items: $this.data('sm-items') ? $this.data('sm-items') : 1
                        },
                        768: {
                            items: $this.data('md-items') ? $this.data('md-items') : 1
                        },
                        992: {
                            items: $this.data('lg-items') ? $this.data('lg-items') : 1
                        },
                        1200: {
                            items: $items
                        }
                    },
                    dots: $navdots,
                    autoplayTimeout: $autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight: $autohgt,
                    center: $CenterSlider,
                    margin: $space,
                    stagePadding: $stage,
                    nav: $navarrow,
                    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true
                });
            });
        }
    }

    /* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    CRE.Gallery = function() {
        var GalleryPopup = $('.lightbox-gallery');
        if (GalleryPopup.length > 0) {
            $('.lightbox-gallery').magnificPopup({
                delegate: '.gallery-link',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-fade',
                fixedContentPos: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after CRE current image
                }
            });
        }
        var VideoPopup = $('.video-btn');
        if (VideoPopup.length > 0) {
            $('.video-btn').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
    }


    /*--------------------
        * Progress Bar 
    ----------------------*/
    CRE.ProgressBar = function() {
        $(".skill-bar .skill-bar-in").each(function() {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    }


    /*--------------------
        * Parallax
    ----------------------*/
    CRE.parallax = function() {
        var Parallax = $('.parallax');
        if (Parallax.length > 0) {
            jarallax(document.querySelectorAll('.parallax'));
            /*jarallax(document.querySelectorAll('.parallax-img'), {
                keepImg: true,
            });*/
        }
    }

    // Window on Load
    $(window).on("load", function() {
        CRE.PreLoad();
    });
    // Document on Ready
    $(document).ready(function() {
        CRE.HeaderFixd(),
        CRE.Counter(),
        CRE.MenuToggleClass(),
        CRE.Gallery(),
        CRE.HeaderHeight(),
        CRE.ProgressBar(),
        CRE.parallax(),
        CRE.Owl();
    });

    // Document on Scrool
    $(window).scroll(function() {
        CRE.ProgressBar(),
            CRE.HeaderFixd();
    });

    // Window on Resize
    $(window).resize(function() {
        CRE.HeaderHeight();
    });

})(jQuery);