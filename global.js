// Custom JS

$(document).ready(function(){
	console.log("wtf");
  // Add your code here

  //.........................................................................Smooth Scroll

 	$('.scrollTo').click( function() { // Au clic sur un élément
 	var page = $(this).attr('href'); // Page cible
 	var speed = 750; // Durée de l'animation (en ms)
 	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
 	return false;
 	}); 


 //.........................................................................Changer texte traduction


$("#traduction").on('click',function (){
  console.log("here i am");
  $(this).text("Click to translate me");

});

 //.........................................................................Back to Top

if ($('#backtotop').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#backtotop').addClass('show');
            } else {
                $('#backtotop').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#backtotop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


   });
