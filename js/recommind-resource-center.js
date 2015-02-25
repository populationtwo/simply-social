(function($) {

	recommindSuccess = function() {
	
		var $rec = $('#recommind_content');
		var $side = $('#sidebar');
		
		$side.find('form').animate({ height: 0 }, 500, function() {
			$(this).hide();
			
			var $res = $('#resources');
			$res.addClass('download-ready');
			
			
			$res.find('li').each(function() {
				
				var $el = $(this);
				
				if( $el.data('src') != undefined) {
					var $btn = $('<a href="http://abovethelaw.com/wp-content/uploads/2014/11/' + $el.data('src') + '.pdf" class="btn btn-primary" target="_blank">Download PDF</a>')
				
					$el.find('img').eq(0).after($btn);
				}
			});
			
			
			$rec.animate({ width: 360 });
			$side.animate({ width: 600 });
			
			$side.find('h3').html('Thank you.<br />You may now download any PDF using the blue buttons.').css('text-align', 'left');
			
			var $vid = $('<p>Meanwhile, please enjoy this webinar from Recommind.</p><h1>The End of Predictive Coding?</h1><h2>2012 was haled as the year of predictive coding. 2013 was declared to be the year of information governance.  With 2014, we are faced with the question of what’s next in eDiscovery? In this On Demand webinar, we explore how the concept of predictive coding has evolved and consider if 2014 will mark the end of predictive coding as we know it. Watch this in-depth webinar to learn how the barrier between lawyer and machine is eroding and how real time interaction with advanced analytics is the next big thing in eDiscovery.</h2><video width="580" height="435" poster="http://www.recommind.com/wp-content/uploads/2014/08/img-the_end_predictive_coding.jpg" controls><source src="http://www.recommind.com/wp-content/uploads/2014/08/The-End-of-Predictive-Coding.mp4">Your browser does not support the video tag.</video>');
			
			$side.find('.wpcf7').eq(0).addClass('success').append($vid);
			
			
		});
	
		$('html, body').animate({
        scrollTop: $("#recommind_header").offset().top
    }, 1000);
	};


})(jQuery);