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

		var myMessages = JSON.parse(sessionStorage.getItem("my_messages"));
		for (var index=0; index < myMessages.length; index++){
			var message = myMessages[index];
			addMessageToDisplay(message);
		}

		Util.all(".my-message").forEach(function(message) {
			message.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayMessage(message, document)
			})
		})

		var myEvents = JSON.parse(sessionStorage.getItem("my_events"));
		for (var index=0; index < myEvents.length; index++){
			var event = myEvents[index];
			addEventToDisplay(event);
		}

		Util.all(".my-event").forEach(function(event) {
			event.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				eventBeingDisplayed = event;
				displayEvent(event, document)
			})
		})
		var myConnections = JSON.parse(sessionStorage.getItem("my_connections"));
		for (var index=0; index < myConnections.length; index++){
			var connection = myConnections[index];
			addConnectionToDisplay(connection);
		}

		Util.all(".my-connection").forEach(function(connection) {
			connection.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayConnection(connection, document)
			})
		})
	}
})


function displayMessage(message, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-message")

	modal_display.innerHTML = '<div class="modal-title">Alicia Smith<span class="modal-close">&times;</span></div><div class="modal-message">Hi how\'s it going? Just wanted to meet up for coffee before class</div>'

	modal.appendChild(modal_display)

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
		eventBeingDisplayed = null;
		connectionBeingDisplayed = null;
	})
}

function displayConnection(htmlConnection, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	var connection = getConnectionFromHTMLConnection(htmlConnection)

	var nationalities = ""

	connection.origin.nationality.forEach(function(nationality) {
		if (nationalities.length > 0) {
			nationalities += ", " + nationality
		} else {
			nationalities += nationality
		}
	})

	var hobbies = ""

	connection.hobbies.forEach(function(hobby) {
		if (hobbies.length > 0) {
			hobbies += ", " + hobby
		} else {
			hobbies += hobby
		}
	});

	modal.innerHTML = ""

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-connection")

	modal_display.innerHTML = '<div class="modal-title">' + connection.name + '<span class="modal-close">&times;</span></div><img class="modal-left-side" src="placeholder_connection.png"/><div class="modal-right-side">Nationality: ' + nationalities + '<br>Hobbies: ' + hobbies + '</div>'

	modal.appendChild(modal_display)

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
		eventBeingDisplayed = null;
		connectionBeingDisplayed = null;
	})
}

function displayEvent(htmlEvent, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var event = getEventFromHTMLEvent(htmlEvent)

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-event")

	modal_display.innerHTML = '<div class="modal-title">' + event.title + '<span class="modal-close">&times;</span></div><img class="modal-left-side" src="event.png"/><div class="modal-right-side">' + event.start_time + '-' + event.end_time + '<br>' + event.location + '</div><div class="modal-event-remove">Remove</div>'

	modal.appendChild(modal_display)

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
		eventBeingDisplayed = null;
		connectionBeingDisplayed = null;
	})

	Util.one(".modal-event-remove").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		removeEvent(htmlEvent)
		Util.one("#modal").style.display = "none";
		eventBeingDisplayed = null;
		connectionBeingDisplayed = null;
	})
}

function removeEvent(event) {
	var events = Util.one("#my-events");
	events.children[1].removeChild(event)
}

function addMessageToDisplay(message) {
	var messages = Util.one("#my-messages").children[1];
	var display_message = document.createElement("div")
	display_message.classList.add("my-item")
	display_message.classList.add("my-message")

	var messageTitle = document.createElement("div")
	messageTitle.classList.add("my-message-title")
	messageTitle.innerHTML = message.from
	display_message.appendChild(messageTitle)

	var messageContent = document.createElement("div")
	messageContent.classList.add("my-message-content")
	messageContent.innerHTML = message.content
	display_message.appendChild(messageContent)

	messages.appendChild(display_message)
}

function addConnectionToDisplay(connection) {
	var connections = Util.one("#my-connections").children[1];
	var display_connection = document.createElement("div")
	display_connection.classList.add("my-item")
	display_connection.classList.add("my-connection")
	
	var image = document.createElement("img")
	image.classList.add("my-connection-image")
	image.src = "placeholder_connection.png"
	display_connection.appendChild(image)

	var connectionInformation = document.createElement("div")
	connectionInformation.classList.add("my-connection-information")

	connectionInformation.innerHTML = connection.name

	display_connection.appendChild(connectionInformation)

	display_connection.id = connection.uid

	connections.appendChild(display_connection)
}

function addEventToDisplay(event) {
	var events = Util.one("#my-events").children[1];
	var display_event = document.createElement("div")
	display_event.classList.add("my-item")
	display_event.classList.add("my-event")
	
	var image = document.createElement("img")
	image.classList.add("my-event-image")
	image.src = "event.png"
	display_event.appendChild(image)

	var eventInformation = document.createElement("div")
	eventInformation.classList.add("my-event-information")

	eventInformation.innerHTML = event.title

	display_event.appendChild(eventInformation)

	display_event.id = event.uid

	events.appendChild(display_event)

}

function getConnectionFromHTMLConnection(htmlConnection) {
	var uid = htmlConnection.id;
	for (var index = 0; index < myConnections.length; index ++) {
		var connection = myConnections[index]
		if (connection.uid == uid) {
			console.log(connection)
			return connection
		}
	}
}

function getEventFromHTMLEvent(htmlEvent) {
	var uid = htmlEvent.id;
	for (var index = 0; index < myEvents.length; index ++) {
		var event = myEvents[index]
		if (event.uid == uid) {
			return event
		}
	}
}





