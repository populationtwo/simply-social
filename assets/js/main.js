//(function() {

//var bodyEl = document.body,
//	//content = document.querySelector( '.content-wrap' ),
//	openbtn = document.getElementById( 'main-nav' ),
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
		//initEvents();
		filterPosts();
		toggleView();

	}


	$( '#partials-content' ).load( "partials/all.html" );

	$( '#nav-videos' ).on( 'click', function (e) {
		//e.preventDefault();
		//$( '#partials-content' ).load(  "partials/video.html");
		document.getElementById( "#partials-content" ).innerHTML = '<object type="type/html" data="partials/video.html"></object>'
	} );

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
			$('.view-nav__item').removeClass( "active" );
			$(this).addClass( "active" );
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

	var myContent = document.getElementById( 'content' );

	var myModal = new Modal( {
		content: myContent
	} );

	var triggerButton = document.getElementById( 'trigger' );

	triggerButton.addEventListener( 'click', function () {
		myModal.open();
	} );


	init();
} );

//function initEvents() {
//	openbtn.addEventListener( 'click', toggleMenu );
//	if( closebtn ) {
//		closebtn.addEventListener( 'click', toggleMenu );
//	}
//
//	// close the menu element if the target it´s not the menu element or one of its descendants..
//	content.addEventListener( 'click', function(ev) {
//		var target = ev.target;
//		if( isOpen && target !== openbtn ) {
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