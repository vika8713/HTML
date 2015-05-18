$(document).ready(function () {
	/*Slide*/
	
	function slide() {
		var visibleImage = $("#main-photo img:visible");
		var nextImage = visibleImage.is(":last-child") 
							? 
							$("#main-photo img:first-child") 
							: 
							visibleImage.next();
		visibleImage.fadeOut();
		nextImage.fadeIn();
	}
	setInterval(slide, 3000);
	
	/*Gallery*/
	$("div.arrow.left").click(function(){
		
	});
	$("div.arrow.right").click();
});

