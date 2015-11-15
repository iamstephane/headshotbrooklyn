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

  $('#gallery').Chocolat();

  $('footer .details').on('click', function(event){
    event.preventDefault();
    var targetContent = $(this).data('content');
    contentModal(targetContent);
  });

  function contentModal(targetContent){
    $('.scrim').fadeIn('fast');
    $('.content-modal').show();
    $('.content-modal').find('.' + targetContent).show();

    $('.closer').on('click', function(){
      $('.scrim, .content-modal, .content-modal .content').hide();
    });
  };

  //contentModal('details-combo');
}

init();
