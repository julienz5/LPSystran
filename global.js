// Custom JS

$(document).ready(function(){
	console.log("wtf");
  // Add your code here



  ( function ( $ ) {
  $.fn.teletype = function( options ) {
    var settings = $.extend( {}, $.fn.teletype.defaults, options );
    var object = this,
      self = $( this ),
      output = null,
      current = {
        string: '',
        index: 0,
        position: 0,
        loop: 0
      };
    var next = function() {
      current.index++;
      if ( current.index >= settings.text.length ) {
        current.index = 0;
        current.loop++;
        if ( settings.loop !== false && ( settings.loop == current.loop ) ) {
          return false;
        }
      }
      current.position = 0;
      setCurrentString();
      if ( typeof( settings.callbackNext ) == 'function' ) {
        settings.callbackNext( current, object );
      }
      return true;
    };
    var type = function() {
      if ( settings.prefix && current.position === 0 ) {
        if ( current.loop === 0 && current.index === 0 ) {
          $( '<span />' ).addClass( 'teletype-prefix' ).html( settings.prefix ).prependTo( self );
        }
      }
      var letters = current.string.split( '' ),
        letter = letters[current.position],
        start = current.position + 1;
      if ( letter == '^' || letter == '~' ) {
        var end = current.string.substr( start ).search( /[^0-9]/ );
        if ( end == -1 ) {
          end = current.string.length;
        }
        var value = current.string.substr( start, end );
        if ( $.isNumeric( value ) ) {
          current.string = current.string.replace( letter + value, '' );
          if ( letter == '^' ) {
            window.setTimeout( function() {
              window.setTimeout( type, delay( settings.typeDelay ) );
            }, value );
          } else {
            var index = current.position - value;
            current.string = current.string.substr( 0, index - 1 ) + current.string.substr( current.position - 1 );
            window.setTimeout( function() {
              backspace( Math.max( index, 0 ) );
            }, delay( settings.backDelay ) );
          }
          return;
        }
      } else if ( letter == '\\' ) {
        var nextChar = current.string.substr( start, 1 );
        if ( nextChar == 'n' ) {
          current.position++;
          letter = '<br />';
        }
      }
      if ( letter !== undefined ) {
        output.html( output.html() + letter );
      }
      current.position++;
      if ( current.position < current.string.length ) {
        window.setTimeout( type, delay( settings.typeDelay ) );
      } else if ( settings.preserve === false ) {
        window.setTimeout( function() {
          window.setTimeout( backspace, delay( settings.backDelay ) );
        }, settings.delay );
      } else {
        output.html( output.html() + '<span class="teletype-prefix">' + settings.prefix + '</span>' );
        if ( next() ) {
          window.setTimeout( function() {
            window.setTimeout( type, delay( settings.typeDelay ) );
          }, settings.delay );
        } else if ( typeof( settings.callbackFinished ) == 'function' ) {
          settings.callbackFinished( object );
        }
      }
      if ( typeof( settings.callbackType ) == 'function' ) {
        settings.callbackType( letter, current, object );
      }
    };
/*    var backspace = function( stop ) {
      if ( !stop ) {
        stop = 0;
      }
      if ( current.position > stop ) {
        output.html( output.html().slice( 0, -1 ) );
        window.setTimeout( function() {
          backspace( stop );
        }, delay( settings.backDelay ) );
        current.position--;
      } else {
        if ( stop === 0 ) {
          if ( next() === false ) {
            return;
          }
        }
        window.setTimeout( type, delay( settings.typeDelay ) );
      }
    };*/
    var delay = function( speed ) {
      var time = parseInt( speed );
      if ( settings.humanise ) {
        time += Math.floor( Math.random() * 200 );
      }
      return time;
    };
    var setCurrentString = function() {
      current.string = settings.text[current.index].replace(/\n/g, "\\n");
    }
    this.setCursor = function( cursor ) {
      $('.teletype-cursor', self).text( cursor );
    };
    return this.each( function() {
      setCurrentString();
      self.addClass( 'teletype' ).empty();
      output = $( '<span />' ).addClass( 'teletype-text' ).appendTo( self );
      if ( settings.cursor ) {
        var cursor = $( '<span />' )
          .addClass( 'teletype-cursor' )
          .appendTo( self );
        object.setCursor( settings.cursor );
        setInterval ( function() {
          cursor.animate( { opacity: 0 } ).animate( { opacity: 1 } );
        }, settings.blinkSpeed );
      }
      type();
    } );
  };
  $.fn.teletype.defaults = {
    text: [ 'one', 'two', 'three' ],
    typeDelay: 100,
    backDelay: 50,
    blinkSpeed: 1000,
    delay: 2000,
    cursor: '|',
    preserve: false,
    prefix: '',
    loop: 0,
    humanise: true,
    callbackNext: null,
    callbackType: null,
    callbackFinished: null
  };
}( jQuery ) );
//---------------------------------- end teletype

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

function typing(elem){
	elem.teletype( {
		text: $.map( elem.attr( 'title' ).split( ';' ), $.trim ),
		typeDelay: -50,
		//backDelay: 20,
		cursor: '▋',
		delay: 3000,
		preserve: false,
		prefix: '[SYSTRAN ~]# ',
		loop: 1
	} );
}

typing( $( '#pairesdelangues' ));


 //.........................................................................paires de langues
$("#fr,#de, #it, #es, #hongrie, #jap, #cor, #il, #aus, #chin, #bra, #arg" ).on('click',function (){
	var title= "";

	var id= $(this).attr('id');
	console.log(id);
	switch(id) {
    case "fr":
        title = 'Notre technologie supporte plus de 140 paires de langues';
        break;
    case "de":
        title='Unsere Technologie unterstützt mehr als 140 Sprachkombinationen';
        break;
        case "it":
        title='La nostra tecnologia supporta oltre 140 coppie di lingue';
        break;    
		case "es":
        title='Nuestra tecnología es compatible con más de 140 pares de idiomas';
        break;
    case "hongrie":
        title='A technológia támogatja a több mint 140 nyelven párokat';
        break;
    case "jap":
        title='「私たちの技術は、 140以上の言語ペアをサポートしています」';
        break;    
    case "cor":
        title='우리의 기술은 140여 언어 쌍 을 지원합니다';
        break;
    case "il":
        title='הטכנולוגיה שלנו תומכת מעל 140 זוגות שפות';
        break;
    case "aus":
        title='Our technology supports over 140 language pairs';
        break;
    case "chin":
        title='我们的技术支持超过140个语言对';
        break; 
    case "bra":
        title='Nossa tecnologia oferece suporte a mais de 140 pares de línguas';
        break; 
    case "arg":
        title='Nuestra tecnología es compatible con más de 140 pares de idiomas';
        break;                            
}
	$("#pairesdelangues").attr('title',   title );
	typing($("#pairesdelangues"));
});

// $("#de").on('click',function (){
//    $("#pairesdelangues").attr('title','""');
// 	 typing($('#pairesdelangues'));
// });
//
// $("#it").on('click',function (){
//   $("#pairesdelangues").text('"La nostra tecnologia supporta oltre 140 coppie di lingue"');
// 	typing($("#pairesdelangues"));
//
// });
// $("#es").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"Nuestra tecnología es compatible con más de 140 pares de idiomas"');
//
// });
// $("#hongrie").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"A technológia támogatja a több mint 140 nyelven párokat"');
//
// });
// $("#jap").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"「私たちの技術は、 140以上の言語ペアをサポートしています」"');
//
// });
// $("#cor").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"우리의 기술은 140여 언어 쌍 을 지원합니다"');
//
// });
// $("#il").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"הטכנולוגיה שלנו תומכת מעל 140 זוגות שפות"');
//
// });
// $("#aus").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"Our technology supports over 140 language pairs"');
//
// });
// $("#chin").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"我们的技术支持超过140个语言对”"');
//
// });
// $("#bra").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"Nossa tecnologia oferece suporte a mais de 140 pares de línguas"');
//
// });
// $("#arg").on('click',function (){
//   console.log("here i am");
//   $("#pairesdelangues").text('"Nuestra tecnología es compatible con más de 140 pares de idiomas"');
//
// });

 //.........................................................................Changer image métier


var numimage = 0;
var src = "ecran" + (numimage) + ".png";

$("#mouse").on('click',function (){
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

 //.........................................................................Teletype







   });
