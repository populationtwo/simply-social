//(function() {

//var bodyEl = document.body,
//	//content = document.querySelector( '.content-wrap' ),
//	toggleMobileMenu = document.getElementById( 'main-nav' ),
//	closebtn = document.getElementById( 'close-button' ),
//	isOpen = false;


//
//

$( '.main-content' ).on( 'click', ".js-btn-expand", function (e) {

//$('.js-btn-expand' ).on('click',function(e){
	e.preventDefault();
	var thisComments = $( this ).parent().siblings( ".js-post-replies" );
	var thisComments2 = $( this ).parent().siblings( ".js-post-replies:visible" );
	if (thisComments2.length) {
		thisComments.slideUp( 200 );
		$( this ).toggleClass( 'up' );

	} else {
		thisComments.slideDown( 200 );
		$( this ).toggleClass( 'up' );

	}

} );


$( document ).ready( function () {


	//var bodyEl = document.body,
	//content = document.querySelector( '.content-wrap' ),
	//var filterBar = document.getElementById( 'filterbar' )
//	closebtn = document.getElementById( 'close-button' ),
//	isOpen = false;

	function init() {
		initEvents();
		filterPosts();
		toggleView();

	}


	$( '#partials-content' ).load( "partials/all.html" );
	//$( '#partials-modal-content' ).load( "partials/modals.html" );


	//document.getElementById( "#partials-modal-content" ).innerHTML = '<object type="type/html" data="partials/modals.html"></object>'


	function filterPosts() {
		//Sub Nav filter bar

		$( "#filterbar" ).click( function () {
			$( ".panel" ).show();
			$( "#filterbar a" ).parent().removeClass( "active" );
			$( this ).parent().addClass( "active" );
			return false;
		} );

		$( ".filter" ).click( function () {
			var thisFilter = $( this ).attr( "id" );
			$( ".panel" ).hide();
			$( "." + thisFilter ).fadeIn();
			$( "#filterbar a" ).parent().removeClass( "active" );
			$( this ).parent().addClass( "active" );
			return false;
		} );
	}


	function toggleView() {

		$( '.view-nav__item' ).on( 'click', function (e) {
			var thisView = $( this ).attr( "id" );
			e.preventDefault();
			$( '.view-nav__item' ).removeClass( "active" );
			$( this ).addClass( "active" );
			$( '#ss-all-posts' ).removeClass( 'view-list' ).removeClass( 'view-tile' ).addClass( thisView );
		} );
		//$( '#view-tile-toggle' ).on( 'click', function (e) {
		//	e.preventDefault();
		//	$('.view-nav__item').removeClass( "active" );
		//	$(this).addClass( "active" );
		//	$( '#ss-all-posts' ).removeClass( 'tile, list' ).addClass( 'tile' );
		//
		//} );


		//$( '#view-list-toggle' ).on( 'click', function (e) {
		//	e.preventDefault();
		//	$('.view-nav__item').removeClass( "active" );
		//	$(this).addClass( "active" );
		//	$( '#ss-all-posts' ).removeClass( 'list, tile' ).addClass( 'list' );
		//} );
		//$( '#view-tile-toggle' ).on( 'click', function (e) {
		//	e.preventDefault();
		//	$('.view-nav__item').removeClass( "active" );
		//	$(this).addClass( "active" );
		//	$( '#ss-all-posts' ).removeClass( 'tile, list' ).addClass( 'tile' );
		//
		//} );
	}


	var myContent1 = document.getElementById( 'meg-photo' );
	var myContent2 = document.getElementById( 'jenny-photo' );
	var myContent3 = document.getElementById( 'buzz-photo' );
	var myContent4 = document.getElementById( 'samihah-photo' );
	var myContent5 = document.getElementById( 'jac-video' );
	var myContent6 = document.getElementById( 'vitor-video' );
	var myContent7 = document.getElementById( 'michael-video' );

	var myModal1 = new Modal( {
		content: myContent1
	} );
	var myModal2 = new Modal( {
		content: myContent2
	} );
	var myModal3 = new Modal( {
		content: myContent3
	} );
	var myModal4 = new Modal( {
		content: myContent4
	} );
	var myModal5 = new Modal( {
		content: myContent5
	} );
	var myModal6 = new Modal( {
		content: myContent6
	} );
	var myModal7 = new Modal( {
		content: myContent7
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










	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		toggleMobileMenu = document.getElementById( 'js-mobile-menu' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;


	function initEvents() {
		toggleMobileMenu.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== toggleMobileMenu ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}











	init();
} );

//function initEvents() {
//	toggleMobileMenu.addEventListener( 'click', toggleMenu );
//	if( closebtn ) {
//		closebtn.addEventListener( 'click', toggleMenu );
//	}
//
//	// close the menu element if the target it´s not the menu element or one of its descendants..
//	content.addEventListener( 'click', function(ev) {
//		var target = ev.target;
//		if( isOpen && target !== toggleMobileMenu ) {
//			toggleMenu();
//		}
//	} );
//}
//
//function toggleMenu() {
//	if( isOpen ) {
//		classie.remove( bodyEl, 'show-menu' );
//	}
//	else {
//		classie.add( bodyEl, 'show-menu' );
//	}
//	isOpen = !isOpen;
//}
//
//init();

//})();