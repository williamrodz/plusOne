var allConnections = [];
var allEvents = [];

var myConnections = [];
var myConnectionsGroups = [];
var myEvents = [];
var myMessages = [];


var aliciaSmithConnection = {
    name: "Alicia Smith",
    age: 28,
    origin: {
        nationality: ["American"],
        country: "US",
        city: "Atlanta",
        stateOrRegion: "GA"
    },
    hobbies: ["Reading", "Swimming"],
    professionalInterests: ["Computer science"],
    languages: ["English"],
    description: "Enjoy exploring local museums and learning new languages"
};

var benChenConnection = {
    name: "Ben Chen",
    age: 30,
    origin: {
        nationality: ["American"],
        country: "US",
        city: "New York",
        stateOrRegion: "NY"
    },
    hobbies: ["Reading", "Swimming"],
    professionalInterests: ["Computer science"],
    languages: ["English", "Chinese"],
    description: "Entrepreneur in education technology"
};
var carlaGomezConnection = {
    name: "Carla Gomez",
    age: 29,
    origin: {
        nationality: ["Canadian", "Mexican"],
        country: "Canada",
        city: "Montreal",
        stateOrRegion: "QB"
    },
    hobbies: ["Reading", "Swimming"],
    professionalInterests: ["Psychology"],
    languages: ["Spanish", "English"],
    description: "Love visiting foreign countries and learning about other cultures"
};
var jorgeRamirezConnection = {
    name: "Jorge Ramirez",
    age: 29,
    origin: {
        nationality: ["Mexican", "American"],
        country: "Mexico",
        city: "Mexico City",
        stateOrRegion: "CDMX"
    },
    hobbies: ["Reading", "Swimming"],
    professionalInterests: ["Computer science"],
    languages: ["Spanish"],
    description: "Love reading latin american writers like Alberto Fuguet and Gabriel Garcia Marquez"
};
var eunjinKooConnection = {
    name: "Eunjin Koo",
    age: 30,
    origin: {
        nationality: ["Korean"],
        country: "Korea",
        city: "Seul",
        stateOrRegion: "SL"
    },
    hobbies: ["Reading", "Swimming"],
    professionalInterests: ["Computer science"],
    languages: ["Korean", "English"],
    description: "Love author food and I enjoy trying new restaurants during the weekends"
};
allConnections.push(aliciaSmithConnection);
allConnections.push(benChenConnection);
allConnections.push(carlaGomezConnection);
allConnections.push(jorgeRamirezConnection);
allConnections.push(eunjinKooConnection);

myConnections.push(aliciaSmithConnection);
myConnections.push(benChenConnection);
myConnections.push(carlaGomezConnection);

if (sessionStorage.getItem("my_connections") == null) {
    var jsonMyConnections = JSON.stringify(myConnections);
    sessionStorage.setItem("my_connections", jsonMyConnections);
}

message1 = {
    from: "Alicia Smith",
    content: "Hi how's it going? Just wanted to meet up for coffee before class"
};
message2 = {
    from: "Ben Chen",
    content: "Great class last week!"
};
message3 = {
    from: "Carla Gomez",
    content: "Looking forward to the interview! Really interested in the project and can't wait to meet!"
};
message4 = {
    from: "Jorge Ramirez",
    content: "Plans for the weekend?"
};
message5 = {
    from: "Eunjin Koo",
    content: "Great meeting you this week!"
};
message6 = {
    from: "John Doe",
    content: "Let's grab coffee sometime this week"
};

myMessages.push(message1);
myMessages.push(message2);
myMessages.push(message3);
myMessages.push(message4);
myMessages.push(message5);
myMessages.push(message6);

if (sessionStorage.getItem("my_messages") == null) {
    var jsonMyMessages = JSON.stringify(myMessages);
    sessionStorage.setItem("my_messages", jsonMyMessages);
}


var event1 = {
    day: 1,
    month: 4,
    title: "English classes",
    description: "Come learn english!",
    location: "32-G600",
    type: "filler",
    start_time: "8:00AM",
    end_time: "9:00AM"
};
var event2 = {
    day: 8,
    month: 4,
    title: "English classes",
    description: "Come learn english!",
    location: "32-G600",
    type: "filler",
    start_time: "8:00AM",
    end_time: "9:00AM"
};
var event3 = {
    day: 15,
    month: 4,
    title: "English classes",
    description: "Come learn english!",
    location: "32-G600",
    type: "filler",
    start_time: "8:00AM",
    end_time: "9:00AM"
};
var event4 = {
    day: 22,
    month: 4,
    title: "English classes",
    description: "Come learn english!",
    location: "32-G600",
    type: "filler",
    start_time: "8:00AM",
    end_time: "9:00AM"
};

myEvents.push(event1);
myEvents.push(event2);
myEvents.push(event3);
myEvents.push(event4);

if (sessionStorage.getItem("my_events") == null) {
    var jsonMyEvents = JSON.stringify(myEvents);
    sessionStorage.setItem("my_events", jsonMyEvents);
}


