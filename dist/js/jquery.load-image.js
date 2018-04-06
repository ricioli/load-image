/*
Responsavel pelo carregamento dinamico das imagens.
*/

;(function($) {
    $.fn.loadImage = function(options) {
      var settings = $.extend({
          desconto: 0
      }, options);

      return this.each(function() {
          var $this = $(this);

          function load_image() {
            $this.attr('src', $this.data('src')).removeAttr('data-src').removeClass('load-image');
          }

          if($this.offset().top < ($(window).scrollTop() + $(window).height() + settings.desconto) ) {
            load_image();
          }

          $this.one('load_image', function(){
            load_image();
          });

          $(window).on('scroll', function(){
            if($this.offset().top < ($(window).scrollTop() + $(window).height() + settings.desconto) ) {
              $this.trigger('load_image');
            }
          });

      });
    }
})(jQuery);
