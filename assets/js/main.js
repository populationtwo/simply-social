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

	// I know it's not pretty. The modal should be loaded dynamically.
	var myContent1 = document.getElementById( 'meg-photo' ),
		myContent2 = document.getElementById( 'jenny-photo' ),
		myContent3 = document.getElementById( 'buzz-photo' ),
		myContent4 = document.getElementById( 'samihah-photo' ),
		myContent5 = document.getElementById( 'jac-video' ),
		myContent6 = document.getElementById( 'vitor-video' ),
		myContent7 = document.getElementById( 'michael-video' ),
		myContent8 = document.getElementById( 'compose-message-modal' );

	var myModal = {};
	var myContent = [myContent1, myContent2, myContent3, myContent4, myContent5, myContent6, myContent7, myContent8];

	for (var i = 0; i < myContent.length; i++) {
		if (i == 7) {
			myModal[i] = new Modal( {
				content : myContent[i],
				maxWidth: 575
			} );
		} else {
			myModal[i] = new Modal( {
				content: myContent[i]
			} );
		}
	}

	$mainContent.on( 'click', "#modal-trigger-meg", function (e) {
		e.preventDefault();
		myModal[0].open();
	} );
	$mainContent.on( 'click', "#modal-trigger-jenny", function (e) {
		e.preventDefault();
		myModal[1].open();
	} );
	$mainContent.on( 'click', "#modal-trigger-buzz", function (e) {
		e.preventDefault();
		myModal[2].open();
	} );
	$mainContent.on( 'click', "#modal-trigger-samihah", function (e) {
		e.preventDefault();
		myModal[3].open();
	} );
	$mainContent.on( 'click', "#modal-trigger-jac", function (e) {
		e.preventDefault();
		myModal[4].open();
	} );
	$mainContent.on( 'click', "#modal-trigger-vitor", function (e) {
		e.preventDefault();
		myModal[5].open();
	} );
	$mainContent.on( 'click', "#modal-trigger-michael", function (e) {
		e.preventDefault();
		myModal[6].open();
	} );
	$( '#js-compose-message, #js-compose-message-mobile' ).on( 'click', function (e) {
		e.preventDefault();
		myModal[7].open();
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