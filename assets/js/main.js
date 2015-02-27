$( document ).ready( function () {

	var bodyElement = document.body,
		contentWrap = document.querySelector( '.content-wrap' ),
		toggleMobileMenu = document.getElementById( 'js-mobile-menu' ),
		isOpen = false;

	function showReplies() { // Toggle to display post replies
		$( '.main-content' ).on( 'click', ".js-btn-expand", function (e) {
			e.preventDefault();
			var thisComments = $( this ).parent().siblings( ".js-post-replies" );
			var thisCommentsVisible = $( this ).parent().siblings( ".js-post-replies:visible" );
			if (thisCommentsVisible.length) {
				thisComments.slideUp( 200 );
				$( this ).toggleClass( 'up' );
			} else {
				thisComments.slideDown( 200 );
				$( this ).toggleClass( 'up' );
			}
		} );
	}


	$( '#partials-content' ).load( "partials/all.html" );


	function filterPosts() { //Sub Nav filter bar to display photos and videos.

		$( "#filterbar" ).click( function () {
			$( ".panel" ).show().css( "display", "inline-block" );
			$( "#filterbar a" ).parent().removeClass( "active" );
			$( this ).find('li:first' ).addClass( "active" );
			console.log($( this ));
			return false;
		} );

		$( ".filter" ).click( function () {
			var thisFilter = $( this ).attr( "id" );
			$( ".panel" ).hide();
			$( "." + thisFilter ).fadeIn().css( "display", "inline-block" );
			$( "#filterbar" ).find( 'a' ).parent().removeClass( "active" );
			$( this ).parent().addClass( "active" );
			return false;
		} );
	}


	function toggleView() { // Toggle view to switch between tile and list view

		$( '.view-nav__item' ).on( 'click', function (e) {
			var thisView = $( this ).attr( "id" );
			e.preventDefault();
			$( '.view-nav__item' ).removeClass( "active" );
			$( this ).addClass( "active" );
			$( '#ss-all-posts' ).removeClass( 'view-list' ).removeClass( 'view-tile' ).addClass( thisView );
		} );

	}


	// Modal windows
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


	$( '.main-content' ).on( 'click', "#modal-trigger-meg", function (e) {
		e.preventDefault();
		myModal1.open();
	} );
	$( '.main-content' ).on( 'click', "#modal-trigger-jenny", function (e) {
		e.preventDefault();
		myModal2.open();
	} );
	$( '.main-content' ).on( 'click', "#modal-trigger-buzz", function (e) {
		e.preventDefault();
		myModal3.open();
	} );
	$( '.main-content' ).on( 'click', "#modal-trigger-samihah", function (e) {
		e.preventDefault();
		myModal4.open();
	} );
	$( '.main-content' ).on( 'click', "#modal-trigger-jac", function (e) {
		e.preventDefault();
		myModal5.open();
	} );
	$( '.main-content' ).on( 'click', "#modal-trigger-vitor", function (e) {
		e.preventDefault();
		myModal6.open();
	} );
	$( '.main-content' ).on( 'click', "#modal-trigger-michael", function (e) {
		e.preventDefault();
		myModal7.open();
	} );
	$( '#js-compose-message, #js-compose-message-mobile' ).on( 'click', function (e) {
		e.preventDefault();
		myModal8.open();
	} );


	function initCanvasMenu() {
		toggleMobileMenu.addEventListener( 'click', toggleCanvasMenu );

		// close the menu
		contentWrap.addEventListener( 'click', function (ev) {
			var target = ev.target;
			if (isOpen && target !== toggleMobileMenu) {
				toggleCanvasMenu();
			}
		} );
	}

	function toggleCanvasMenu() {
		if (isOpen) {
			classie.remove( bodyElement, 'show-menu' );
		}
		else {
			classie.add( bodyElement, 'show-menu' );
		}
		isOpen = !isOpen;
	}


	function detectIe() {
		"use strict";

		// Detecting IE
		var oldIE;
		if ($( 'html' ).is( '.ie6, .ie7, .ie8, .ie9' )) {
			oldIE = true;
		}
		if (oldIE) {
			$( '.menu-wrap' ).hide();
			$( '#js-mobile-menu' ).on( 'click', function (e) {
				$( '.menu-wrap' ).toggle();
			} );
		}
	}

	function init() {
		initCanvasMenu();
		filterPosts();
		toggleView();
		showReplies();
		detectIe();
	}

	init();
} );