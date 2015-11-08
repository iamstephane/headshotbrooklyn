function init() {

  

  $('.order').on('click', function(event){
    event.preventDefault();
    $('#typeform-full').addClass('fullscreen');
    $('.cancel').show();
  });

  $('.cancel').on('click', function(event){
    event.preventDefault();
    $('#typeform-full').removeClass('fullscreen');
    $('.cancel').hide();
  });

  $('.go-to-packages').on('click', function(event){
    event.preventDefault();
    $('body').animate({
      scrollTop: $('#packages').offset().top
    }, 1000);
  });

  $('.go-to-gallery').on('click', function(event){
    event.preventDefault();
    $('body').animate({
      scrollTop: $('#gallery').offset().top
    }, 1000);
  });
}

init();
