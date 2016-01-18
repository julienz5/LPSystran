// Custom JS
$(document).ready(function(){
	
  // Add your code here

  //.........................................................................Smooth Scroll
   	$(document).ready(function() {
 	$('.scrollTo').click( function() { // Au clic sur un élément
 	var page = $(this).attr('href'); // Page cible
 	var speed = 750; // Durée de l'animation (en ms)
 	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
 	return false;
 	});
 
});
   });

 //.........................................................................Back to Top

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}



