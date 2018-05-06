var readingGroup = {groupName: "Reading",m1:"Any book recommendations?",
	m2:"I'm reading 'Guantanamo Diary'. I really recommend!",m3:"That one is great! I also read 'All the light that you cannot see'. Loved it.",m4:"Wow, love the book worm activity ;)"};

var cookingGroup = {groupName: "Cooking",m1:"I am craving COOKIES!! Anyone know a good chocolate chip recipe?",
	m2:"I know one! Want to learn at Westgate?",m3:"Yum! Can I tag along?",m4:"Yes, open to all that message here :)"};

var danceGroup = {groupName: "Dance", m1:"Hey all! Anyone down to learn Salsa with Casino Rueda on Friday?",
	m2:"Hmm. I think I want to learn! What is Casino Rueda",m3:"They're a Cuban dance group, but they know many Latin dances.",m4:"Totally recommend! Vamos!"};

var tennisGroup = {groupName: "Tennis",m1:"Who wants to play a tennis tournament?",
	m2:"Me! I'm so ready since it's finally warm!",m3:"Same! 3PM at the bubble?",m4:"See you there!"};

var groups = [readingGroup,cookingGroup,danceGroup,tennisGroup];

var activeButtonID = null;


document.addEventListener("DOMContentLoaded", function (event) {
	loadGroupButtons();

    });

function createGroupHTML(groupObject){
	var groupDiv = document.createElement("div");
	groupDiv.setAttribute("class","group-button");
	groupDiv.setAttribute("id",groupObject.groupName+"Div");
	groupDiv.setAttribute("onclick","loadMessageBoardOf('"+groupObject.groupName+"')");
	groupDiv.innerHTML = groupObject.groupName;
	console.log("Group HTML is",groupDiv);
	return groupDiv;
}


function loadGroupButtons(){
	console.log("Calling loadGroupButtons")
	var groupRow = document.getElementById("groupButtonsField")
	console.log(groupRow);
	for (var i=0; i < groups.length; i++){
		var groupObjectToAdd = groups[i];
		console.log("Calling on "+groupObjectToAdd);
		groupRow.appendChild(createGroupHTML(groupObjectToAdd));
	}
}

function loadMessageBoardOf(groupTitle){
	if (activeButtonID){
		document.getElementById(activeButtonID).classList.remove("activeGroupButton");
	} else{
		document.getElementById("placeHolderMessageBoard").classList.add("hidden")
		document.getElementById("messageBoard").classList.remove("hidden");

	}
	activeButtonID = groupTitle+"Div";
	document.getElementById(activeButtonID).classList.add("activeGroupButton");

	if (groupTitle == "Tennis"){
		for (var i=1; i < 5; i++){
			document.getElementById("message"+i).innerHTML= tennisGroup["m"+i];
		}
	}

	else if (groupTitle == "Dance"){
		for (var i=1; i < 5; i++){
			document.getElementById("message"+i).innerHTML= danceGroup["m"+i];
		}
	}
	else if (groupTitle == "Reading"){
		for (var i=1; i < 5; i++){
			document.getElementById("message"+i).innerHTML= readingGroup["m"+i];
		}
	}
	else if (groupTitle == "Cooking"){
		for (var i=1; i < 5; i++){
			document.getElementById("message"+i).innerHTML= cookingGroup["m"+i];
		}
	}	
}


