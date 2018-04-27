var allConnections = []
var allEvents = []

var myConnections = []
var myEvents = []
var myMessages = []

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
allConnections.push(aliciaSmithConnection)
allConnections.push(benChenConnection)
allConnections.push(carlaGomezConnection)
allConnections.push(jorgeRamirezConnection)
allConnections.push(eunjinKooConnection)

myConnections.push(aliciaSmithConnection)
myConnections.push(benChenConnection)
myConnections.push(carlaGomezConnection)
//sessionStorage.setItem("my_connections", JSON.stringify(myConnections));
console.log(myConnections.length)
if (!sessionStorage.getItem("my_connections")) {
	sessionStorage.setItem("my_connections", myConnections);
}

message1 = new Message("Alicia Smith", "Hi how's it going? Just wanted to meet up for coffee before class")
message2 = new Message("Ben Chen", "Great class last week!")
message3 = new Message("Carla Gomez", "Looking forward to the interview! Really interested in the project and can't wait to meet!")
message4 = new Message("Jorge Ramirez", "Plans for the weekend?")
message5 = new Message("Eunjin Koo", "Great meeting you this week!")
message6 = new Message("John Doe", "Let's grab coffee sometime this week")

myMessages.push(message1)
myMessages.push(message2)
myMessages.push(message3)
myMessages.push(message4)
myMessages.push(message5)
myMessages.push(message6)


