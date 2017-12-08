(function($){
  $.fn.bgscroll = function( options ) {
    var settings = $.extend({
        bgpositionx: 50,
        direction: 'bottom',
        debug: false
    }, options );
    var a=$(document).height() - $(window).height();
    var b=a-(this.offset().top+this.height());
    if(this.offset().top<a)b=0;
    var c=(this.offset().top+this.height());
    if($(window).scrollTop()>b && $(window).scrollTop()<c){
      var d=($(window).scrollTop()-b)/(c-b)*100;
      if(settings.direction=='top')d=100-d;
      if(settings.debug)console.log('Element background position: '+d+' %');
    }
    return this.css({
        backgroundPosition: settings.bgpositionx+'% '+d+'%'
    });
  };
}(jQuery));
