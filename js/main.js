/*global $, alert, console*/

$(function () {
//    'use strict';
// $('html').niceScroll();
//     $('a.page-scroll').click(function() {
//         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//           var target = $(this.hash);
//           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//           if (target.length) {
//             $('html,body').animate({
//               scrollTop: target.offset().top 
//             }, 900);
//             return false;
//           }
//         }
    //   });
    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 0;
        if ($(window).scrollTop() >= 1) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

    $('.nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.nav li a').click(function () {        $('html,body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
    }, 1000);
    });




    $('.one.circle').circleProgress({
    value: 1
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
    });
        $('.two.circle').circleProgress({
    value: 1
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
    });
        $('.three.circle').circleProgress({
    value: .8
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
    });
        $('.foure.circle').circleProgress({
    value: .7
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(70 * progress) + '<i>%</i>');
    });



    var scrollButton = $("#scroll-top");
    
    $("#scroll-top").click(function () {
         $('html, body').animate({scrollTop : 0},1900);
    });


    $(window).load(function () {
        $('.loading-overlay .sk-cube-grid').fadeOut(200,
            function () {
                $(this).parent().fadeOut(1000,
                    function () {
                        $('body').css("overflow", "auto");
                        $(this).remove();
                    });
            });
    });

});


mybutton = document.getElementById("scroll-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollIntoView({
     behavior: "smooth",
   });
   }