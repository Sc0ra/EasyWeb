$(document).ready(function() {
  var $etapes = $('.etape');
  // initialize fullPage
  $('#fullpage').fullpage({
    anchors: ['accueil', 'installation','utilisation','blog','contacts'],
    menu: '#menu',
    responsiveWidth: 1081,
    afterResponsive: function(isResponsive){

    },
    onLeave: function(index, nextIndex, direction){

      // first animation
      if( index == 1 && nextIndex == 2 ) {
        $etapes.eq(0).addClass('animated fadeInLeft');
        $etapes.eq(0).css('animation-delay', '.1s');
        $etapes.eq(1).addClass('animated fadeInRight');
        $etapes.eq(1).css('animation-delay', '.2s');
        $etapes.eq(2).addClass('animated fadeInLeft');
        $etapes.eq(2).css('animation-delay', '.3s');
      }
     }
  });
});
