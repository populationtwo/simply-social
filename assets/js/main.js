//(function() {

//var bodyEl = document.body,
//	//content = document.querySelector( '.content-wrap' ),
//	openbtn = document.getElementById( 'main-nav' ),
//	closebtn = document.getElementById( 'close-button' ),
//	isOpen = false;

function init() {
	//initEvents();
	toggleView();

}


function toggleView() {
	$( '#view-list-toggle' ).on( 'click', function (e) {
		e.preventDefault();
		$( '#ss-all-posts' ).removeClass( 'list, tile' ).addClass( 'list' );
		console.log( 'asdf' );
	} );
	$( '#view-tile-toggle' ).on( 'click', function (e) {
		e.preventDefault();

		$( '#ss-all-posts' ).removeClass( 'tile, list' ).addClass( 'tile' );
		console.log( 'dfdf' );

	} );
}
//
//

$( '.main-content' ).on( 'click', ".js-btn-expand", function (e) {

//$('.js-btn-expand' ).on('click',function(e){
	e.preventDefault();
	var thisComments = $( this ).parent().siblings( ".js-post-replies" );
	var thisComments2 = $( this ).parent().siblings( ".js-post-replies:visible" );
	if (thisComments2.length) {
		thisComments.slideUp( 200 );
		$(this).toggleClass('up');

	} else {
		thisComments.slideDown( 200 );
		$(this).toggleClass('up');

	}

} );


$( document ).ready( function () {

	$( '#partials-content' ).load( "partials/all.html" );

	$( '#nav-videos' ).on( 'click', function (e) {
		//e.preventDefault();
		//$( '#partials-content' ).load(  "partials/video.html");
		document.getElementById( "#partials-content" ).innerHTML = '<object type="type/html" data="partials/video.html"></object>'
	} );



	$("#allcat").click(function(){
		$(".panel").show();
		$("#catpicker a").removeClass("current");
		$(this).addClass("current");
		return false;
	});

	$(".filter").click(function(){
		var thisFilter = $(this).attr("id");
		$(".panel").hide();
		$("."+ thisFilter).fadeIn();
		$("#catpicker a").removeClass("current");
		$(this).addClass("current");
		return false;
	});



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
init();

//})();