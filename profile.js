Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {

		window.addEventListener("click", function(e){
			if (e.target == Util.one("#modal")) {
				e.preventDefault()
				e.stopPropagation()
				Util.one("#modal").style.display = "none";
			}
		})

		Util.all(".my-message").forEach(function(message) {
			message.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayMessage(message)
			})
		})

		Util.all(".my-event").forEach(function(event) {
			event.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayEvent(event)
			})
		})

		Util.all(".my-connection").forEach(function(connection) {
			connection.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayConnection(connection)
			})
		})
	}
})


function displayMessage(message) {
	Util.one("#modal").style.display = "block";
	console.log("displaying message")
}

function displayConnection(connection) {
	Util.one("#modal").style.display = "block";
	console.log("displaying connection")
}

function displayEvent(event) {
	Util.one("#modal").style.display = "block";
	console.log("displaying event")
}

