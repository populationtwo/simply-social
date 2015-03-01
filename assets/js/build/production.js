/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

// Create an immediately invoked functional expression to wrap our code
(function() {

	// Define our constructor 
	this.Modal = function() {

		// Create global element references
		this.closeButton = null;
		this.modal = null;
		this.overlay = null;

		// Determine proper prefix
		this.transitionEnd = transitionSelect();

		// Define option defaults 
		var defaults = {
			autoOpen: false,
			className: "",
			closeButton: true,
			content: "",
			maxWidth: 980,
			minWidth: 300,
			overlay: true
		}

		// Create options by extending defaults with the passed in arugments
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}

		if(this.options.autoOpen === true) this.open();

	}

	// Public Methods

	Modal.prototype.close = function() {
		var _ = this;
		this.modal.className = this.modal.className.replace(" ss-open", "");
		this.overlay.className = this.overlay.className.replace(" ss-open",
			"");
		this.modal.addEventListener(this.transitionEnd, function() {
			_.modal.parentNode.removeChild(_.modal);
		});
		this.overlay.addEventListener(this.transitionEnd, function() {
			if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
		});
	}

	Modal.prototype.open = function() {
		buildOut.call(this);
		initializeEvents.call(this);
		window.getComputedStyle(this.modal).height;
		this.modal.className = this.modal.className +
		(this.modal.offsetHeight > window.innerHeight ?
			" ss-open ss-anchored" : " ss-open");
		this.overlay.className = this.overlay.className + " ss-open";
	}

	// Private Methods

	function buildOut() {

		var content, contentHolder, docFrag;

		/*
		 * If content is an HTML string, append the HTML string.
		 * If content is a domNode, append its content.
		 */

		if (typeof this.options.content === "string") {
			content = this.options.content;
		} else {
			content = this.options.content.innerHTML;
		}

		// Create a DocumentFragment to build with
		docFrag = document.createDocumentFragment();

		// Create modal element
		this.modal = document.createElement("div");
		this.modal.className = "ss-modal " + this.options.className;
		this.modal.style.minWidth = this.options.minWidth + "px";
		this.modal.style.maxWidth = this.options.maxWidth + "px";

		// If closeButton option is true, add a close button
		if (this.options.closeButton === true) {
			this.closeButton = document.createElement("button");
			this.closeButton.className = "ss-close close-button";
			this.closeButton.innerHTML = "&times;";
			this.modal.appendChild(this.closeButton);
		}

		// If overlay is true, add one
		if (this.options.overlay === true) {
			this.overlay = document.createElement("div");
			this.overlay.className = "ss-overlay " + this.options.className;
			docFrag.appendChild(this.overlay);
		}

		// Create content area and append to modal
		contentHolder = document.createElement("div");
		contentHolder.className = "ss-content";
		contentHolder.innerHTML = content;
		this.modal.appendChild(contentHolder);

		// Append modal to DocumentFragment
		docFrag.appendChild(this.modal);

		// Append DocumentFragment to body
		document.body.appendChild(docFrag);

	}

	function extendDefaults(source, properties) {
		var property;
		for (property in properties) {
			if (properties.hasOwnProperty(property)) {
				source[property] = properties[property];
			}
		}
		return source;
	}

	function initializeEvents() {

		if (this.closeButton) {
			this.closeButton.addEventListener('click', this.close.bind(this));
		}

		if (this.overlay) {
			this.overlay.addEventListener('click', this.close.bind(this));
		}

	}

	function transitionSelect() {
		var el = document.createElement("div");
		if (el.style.WebkitTransition) return "webkitTransitionEnd";
		if (el.style.OTransition) return "oTransitionEnd";
		return 'transitionend';
	}

}());

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