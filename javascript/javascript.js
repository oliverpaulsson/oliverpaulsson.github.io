// ANIMATE ON SCROLL

(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();

// HEADER AND TOP ARROW ON SCROLL

jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 50) {
        jQuery('.header').css('background-color', '#000000');
    } else {
       jQuery('.header').css('background-color', 'transparent');
    }
});

jQuery(window).on('scroll', function() {
    if(jQuery(window).scrollTop() > 50) {
        jQuery('#uparrow').css('opacity', '1');
    } else {
       jQuery('#uparrow').css('opacity', '0');
    }
});

// SMOOTH SCROLLING

$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#omoss").offset().top - 70
    }, 1500);
});

$("#uparrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#hero").offset().top - 70
    }, 1500);
});

$(".omosslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#omoss").offset().top - 70
    }, 1500);
});

$(".agencylink").click(function() {
    $('html, body').animate({
        scrollTop: $("#agency").offset().top - 70
    }, 1500);
});

$(".clientslink").click(function() {
    $('html, body').animate({
        scrollTop: $("#clients").offset().top - 70
    }, 1500);
});

$(".academylink").click(function() {
    $('html, body').animate({
        scrollTop: $("#academy").offset().top - 70
    }, 1500);
});

$(".timelinelink").click(function() {
    $('html, body').animate({
        scrollTop: $("#timeline").offset().top - 70
    }, 1500);
});

$(".gallerylink").click(function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top - 70
    }, 1500);
});

$(".contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 70
    }, 1500);
});
