// Enforce Min Font Sizes
$(".headline").each( function () {
    var $this = $(this);
    if (parseInt($this.css("fontSize")) < 40) {
        $this.css({ "font-size": "40px" });   
    }
});

// Animation + Anchors
$(document).ready( function() {

	// Reset viewport 
	$(this).scrollTop(0);


	// Intro animation 
	const hero = document.querySelector(".header-img");
	const headline = document.querySelector(".headline");
	const tagline = document.querySelector(".tagline");

	const tl = new TimelineMax(); 

	tl.fromTo(hero,1,{height: "0%"},{height: "70%"});
	tl.fromTo(headline,1.5,{opacity: 0, x: 30},{opacity: 1, x:0}, "-=0.75");
	tl.fromTo(tagline,.75,{opacity: 0, x: 30},{opacity: 1, x:0}, "-=0.75");

	// Smooth Scroll (Compatible jquery method)
	$("#anchor1").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 1000, function(){
		    window.location.hash = hash;
		  });
		}
	});
	$("#anchor2").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 1000, function(){
		    window.location.hash = hash;
		  });
		}
	});


  // Modal listeners
  var modal1 = document.getElementById("modal1");
  var modal2 = document.getElementById("modal2");

  var open1 = document.getElementById("open1");
  var open2 = document.getElementById("open2");

  $(".close").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();

    modal1.style.display = "none"; 
    modal2.style.display = "none"; 
  });

  open1.onclick = function() {
    modal1.style.display = "block";
  }

  open2.onclick = function() {
    modal2.style.display = "block";
  }


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal1 || event.target == modal2) {
      modal1.style.display = "none";
      modal2.style.display = "none"; 
    }
  }

});


// Card appear effect 
(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".card");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});