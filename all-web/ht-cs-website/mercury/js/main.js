 (function () {

    'use strict';

    var carousels = function () {
        $(".owl-carousel1").owlCarousel(
            {
              loop:true,
              center: true,
              margin:0,
              responsiveClass:true,
              nav:false,
              responsive:{
                  0:{
                      items:1,
                      nav:false
                  },
                  600:{
                      items:1,
                      nav:false
                  },
                  1000:{
                      items:5,
                      nav:true,
                      loop:false,
                      center:true
                  }
              }
          }
          );
        
          // jQuery(".owl-carousel2").owlCarousel(
          //   {
          //     loop:true,
          //     center: true,
          //     margin:30,
          //     responsiveClass:true,
          //     nav:true,
          //     responsive:{
          //         0:{
          //             items:1,
          //             nav:true
          //         },
          //         600:{
          //             items:2,
          //             nav:true,
          //             margin:10,
          //             center: false,
          //         },
          //         1000:{
          //             items:3,
          //             nav:true,
          //             loop:true
          //         }
          //     }
          // });
    }

