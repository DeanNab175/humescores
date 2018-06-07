(function($){
    
    $( '.wp-caption.aligncenter' ).removeAttr( 'style' );
    $( 'img.aligncenter' ).wrap( '<figure class="centered-image" />' );
    
})(jQuery);