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
  $("#traduction").text("Text translation");

});

 //.........................................................................paires de langues
$("#fr").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"Notre technologie supporte plus de 140 paires de langues"');
});

$("#de").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"Unsere Technologie unterstützt mehr als 140 Sprachkombinationen"');
});

$("#it").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"La nostra tecnologia supporta oltre 140 coppie di lingue"');

});
$("#es").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"Nuestra tecnología es compatible con más de 140 pares de idiomas"');

});
$("#hongrie").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"A technológia támogatja a több mint 140 nyelven párokat"');

});
$("#jap").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"「私たちの技術は、 140以上の言語ペアをサポートしています」"');

});
$("#cor").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"우리의 기술은 140여 언어 쌍 을 지원합니다"');

});
$("#il").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"הטכנולוגיה שלנו תומכת מעל 140 זוגות שפות"');

});
$("#aus").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"Our technology supports over 140 language pairs"');

});
$("#chin").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"我们的技术支持超过140个语言对”"');

});
$("#bra").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"Nossa tecnologia oferece suporte a mais de 140 pares de línguas"');

});
$("#arg").on('click',function (){
  console.log("here i am");
  $("#pairesdelangues").text('"Nuestra tecnología es compatible con más de 140 pares de idiomas"');

});

 //.........................................................................Changer image métier


var numimage = 0;
var src = "ecran" + (numimage) + ".png";

$("#métier").on('click',function (){
  console.log("click!");
  console.log(numimage);
  numimage = numimage +1;
  if (numimage>2) {numimage = 0};
  src = "ecran" + (numimage) + ".png";
  console.log(src);
$("#métier").attr("src", "img/" + src.toLowerCase());

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
