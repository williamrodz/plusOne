Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
		
		Util.all(".menuItem").forEach(function(connection) {
			connection.addEventListener("mouseenter", function(e){
				if (connection.getAttribute("href") == "profile.html") {
					connection.firstChild.firstChild.setAttribute("src", "resources/logo_white.png");
				}
			})
			connection.addEventListener("mouseleave", function(e){
				if (connection.getAttribute("href") == "profile.html") {
					connection.firstChild.firstChild.setAttribute("src", "resources/logo.png");
				}
			})
		})
	}
});