jQuery( document ).ready( function($) {
  $( window ).scroll( function () {
    if ( $(document).scrollTop() > 150 ) {
      // Navigation Bar
      $('#container').removeClass('top-container-red');
      $('#container').addClass('top-container-blue');
    } else {
      $('#container').removeClass('top-container-blue');
      $('#container').addClass('top-container-red');
    }
  });
});
