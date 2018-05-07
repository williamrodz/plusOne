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
        description: "Enjoy exploring local museums and learning new languages",
        uid: "68C70338-C568-44F2-891D-A8BC9ECF77F8"
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
        description: "Entrepreneur in education technology",
        uid: "8A4309FC-97BE-4F28-96EE-6EA5EA05BA01"
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
        description: "Love visiting foreign countries and learning about other cultures",
        uid: "AFB95176-C0C5-4A9D-90ED-15B831EFB378"
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
        description: "Love reading latin american writers like Alberto Fuguet and Gabriel Garcia Marquez",
        uid: "B058573F-F202-48CF-A90E-9B60E1C42941"
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
        description: "Love author food and I enjoy trying new restaurants during the weekends",
        uid: "98D4E404-4F0D-4CEE-89FF-69DFBA8A52B4"
    };
allConnections.push(aliciaSmithConnection);
allConnections.push(benChenConnection);
allConnections.push(carlaGomezConnection);
allConnections.push(jorgeRamirezConnection);
allConnections.push(eunjinKooConnection);

myConnections.push(aliciaSmithConnection);
myConnections.push(benChenConnection);
myConnections.push(carlaGomezConnection);
var jsonMyConnections = JSON.stringify(myConnections);
sessionStorage.setItem("my_connections", jsonMyConnections);
if (sessionStorage.getItem("my_connections") == null) {
    var jsonMyConnections = JSON.stringify(myConnections);
    sessionStorage.setItem("my_connections", jsonMyConnections);
}

message1 = {from: "Alicia Smith", 
            content: "Hi how's it going? Just wanted to meet up for coffee before class",
            uid: "B7285C31-59F8-4D7E-AD0B-36EE0C7A6438"
          };
message2 = {from: "Ben Chen", 
            content: "Great class last week!",
            uid: "3B524B16-66A5-4457-BCC3-73C86658D5BC"
          };
message3 = {from: "Carla Gomez", 
            content: "Looking forward to the interview! Really interested in the project and can't wait to meet!",
            uid: "D66A65C9-74D2-4E05-A93F-D9260D517A8F"
          };
message4 = {from: "Jorge Ramirez", 
            content: "Plans for the weekend?",
            uid: "5F7EDCCF-F70D-40F8-B60E-CD537354E19B"
          };
message5 = {from: "Eunjin Koo", 
            content: "Great meeting you this week!",
            uid: "8EE99589-CC4B-4974-9AE1-3ED36AF7BACC"
          };
message6 = {from: "John Doe", 
            content: "Let's grab coffee sometime this week",
            uid: "3FCD857C-5E02-4F35-852A-76E88406BBCB"
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


var event1 = {day: 1,
              month: 4,
              title: "English classes",
              description: "Come learn english!",
              location: "32-G601",
              type: "filler",
              start_time: "8:00AM",
              end_time: "9:00AM",
              uid: "C3B4D86F-F7ED-40DB-96D6-D7C3B71B65F9"};
var event2 = {day: 8,
              month: 4,
              title: "English classes",
              description: "Come learn english!",
              location: "32-G602",
              type: "filler",
              start_time: "8:00AM",
              end_time: "9:00AM",
              uid: "93D6D68B-B471-47E9-B50A-60B1C59DB5DC"};
var event3 = {day: 15,
              month: 4,
              title: "English classes",
              description: "Come learn english!",
              location: "32-G603",
              type: "filler",
              start_time: "8:00AM",
              end_time: "9:00AM",
              uid: "118D9A96-F94C-49FC-965E-9CA379BCBF9A"};
var event4 = {day: 22,
              month: 4,
              title: "English classes",
              description: "Come learn english!",
              location: "32-G604",
              type: "filler",
              start_time: "8:00AM",
              end_time: "9:00AM",
              uid: "F627481C-286E-43C7-BDED-5F6CBA55AEC2"};

myEvents.push(event1);
myEvents.push(event2);
myEvents.push(event3);
myEvents.push(event4);
var jsonMyEvents = JSON.stringify(myEvents);
sessionStorage.setItem("my_events", jsonMyEvents);
if (sessionStorage.getItem("my_events") == null) {
    var jsonMyEvents = JSON.stringify(myEvents);
    sessionStorage.setItem("my_events", jsonMyEvents);
}


