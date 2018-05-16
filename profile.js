
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var activeGroupUID = null;
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

		var myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
		for (var index=0; index < myGroups.length; index++){
			var group = myGroups[index];
			addGroupToDisplay(group);
		}

		Util.all(".my-group").forEach(function(group) {
			group.addEventListener("click", function(e){
				e.preventDefault()
				e.stopPropagation()
				displayGroup(group, document)
			})
		})
	}
})


function displayMessage(htmlMessage, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	var message = getMessageFromHTMLMessage(htmlMessage)

	modal.innerHTML = ""

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-message")

	modal_display.innerHTML = '<div class="modal-title">' + message.from + '<span class="modal-close">&times;</span></div><div class="modal-message">' + message.content + '</div>'

	modal.appendChild(modal_display)

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
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

	modal_display.innerHTML = '<div class="modal-title">' + connection.name + '<span class="modal-close">&times;</span></div><img class="modal-left-side" src=' + userImages[connection.avatar_index] + ' /><div class="modal-right-side">Nationality: ' + nationalities + '<br>Hobbies: ' + hobbies + '</div>'

	modal.appendChild(modal_display)

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
	})
}

function displayEvent(htmlEvent, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var event = getEventFromHTMLEvent(htmlEvent)

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-event")

	var dateDisplay = document.createElement("div")
	dateDisplay.classList.add("modal-left-side-event")

	var dateDisplayMonthBar = document.createElement("div")
	dateDisplayMonthBar.classList.add("my-event-date-month-modal")
	dateDisplayMonthBar.innerHTML = event.when.month.slice(0,3)
	dateDisplay.appendChild(dateDisplayMonthBar)

	var dateDisplayDayBar = document.createElement("div")
	dateDisplayDayBar.classList.add("my-event-date-day-modal")
	dateDisplayDayBar.innerHTML = event.when.dayNumber
	dateDisplay.appendChild(dateDisplayDayBar)

	modal_display.innerHTML = '<div class="modal-title">' + event.name + '<span class="modal-close">&times;</span></div><div class="modal-right-side-event">' + event.when.start + '-' + event.when.end + '<br>' + event.where + '</div><div class="modal-event-remove">Remove</div>'
	modal_display.appendChild(dateDisplay)

	modal.appendChild(modal_display)

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
	})

	Util.one(".modal-event-remove").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		removeEvent(htmlEvent)
		Util.one("#modal").style.display = "none";
	})
}

function displayGroup(htmlGroup, current_document) {
	var modal = Util.one("#modal")
	modal.style.display = "block";

	modal.innerHTML = ""

	var group = getGroupFromHTMLGroup(htmlGroup)

	var modal_display = current_document.createElement('div')

	modal_display.classList.add("modal-display-group")

	modal_display.innerHTML = '<div class="modal-title">' + group.name + '<span class="modal-close">&times;</span></div><div class="modal-group-description">' + group.description + '</div><div class="modal-group-chat">Chat</div>'

	modal.appendChild(modal_display)

	activeGroupUID = group.uid

	Util.one(".modal-close").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
	})

	Util.one(".modal-group-chat").addEventListener("click", function(e){
		e.preventDefault()
		e.stopPropagation()
		Util.one("#modal").style.display = "none";
		sessionStorage.setItem("active_chat_uid", activeGroupUID);
		window.location.href = "./groups.html"
	})
}

function removeEvent(event) {
	var events = Util.one("#my-events");
	events.children[1].removeChild(event)
	var uid = event.id
	var myEvents = JSON.parse(sessionStorage.getItem("my_events"));
	var newEvents = []
	for (var index = 0; index < myEvents.length; index ++) {
		var event = myEvents[index]
		if (event.uid != uid) {
			newEvents.push(event)
		}
	}
	sessionStorage.setItem("my_events", JSON.stringify(newEvents))
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

	display_message.id = message.uid

	messages.appendChild(display_message)
}

function addConnectionToDisplay(connection) {
	var connections = Util.one("#my-connections").children[1];
	var display_connection = document.createElement("div")
	display_connection.classList.add("my-item")
	display_connection.classList.add("my-connection")
	
	var image = document.createElement("img")
	image.classList.add("my-connection-image")
	image.src = userImages[connection.avatar_index]
	display_connection.appendChild(image)

	var connectionInformation = document.createElement("div")
	connectionInformation.classList.add("my-connection-information")

	connectionInformation.innerHTML = connection.name

	display_connection.appendChild(connectionInformation)

	display_connection.id = connection.uid

	connections.appendChild(display_connection)
}

function addEventToDisplay(event) {
	//console.log(event)
	var events = Util.one("#my-events").children[1];
	var display_event = document.createElement("div")
	display_event.classList.add("my-item")
	display_event.classList.add("my-event")
	
	var dateDisplay = document.createElement("div")
	dateDisplay.classList.add("my-event-date")

	var dateDisplayMonthBar = document.createElement("div")
	dateDisplayMonthBar.classList.add("my-event-date-month")
	dateDisplayMonthBar.innerHTML = event.when.month.slice(0,3)
	dateDisplay.appendChild(dateDisplayMonthBar)

	var dateDisplayDayBar = document.createElement("div")
	dateDisplayDayBar.classList.add("my-event-date-day")
	dateDisplayDayBar.innerHTML = event.when.dayNumber
	dateDisplay.appendChild(dateDisplayDayBar)
	
	display_event.appendChild(dateDisplay)

	var eventInformation = document.createElement("div")
	eventInformation.classList.add("my-event-information")

	eventInformation.innerHTML = event.name

	display_event.appendChild(eventInformation)

	display_event.id = event.uid

	events.appendChild(display_event)

}

function addGroupToDisplay(group) {
	var groups = Util.one("#my-groups").children[1];
	var display_group = document.createElement("div")
	display_group.classList.add("my-item")
	display_group.classList.add("my-group")

	var groupTitle = document.createElement("div")
	groupTitle.classList.add("my-group-title")
	groupTitle.innerHTML = group.name
	
	display_group.appendChild(groupTitle)

	display_group.id = group.uid

	groups.appendChild(display_group)
}

function getMessageFromHTMLMessage(htmlMessage) {
	var uid = htmlMessage.id;
	var myMessages = JSON.parse(sessionStorage.getItem("my_messages"));
	for (var index = 0; index < myMessages.length; index ++) {
		var message = myMessages[index]
		if (message.uid == uid) {
			console.log(message)
			return message
		}
	}
}

function getConnectionFromHTMLConnection(htmlConnection) {
	var uid = htmlConnection.id;
	var myConnections = JSON.parse(sessionStorage.getItem("my_connections"));
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
	var myEvents = JSON.parse(sessionStorage.getItem("my_events"));
	for (var index = 0; index < myEvents.length; index ++) {
		var event = myEvents[index]
		if (event.uid == uid) {
			return event
		}
	}
}

function getGroupFromHTMLGroup(htmlGroup) {
	var uid = htmlGroup.id;
	var myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
	for (var index = 0; index < myGroups.length; index ++) {
		var group = myGroups[index]
		if (group.uid == uid) {
			return group
		}
	}
}




