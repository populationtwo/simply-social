(function (window, $, undefined) {
	var document = window.document,
		$body = $( 'body' ),
		$siteNavToggle = $( document.getElementById( 'site-nav-toggle' ) ),
		$shareBtn = $( ".meta > .share-btn" ),
		$disqusThread = $( document.getElementById( 'disqus_thread' ) ),
		$showDisqusBtn = $( document.getElementById( 'show-comments-btn' )),
		$lawModule = $( '.law-school-directory.left'),
		$related = $( document.getElementById( 'related' ) ),
		$popularWidget = jQuery( '.widget-popular-posts' );

	/**
	 * Site Navigation Toggle
	 *
	 * @param e
	 */
	function openSitesMenu(e) {
		// Add / remove .open-sites class on body
		e.preventDefault();
		$body.toggleClass( 'open-sites' );
	}

	/**
	 * Activate sharre
	 */
	if ( $shareBtn.length ) {
		$shareBtn.sharrre({
			share: {
				twitter: true,
				facebook: true,
				linkedin: true
			},
			template: '<a><i class="fa fa-share"></i> {total} Shares</a><ul class="share-box"><li class="twitter"><i class="fa fa-twitter"></i><span>Twitter</span></li><li class="facebook"><i class="fa fa-facebook-square"></i><span>Facebook</span></li><li class="linkedin"><i class="fa fa-linkedin"></i><span>Linkedin</span></li><li class="googlePlus"><i class="fa fa-google-plus"></i><span>Google +</span></li></ul>',
			enableHover: false,
			enableTracking: true,
			render: function(api, options){
				$(api.element).on('click', '.twitter', function() {
					api.openPopup('twitter');
				});
				$(api.element).on('click', '.facebook', function() {
					api.openPopup('facebook');
				});
				$(api.element).on('click', '.linkedin', function() {
					api.openPopup('linkedin');
				});
				$(api.element).on('click', '.googlePlus', function() {
					api.openPopup('googlePlus');
				});
			}
		});
	}

	/**
	 * Initialize any carousels
	 */
	if ( $().owlCarousel ) {
		var $relatedArticlesStrip = $( document.getElementById( 'related-articles-strip' ) ),
			$relatedArticlesMod = $( document.getElementById( 'related-articles-mod' ) ),
			$schoolDirectoryFull = $( document.getElementById( 'lawschool-directory-carousel-full' ) ),
			$schoolDirectoryEmbed = $( document.getElementById( 'lawschool-directory-carousel-embed' ) ),
			$firmDirectoryFull = $( document.getElementById( 'lawfirm-directory-carousel-full' ) ),
			$firmDirectoryEmbed = $( document.getElementById( 'lawfirm-directory-carousel-embed' ) ),
			$banner = $( document.getElementById( 'banner' ) );

		if ( $relatedArticlesStrip.length ) {
			$relatedArticlesStrip.owlCarousel({
				navigation    : true,
				pagination    : false,
				scrollPerPage : true,
				slideSpeed    : 600,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				theme         : "atl"
			});
		}

		if ( $relatedArticlesMod.length ) {
			$relatedArticlesMod.owlCarousel({
				// Related articles below post
				items         : 3,
				navigation    : true,
				pagination    : false,
				scrollPerPage : true,
				slideSpeed    : 600,
				navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
				theme         : "atl"
			});
		}

		if ( $schoolDirectoryFull.length ) {
			$schoolDirectoryFull.owlCarousel({
				// Related articles below post
				items            : 1,
				itemsDesktop     : [1199, 1],
				itemsDesktopSmall: [980, 1],
				itemsTablet      : [768, 1],
				navigation       : true,
				pagination       : false,
				scrollPerPage    : true,
				slideSpeed       : 600,
				autoPlay         : 7000,
				stopOnHover      : true,
				navigationText   : ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
				theme            : "atl"
			});
		}

		if ( $schoolDirectoryEmbed.length ) {
			$schoolDirectoryEmbed.owlCarousel({
				// Related articles below post
				items            : 1,
				itemsDesktop     : [1199, 1],
				itemsDesktopSmall: [980, 1],
				itemsTablet      : [768, 1],
				navigation       : true,
				pagination       : false,
				scrollPerPage    : true,
				slideSpeed       : 600,
				autoPlay         : 7000,
				stopOnHover      : true,
				navigationText   : ["<i class='fa fa-chevron-left'></i> Prev", "Next <i class='fa fa-chevron-right'></i>"],
				theme            : "atl"
			});
		}

		if ( $firmDirectoryFull.length ) {
			$firmDirectoryFull.owlCarousel({
				// Related articles below post
				items            : 1,
				itemsDesktop     : [1199, 1],
				itemsDesktopSmall: [980, 1],
				itemsTablet      : [768, 1],
				navigation       : true,
				pagination       : false,
				scrollPerPage    : true,
				slideSpeed       : 600,
				autoPlay         : 7000,
				stopOnHover      : true,
				navigationText   : ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
				theme            : "atl"
			});
		}

		if ( $firmDirectoryEmbed.length ) {
			$firmDirectoryEmbed.owlCarousel({
				// Related articles below post
				items            : 1,
				itemsDesktop     : [1199, 1],
				itemsDesktopSmall: [980, 1],
				itemsTablet      : [768, 1],
				navigation       : true,
				pagination       : false,
				scrollPerPage    : true,
				slideSpeed       : 600,
				autoPlay         : 7000,
				stopOnHover      : true,
				navigationText   : ["<i class='fa fa-chevron-left'></i> Prev", "Next <i class='fa fa-chevron-right'></i>"],
				theme            : "atl"
			});
		}

		if ( $banner.length ) {
			$( '.banner.owl-carousel' ).owlCarousel({
				singleItem  : true,
				pagination  : false,
				autoPlay    : true,
				slideSpeed  : 600,
				rewindSpeed : 300,
				theme       : 'atl'
			});
		}
	}

	if ( $lawModule.length ) {
		var $secondParagraph = $( '.content p:eq(2)' );

		if ( $secondParagraph.length ) {
			$lawModule.insertAfter( $secondParagraph );
		}

		$lawModule.show();
	}

	if ( $related.length ) {
		var $thirdParagraph = $( '.content p:eq(3)' );

		if ( $thirdParagraph.length ) {
			$related.insertAfter( $thirdParagraph );
			$related.show();
		}
	}

	if ( $popularWidget.length ) {
		$popularWidget.on( 'click', '.tabs a', function( e ) {
			e.preventDefault();

			var $this = $( e.currentTarget ),
				time,
				$tab;

			if ( $this.hasClass( 'active' ) ) {
				return false;
			} else {
				$popularWidget.find( '.tabs a' ).removeClass( 'active' );
				$this.addClass( 'active' );
				time = $this.data( 'time' );

				$tab = $( '.widget-popular-posts .tabbed' ).find( '[data-tab='+ time +']' );
				$popularWidget.find( '.tabbed div' ).hide();
				$tab.show();
			}
		})
	}

	/**
	 * Social share buttons
	 *
	 * @param e
	 */
	function toggleShareBox(e) {
		// Toggle .active class on .share-box
		e.preventDefault();
		e.stopPropagation();
		return $( this )
			.find( '.share-box' )
			.toggleClass( 'active' );
	}

	function shareBoxClassHandler() {
		// Remove .active class
		var $shareBox = $( '.share-box' );

		if ( $shareBox.length ) {
			if ( $shareBox.hasClass( 'active' ) ) {
				$shareBox.removeClass( 'active' );
			}
		}

		return true;
	}

	/**
	 * Show Disqus comments when a comment link has been clicked or when the URL or hash indicates to show or anchor to comments. Otherwise hide Disqus.
	 *
	 * @param e
	 */
	function toggleDisqus(e) {
		// Fade the Disqus comments and add .active class to #show-comments-btn.
		if ( e != undefined )
			e.preventDefault();

		$disqusThread.fadeToggle( 200 );
		$( '#comments' ).toggleClass( 'active' );
	}

	if( (window.location.hash == '#disqus_thread') || (window.location.hash == '#comments') ) {

		var loc = window.location.toString();
		_gaq.push(['_trackEvent', 'Comments View', 'Disqus Anchor', loc]);

		$('#comments').addClass('active');

	} else if( $('body.single-post').length > 0 ) {

		var check;
		check = window.location.href.split('?')[1];

		if ( check != undefined && check.match(/show=comments/gi) != null ) {

			$('#comments').addClass('active');

		} else {
			$disqusThread.hide(); // Hide Disqus comments on init.
		}

	}







	/**
	 * Use left/right arrows to navigate to prev/next post.
	 *
	 * @param e
	 */
	$(document).keydown(function(e) {
		if (e.keyCode == 37) {
    	var l = $('.prev-post a').eq(0).attr('href');
			if (l) {
				_gaq.push(['_trackEvent', 'Prev/Next Article Click', 'Left Key', $(this).attr('href')]);

				window.location = l;
      	return false;
			}
    }
		if (e.keyCode == 39) {
   		var l = $('.prev-post a').eq(0).attr('href');
			if (l) {
				_gaq.push(['_trackEvent', 'Prev/Next Article Click', 'Right Key', $(this).attr('href')]);

				window.location = l;
   			return false;
			}
		}
	});
	// Track the actual clicks of prev/next in Analytics.
	$('.prev-post, .prev-post').click(function() {
		_gaq.push(['_trackEvent', 'Prev/Next Article Click', $(this).data('direction') + ' Click', $(this).attr('href')]);
	});



	/**
	 * Every 15 minutes, force refresh of any page where comments aren't open.
	 *
	 *
	 */
	var r = setTimeout(function() {
		var allowRefresh = true;

		if( window.location.hash == '#disqus_thread' || window.location.hash == '#comments' ) {
			allowRefresh = false;
		}

		if (allowRefresh) {
		_gaq.push(['_trackEvent', 'Automation', 'Force Refresh', window.location.href]);
	   window.location.reload(true);
		}
	}, 900000);

	/**
	 * Events handler
	 */
	$siteNavToggle.on( 'click', openSitesMenu );  // Site navigation toggle
	$shareBtn.each( function () {                 //.share-btn click handler
		$( this ).on( 'click', toggleShareBox );
	} );
	$body.on( 'click', shareBoxClassHandler );    // hide shareBox
	//$showDisqusBtn.on( 'click', toggleDisqus );

})( window, jQuery, undefined );