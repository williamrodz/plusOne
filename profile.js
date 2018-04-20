var eventBeingDisplayed = null;
var connectionBeingDisplayed = null;

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {

		window.addEventListener("click", function(e){
			if (e.target == Util.one("#modal")) {
				e.preventDefault()
				e.stopPropagation()
				Util.one("#modal").style.display = "none";
				eventBeingDisplayed = null;
				connectionBeingDisplayed = null;
			}
		})

		Util.all(".my-message").forEach(function(message) {
			message.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayMessage(message, document)
			})
		})

		Util.all(".my-event").forEach(function(event) {
			event.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				eventBeingDisplayed = event;
				displayEvent(event, document)
			})
		})

		Util.all(".my-connection").forEach(function(connection) {
			connection.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayConnection(connection, document)
			})
		})
	}
})

// TODO: clear modal
function displayMessage(message, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-message")

	modal_display.innerHTML = '<div class="modal-title">Alicia Smith</div><div class="modal-message">Message from Alicia Smith!!!!!!!!</div>'

	modal.appendChild(modal_display)
	console.log("displaying message")
}

function displayConnection(connection, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-connection")

	modal_display.innerHTML = '<div class="modal-title">Alicia Smith</div><img class="modal-left-side" src="placeholder_connection.png"/><div class="modal-right-side">Right side</div>'

	modal.appendChild(modal_display)
	console.log("displaying connection")
}

function displayEvent(event, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-event")

	modal_display.innerHTML = '<div class="modal-title">English Class</div><img class="modal-left-side" src="event.png"/><div class="modal-right-side">Right side</div><div class="modal-event-remove">Remove</div>'

	modal.appendChild(modal_display)

	Util.one(".modal-event-remove").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		console.log("here")
		removeEvent(event)
		Util.one("#modal").style.display = "none";
		eventBeingDisplayed = null;
		connectionBeingDisplayed = null;
	})
	console.log("displaying event")
}

function removeEvent(event) {
	var events = Util.one("#my-events");
	events.children[1].removeChild(event)
	//events.removeChild(eventBeingDisplayed)
}

