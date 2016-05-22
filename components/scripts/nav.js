$ = require('jquery');

// --------------------------------------------------------------------
// About Button Slide up and Down
// --------------------------------------------------------------------
$('.btn-about').on('click', animateDiv);

function animateDiv(e) {		
	$('.about').slideToggle();
	$('.btn-about').toggleClass('rotate rotate-reset');
}
 

// --------------------------------------------------------------------
// SCROLL and Fixed Header
// --------------------------------------------------------------------

// Cache selectors outside callback for performance. 
   var $window = $(window),
       $stickyEl = $('nav'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {

   	if($window.scrollTop() > elTop) {
        $stickyEl.addClass('sticky' );
   	} else {
   		 $stickyEl.removeClass('sticky' );
   	}

    });


// --------------------------------------------------------------------
// NAV 
// --------------------------------------------------------------------

$('nav').find('li').on('click', showWorks);

function showWorks(e) {
	console.log();
}