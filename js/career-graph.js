/* Author:
 Nick Scholl
 http://dismagazine.com
 */

function tableGraphs(maxRating) {

	var undefined;
	if (maxRating === undefined) maxRating = 10;

	jQuery( 'dl.rangeBar' ).each( function () {

		var $el = jQuery( this );
		var $dlMin = $el.find( '.min' ).eq( 0 );
		var dlMin = $dlMin.text();


		var $dlMean = $el.find( '.mean' ).eq( 0 );
		var dlMean = $dlMean.text();


		var $dlMax = $el.find( '.max' ).eq( 0 );
		var dlMax = $dlMax.text();


		var range = dlMax - dlMin;
		var $wrapper = $el.closest( '.barWrapper' );
		// console.log( $wrapper );

		var dW = (range / maxRating) * $wrapper.width();

		jQuery( this ).width( dW ); // bar width

		var dlMeanLeft = ( (dlMean - dlMin) / range ) * jQuery( this ).width();

		//console.log('min: ' + dlMin + ' / max: ' + dlMax + ' / range: ' + range + ' / width: ' + dW +' / left: ' + dlMeanLeft);

		$dlMean.css( { left: dlMeanLeft } );
		jQuery( this ).css( {left: ((dlMin / maxRating) * 100) + '%' } ); // left/min position

		jQuery( this ).fadeIn( 1000 );
	} );
}

jQuery( document ).ready( function ($) {

	$('.carousel').each(function() {
		var $el = $(this);
		if($el.is('.carousel-static')) {

			$el.carousel({
				interval: false
			});

		} else {
			$el.carousel({
				interval: 600000000
			});
		}
	});
	$('.carousel-static').carousel({
		interval: false
	});

	$('*[rel=popover]').popover({html: true});
	$('*[rel=tooltip]').tooltip();

	$( '.jump-select' ).change( function () {
		location.href = $( this ).val();
	} );

	$( '#ratings_trigger' ).on( 'shown.bs.tab', function (e) {
		$( 'body.single-law_school' ).each( function () {
			tableGraphs( 4 );
		} );
		$( 'body.single-law_firm' ).each( function () {
			tableGraphs( 10 );
		} );
	} );


	$( 'a.prevent' ).click( function () {
		return false;
	} );

	$( 'a.toggle-trigger' ).click(
		function () {
			var $tog = $( this ).next( 'div.togglable' );
			var $next = $tog.next( 'a.carousel-control-plain' );
			$tog.css( { display: 'block'} );
			$next.css( { display: 'block'} );
			$( this ).hide();
			return false;
		}
	);

	//	Law School Insider Review Tab
	$( '.view-toggle-trigger' ).click( function () {
		var $el = $( this );
		$( '.view-toggle:visible' ).fadeOut( 'fast', function () {
			$( $el.attr( 'data-target' ) ).fadeIn();
		} );
		$el.toggleClass('active').siblings().removeClass('active');
	} );

	$( '.tab-toggle-trigger' ).hover( function () {
		var $el = $( this );
		$( '.tab-toggle:visible' ).hide();
		$( $el.attr( 'data-target' ) ).not( ':visible' ).show();

	} );

} );




