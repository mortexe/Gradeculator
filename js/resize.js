$(window).resize(function(){
   var width = $(window).width();
   if (width >= 501){
     $('.follow-me').show();
     $('.container .col-xs-3.perc h3').text('Weight');
   }
   if (width >= 329){
     $('.follow-me').show();
     $('.container .col-xs-3.perc h3').text('Weight');
   }
   if (width <= 348){
      $('.follow-me').hide();
     $('.container .col-xs-3.perc h3').text('%');
   }
})
.resize();
