(function (window, $, undefined) {

	// Declare all variables
	var bodyElement = document.body,
		contentWrap = document.querySelector( '.content-wrap' ),
		toggleMobileMenu = document.getElementById( 'js-mobile-menu' ),
		$mainContent = $( '.main-content' ),
		$filterBar = $( document.getElementById( 'filterbar' ) ),
		$allPost = $( '#partials-content' ),
		$viewNavItem = $( '.view-nav__item' ),
		$mobileMenuWrapper = $( '.ss-mobile-menu-wrapper' ),
		$mobileMenuToggle = $( '#js-mobile-menu' ),
		$html = $( 'html' ),
		isOpen = false;


	/**
	 * Post Reply Toggle
	 *
	 * @param e
	 */

	function showReplies() {
		$mainContent.on( 'click', ".js-btn-expand", function (e) {
			e.preventDefault();
			var $comments = $( this ).parent(),
				$thisComments = $comments.siblings( ".js-post-replies" ),
				$thisCommentsVisible = $comments.siblings( ".js-post-replies:visible" ),
				$this = $( this );

			if ($thisCommentsVisible.length) {
				$thisComments.slideUp( 200 );
				$this.toggleClass( 'up' );
			} else {
				$thisComments.slideDown( 200 );
				$this.toggleClass( 'up' );
			}
		} );
	}

	/**
	 * Load Posts from /partials.
	 *
	 * @param e
	 */
	function loadPartials() {
		$allPost.load( "partials/all.html" );
	}

	/**
	 * Sub navigation toggle to filter photos and videos
	 *
	 * @param e
	 */
	function filterPosts() {

		$filterBar.click( function () {
			$( ".panel" ).show().css( "display", "inline-block" );
			$( "#filterbar a" ).parent().removeClass( "active" );
			$( this ).find( 'li:first' ).addClass( "active" );
			return false;
		} );

		$( ".filter" ).click( function () {
			var thisFilter = $( this ).attr( "id" );
			$( ".panel" ).hide();
			$( "." + thisFilter ).fadeIn().css( "display", "inline-block" );
			$filterBar.find( 'a' ).parent().removeClass( "active" );
			$( this ).parent().addClass( "active" );
			return false;
		} );
	}

	/**
	 * Toggle view to switch between tile and list view
	 *
	 * @param e
	 */

	function toggleView() {
		$viewNavItem.on( 'click', function (e) {
			e.preventDefault();
			var thisView = $( this ).attr( "id" );
			$viewNavItem.removeClass( "active" );
			$( this ).addClass( "active" );
			$( '#ss-all-posts' ).removeClass( 'view-list view-tile' ).addClass( thisView );
		} );

	}

	/**
	 * Modal windows
	 *
	 * @param e
	 */
	//
	// I know it's not pretty, need to refactor these. There's a better way.
	var myContent1 = document.getElementById( 'meg-photo' ),
		myContent2 = document.getElementById( 'jenny-photo' ),
		myContent3 = document.getElementById( 'buzz-photo' ),
		myContent4 = document.getElementById( 'samihah-photo' ),
		myContent5 = document.getElementById( 'jac-video' ),
		myContent6 = document.getElementById( 'vitor-video' ),
		myContent7 = document.getElementById( 'michael-video' ),
		myContent8 = document.getElementById( 'compose-message-modal' );

	var myModal1 = new Modal( {
			content: myContent1
		} ),
		myModal2 = new Modal( {
			content: myContent2
		} ),
		myModal3 = new Modal( {
			content: myContent3
		} ),
		myModal4 = new Modal( {
			content: myContent4
		} ),
		myModal5 = new Modal( {
			content: myContent5
		} ),
		myModal6 = new Modal( {
			content: myContent6
		} ),
		myModal7 = new Modal( {
			content: myContent7
		} ),
		myModal8 = new Modal( {
			content : myContent8,
			maxWidth: 575
		} );


	$mainContent.on( 'click', "#modal-trigger-meg", function (e) {
		e.preventDefault();
		myModal1.open();
	} );
	$mainContent.on( 'click', "#modal-trigger-jenny", function (e) {
		e.preventDefault();
		myModal2.open();
	} );
	$mainContent.on( 'click', "#modal-trigger-buzz", function (e) {
		e.preventDefault();
		myModal3.open();
	} );
	$mainContent.on( 'click', "#modal-trigger-samihah", function (e) {
		e.preventDefault();
		myModal4.open();
	} );
	$mainContent.on( 'click', "#modal-trigger-jac", function (e) {
		e.preventDefault();
		myModal5.open();
	} );
	$mainContent.on( 'click', "#modal-trigger-vitor", function (e) {
		e.preventDefault();
		myModal6.open();
	} );
	$mainContent.on( 'click', "#modal-trigger-michael", function (e) {
		e.preventDefault();
		myModal7.open();
	} );
	$( '#js-compose-message, #js-compose-message-mobile' ).on( 'click', function (e) {
		e.preventDefault();
		myModal8.open();
	} );

	/**
	 * Mobile Menu
	 *
	 * @param e
	 */
	function toggleCanvasMenu() {
		if (isOpen) {
			classie.remove( bodyElement, 'ss-mobile-menu-active' );
		}
		else {
			classie.add( bodyElement, 'ss-mobile-menu-active' );
		}
		isOpen = !isOpen;
	}

	function initCanvasMenu() {
		toggleMobileMenu.addEventListener( 'click', toggleCanvasMenu );
		contentWrap.addEventListener( 'click', function (e) {
			var target = e.target;
			if (isOpen && target !== toggleMobileMenu) {
				toggleCanvasMenu();
			}
		} );
	}

	/**
	 * IE detection
	 *
	 * @param e
	 */
	function detectIe() {
		"use strict";

		// Detecting IE
		var oldIE;
		if ($html.is( '.ie6, .ie7, .ie8, .ie9' )) {
			oldIE = true;
		}
		if (oldIE) {
			$mobileMenuWrapper.hide();
			$mobileMenuToggle.on( 'click', function (e) {
				$mobileMenuWrapper.toggle();
			} );
		}
	}

	function init() {
		loadPartials();
		initCanvasMenu();
		filterPosts();
		toggleView();
		showReplies();
		detectIe();
	}

	init();
})( window, jQuery, undefined );