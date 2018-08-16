$(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#4fdded'],
    // anchor:['qhb-title','qbh-list','qbh-buy','qbh-info','qbh-payment','qbh-delivery','qbh-appraise','qbh-shoppong'],
    navigation: true,

    afterLoad: function(anchorLink, index) {
      // console.log(index);
      if (index == 2) {
        // console.log(typeof index);
        $(".qbh-list .qbh-list-search-box").animate({
          "opacity": 1,
          "right": 180

        }, 1000, function() {
          $(this).hide();
          $(".qbh-list-word .qbh-list-worda").animate({
            "opacity": 0
          }, 1000)
          $(".qbh-list-word .qbh-list-wordb").animate({
            "opacity": 1
          }, 1000)


          $(".qbh-list .qbh-list-search-finish").show().animate({
            right: 82,
            bottom: 447,
            width: 150

          }, 1000, function() {
            $(".qbh-list-sofa .qbh-list-sofas").animate({
              "width": 441
            }, 1000)
          })


        })
      }
      // if(index==4){
      //   $("")
      // }
      // 
      if (index == 8) {
        $(document).mousemove(function(event) {
          var positionX = event.clientX-60;
          var positionY = event.clientY+10;
          var moveHeight = $(window).height() - 450;
          if (positionY < moveHeight) {
            $(".qbh-shopping .qbh-shopping-hands").css({
              left: positionX,
              top: moveHeight
            })

          } else {
            $(".qbh-shopping .qbh-shopping-hands").css({
              left: positionX,
              top: positionY
            })
          }
        })

        $(".qbh-shopping-btn").hover(function(){
          $(".qbh-shopping-btn-one,.qbh-shopping-btn-two").toggle();
        })

        $(".qbh-shopping .qbh-shopping-main .qbh-shopping-btn-again").click(function(){
          $.fn.fullpage.moveTo(1);
        })
      }



    },

    onLeave: function(index, nextIndex, direction) {
      if (index == 2 && nextIndex == 3) {
        $(".qbh-list-sofa .qbh-list-sofa-pic").show().animate({

          "left": 65,
          "top": 662,
          "width": 204

        }, 1500, function() {
          $(".qbh-buy .qbh-buy-main>div.choose").animate({
            "opacity": 1
          }, 1000)
          $(".qbh-buy .qbh-buy-main>div.no-choose").animate({
            "opacity": 0
          }, 1000)
        })
      }
      if (index == 3 && nextIndex == 4) {

        $(".qbh-list-computer .qbh-list-sofa .qbh-list-sofa-pic").hide();
        $(".qbh-buy .qbh-buy-main .qbh-buy-main-sofatofour").show().animate({
          "top": 800,
          // "left":200
        }, 1000, function() {
          $(".qbh-buy .qbh-buy-main .qbh-buy-main-sofatofour").hide();
          $(".qbh-info .qbh-info-cart-sofa .qbh-info-rotate-sofa").show();
          $(".qbh-info .qbh-info-cart-sofa").animate({
            "left": 1000
          }, 1000, function() {
            $(".qbh-info .qbh-info-word .qbh-info-worda").animate({
              "opacity": 0
            })
            $(".qbh-info .qbh-info-word .qbh-info-wordb").animate({
              "opacity": 1
            })
            $(".qbh-info .qbh-info-address-box").show();

          })

        })
      }

      if (index == 4 && nextIndex == 5) {
        $(".qbh-payment .qbh-payment-hands").animate({
          "bottom": 0
        }, 2000, function() {

          $(".qbh-payment .qbh-payment-mouse img:first-child").animate({
            "opacity": 0
          })

          $(".qbh-payment .qbh-payment-mouse img:last-child").animate({
            "opacity": 1
          })

          $(".qbh-payment .qbh-info-rotate-sofa").show().animate({
            "top": 192
          }, 1000, function() {
            $(".qbh-payment-main .qbh-payment-card img:first-child").animate({
              "top": 64
            }, 1000)
            $(".qbh-payment .qbh-payment-card img:last-child").animate({
              "top": 263
            }, 1000)
          })
        })
      }

      if (index == 5 && nextIndex == 6) {
        $(".qbh-payment .qbh-info-rotate-sofa").animate({
          "top": 800,
          "left": 485,
          "width": 20
        }, 1500)
        $(".qbh-delivery .qbh-delivery-box").show().animate({
          "top": 145,
          "left": 449
        }, 1500, function() {
          $(".qbh-payment .qbh-info-rotate-sofa").hide();
          $(this).animate({
            "top": 500,
            "left": 480,
            "width": 20
          }, 1500, function() {
            $(this).hide();
            $(".qbh-delivery .qbh-delivery-truck-font").show();
            $(".qbh-delivery").animate({
              "backgroundPositionX": '100%'
            }, 1000, function() {
              $(".qbh-delivery .qbh-delivery-font img:last-child").show();
              $(".qbh-delivery .qbh-delivery-deliveryman").show().animate({
                "width": 252,
                "right": 767,
                "bottom": 114
              }, 500, function() {
                // "z-index":-1
                $(this).animate({
                  "right": 561
                }, 1000, function() {
                  $(".qbh-delivery .qbh-delivery-shouhuo").animate({
                    opacity: 1
                  }, 1000, function() {
                    $(".qbh-delivery .qbh-delivery-door").show();
                    $(".qbh-delivery .qbh-delivery-buyer").animate({
                      opacity: 1
                    }, 1500)
                  })


                })
              })
            })
          })
        })
      }

      if (index == 6 && nextIndex == 7) {
        $(".qbh-appraise .qbh-appraise-star").addClass('star');
        $(".qbh-appraise .qbh-appraise-haoping").addClass('haoping');


      }



    }



  });
});