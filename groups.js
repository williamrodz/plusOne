
var activeButtonID = sessionStorage.getItem("active_chat_uid");

if (activeButtonID == "null") {
	activeButtonID = null;
};

document.addEventListener("DOMContentLoaded", function (event) {
	loadGroupButtons();

	console.log("active button")
	console.log(typeof(activeButtonID))

	if (activeButtonID != null) {
		document.getElementById("placeHolderMessageBoard").classList.add("hidden")
		document.getElementById("messageBoardAndSendBar").classList.remove("hidden");

		loadMessageBoardOf(activeButtonID);
	}

	document.getElementById("inputField").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // Do custom functionality
        submitNewMessage();

    }
    });	

	/*
	document.getElementById("sendButton").addEventListener("mouseover", function (event){
		document.getElementById("sendButton").setAttribute("src","send-button-hover.png");
	});

	document.getElementById("sendButton").addEventListener("mouseleave", function (event){
		document.getElementById("sendButton").setAttribute("src","send-button.png");
	});	
	*/

    });




function createGroupHTML(group){
	var groupDiv = document.createElement("div");
	groupDiv.setAttribute("class","group-button");
	groupDiv.setAttribute("id",group.uid);
	groupDiv.setAttribute("onclick","loadMessageBoardOf('"+group.uid+"')");
	groupDiv.innerHTML = group.name;
	console.log("Group HTML is",groupDiv);
	return groupDiv;
}


function loadGroupButtons(){
	console.log("Calling loadGroupButtons")
	var groupRow = document.getElementById("groupButtonsField")
	var myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
	for (var i=0; i < myGroups.length; i++){
		var group = myGroups[i];
		console.log("Calling on "+group);
		groupRow.appendChild(createGroupHTML(group));
	}
}

function loadMessageBoardOf(groupUID){
	if (activeButtonID){
		document.getElementById(activeButtonID).classList.remove("activeGroupButton");
	} else{
		document.getElementById("placeHolderMessageBoard").classList.add("hidden")
		document.getElementById("messageBoardAndSendBar").classList.remove("hidden");

	}
	document.getElementById("messageBoard").innerHTML = "";

	var group = getGroupWithUID(groupUID);

	sessionStorage.setItem("active_chat_uid", null);

	activeButtonID = group.uid;
	document.getElementById(activeButtonID).classList.add("activeGroupButton");

	addedMessages = 0
	group.messages.forEach(function(message) {
		console.log(message)
		addedMessages +=1
		if (message.from != 0) {
			addMessageToBoard(message, "left");
		} else {
			addMessageToBoard(message, "right");
		};
		
	});
	if (addedMessages == 0){
		addEmptyMessageBoardDefaultText();
	}
}

function addEmptyMessageBoardDefaultText(){
	var div = document.createElement("div");
	div.setAttribute("id","noMessagesDefaultText");
	div.innerHTML = "Write a message below to begin the conversation for this group!"
"Write a message below to begin the conversation for this group!";

	document.getElementById("messageBoard").appendChild(div);
}

function removeEmptyMessageBoardDefaultText(){
	var defaultText = document.getElementById("noMessagesDefaultText");
	if (defaultText != null){
		document.getElementById("noMessagesDefaultText").remove();
	}
	
}

function submitNewMessage(){
	removeEmptyMessageBoardDefaultText();
	var messageText = document.getElementById("inputField").value;
	var message = {from: 0, content: messageText}
	if (messageText.length > 0){
		addMessageToBoard(message, "right");
		document.getElementById("inputField").value = "";
		addMessageToGroupWithUID(message, activeButtonID);
	}
}

function addMessageToBoard(message, location) {
	var div = document.createElement("div");
	div.setAttribute("class","container");
	var img = document.createElement("img");
	img.setAttribute("class",location);
	img.setAttribute("src",userImages[message.from]);
	img.setAttribute("alt","Avatar");
	var p = document.createElement("p");
	p.innerHTML = message.content;
	var span = document.createElement("span");
	if (location=="left"){
		span.setAttribute("class","time-right");
	} else{
		span.setAttribute("class","time-left");

	}
	span.innerHTML = getCurrentTime();

	div.appendChild(img);
	div.appendChild(p);
	div.appendChild(span);
	document.getElementById("messageBoard").appendChild(div);
	div.scrollIntoView();
}

function getGroupWithUID(groupUID) {
	var myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
	for (var index = 0; index < myGroups.length; index++) {
		var group = myGroups[index]
		if (group.uid == groupUID) {
			return group
		}
	}
}

function addMessageToGroupWithUID(message, groupUID) {
	var myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
	for (var index = 0; index < myGroups.length; index++) {
		var group = myGroups[index]
		if (group.uid == groupUID) {
			group.messages.push(message)
			break;
		}
	}
	var jsonMyGroups = JSON.stringify(myGroups);
    sessionStorage.setItem("my_groups", jsonMyGroups);
}

function getCurrentTime(){
	var d = new Date();
	var hours = d.getHours();
	var MM = d.getMinutes();

	var HH = "";
	var AMPM = "";
	if (hours > 12){
		HH = hours - 12;
		AMPM = "PM";
	} else{
		HH = hours;
		AMPM = "AM";
	}

	var timeString = HH+":"+MM+" "+AMPM;
	return timeString;
}
