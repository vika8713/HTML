$(document).ready(
	function() {
		$("#pull").click(
			function (){
				var menu = $("nav ul");
					if (menu.is(":visible")) {
						menu.slideUp();
					} else {
						$("nav ul:visible").hide();
						menu.slideDown();
					}
					return false;
				}
		)

	}
);