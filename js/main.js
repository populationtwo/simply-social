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
		$('#view-list-toggle' ).on('click', function(e){
			e.preventDefault();
			$('#ss-all-posts' ).removeClass('list, tile' ).addClass('list');
			console.log('asdf');
		});
		$('#view-tile-toggle' ).on('click', function(e){
			e.preventDefault();

			$('#ss-all-posts' ).removeClass('tile, list' ).addClass('tile');
			console.log('dfdf');

		});
	}

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