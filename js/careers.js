/* Author:
Nick Scholl
http://dismagazine.com
*/

function roundAccuracy(num, acc) {
	var factor=Math.pow(10,acc);
  return Math.round(num*factor)/factor;
}

function tableGraphs(maxRating) {
	
	var undefined;
	if(maxRating === undefined) maxRating = 10;
	
	jQuery('dl.rangeBar').each(function() {
		
		var $el = jQuery(this);
		var $dlMin = $el.find('.min').eq(0);
		var dlMin = $dlMin.text();
		
		
		var $dlMean = $el.find('.mean').eq(0);
		var dlMean = $dlMean.text();
		
		
		var $dlMax = $el.find('.max').eq(0);
		var dlMax = $dlMax.text();
		
		
		var range = dlMax - dlMin;
		var $wrapper = $el.closest('.barWrapper');

		var dW =  (range / maxRating) * $wrapper.width();
		
		jQuery(this).width(dW); // bar width
		
		var dlMeanLeft = ( (dlMean - dlMin) / range ) * jQuery(this).width();
		
		//console.log('min: ' + dlMin + ' / max: ' + dlMax + ' / range: ' + range + ' / width: ' + dW +' / left: ' + dlMeanLeft);
		
		$dlMean.css({ left: dlMeanLeft });
		jQuery(this).css({left: ((dlMin / maxRating) * 100) + '%' }); // left/min position
		
		jQuery(this).fadeIn(1000);
	});
}

function onLoadLinkedIn() {
	/*
	$('#linkedIn').each(function() {		
		$el = $(this);
		IN.API.Raw("/companies/universal-name=" + $el.attr('data-linkedin-stub')) // construct REST URL
	      .result( function(result) { 
						var resultsHtml = '<sc' + 'ript type="IN/FollowCompany" data-id="' + result.id + '" data-counter="right"></sc'+'ript>';						
						$el.html(resultsHtml);
						IN.parse($el[0]);
	       })
	      .error( function(error) {  } );

	});
	*/
}

function sortThing(selector, attribute, parent) {
	$(selector).sort(function(a,b){
	    return new Date($(a).attr(attribute)) > new Date($(b).attr(attribute));
	}).each(function(){
	    $(parent).prepend(this);
	});
}

jQuery(document).ready(function( $ ) {

	//var h = $('.mainWrap:eq(0)').height();
	//$('.colLeft:eq(0), .colMiddle:eq(0), .colRight').css({ height: h });
	
	$('.carousel').each(function() {
		var $el = $(this);
		if($el.is('.carousel-static')) {
			
			$el.carousel({
			  interval: false
			});
			
		} else {
			$el.carousel({
			  interval: 6000
			});
		}
	});
	$('.carousel-static').carousel({
	  interval: false
	});
	
	$('*[rel=popover]').popover({html: true});
	$('*[rel=tooltip]').tooltip();
	$('.collapse').collapse({ parent: false, toggle: false });
	$('.jump-select').change(function() {
		location.href = $(this).val();
	});	
	
	$('#ratings_trigger').on('shown.bs.tab', function(e) {
		$('body.single-law_school').each(function() {
			tableGraphs(4);
		});
		$('body.single-law_firm').each(function() {
			tableGraphs(10);
		});
	});
	
	

	$('a.prevent').click(function() {
		return false;
	});
	
	$('a.toggle-trigger').click(
		function() {
			var $tog = $(this).next('div.togglable');
			var $next = $tog.next('a.carousel-control-plain');
			$tog.css( { display: 'block'});
			$next.css( { display: 'block'});
			$(this).hide();
			return false;
		}
	);
	
	$('.view-toggle-trigger').click(function() {
		var $el = $(this);
		$('.view-toggle:visible').fadeOut('fast', function() {
			$($el.attr('data-target')).fadeIn();
		});
	});
	
	$('.tab-toggle-trigger').hover(function() {
		var $el = $(this);
		$('.tab-toggle:visible').hide();
		$($el.attr('data-target')).not(':visible').show();
			
	});
	
	
	
});




