$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });




$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');

    if(category == 'all'){
      $('.filter_item').addClass('hide');
      setTimeout(function(){
        $('.filter_item').removeClass('hide');
      }, 300);
    } else {
      $('.filter_item').addClass('hide');
      setTimeout(function(){
        $('.' + category).removeClass('hide');
      }, 300);
    }

    // prevent linking behaviour
  });
});
