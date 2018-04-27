var allConnections = []
var allEvents = []

var myConnections = []
var myEvents = []
var myMessages = []


var aliciaSmithConnection = new Connection("Alicia Smith", "Atlanta, GA", 28, ["American"], ["English"], ["Reading", "Swimming"], ["Computer Science"], "Enjoy exploring local museums and learning new languages")
var benChenConnection = new Connection("Ben Chen", "New York, NY", 30, ["American"], ["English", "Chinese"], ["Reading", "Swimming"], ["Computer Science"], "Entrepreneur in education technology")
var carlaGomezConnection = new Connection("Carla Gomez", "Montreal, QB", 29, ["Canadian", "Mexican"], ["English", "Spanish"], ["Reading", "Swimming"], ["Psychology"], "Love visiting foreign countries and learning about other cultures")
var jorgeRamirezConnection = new Connection("Jorge Ramirez", "Mexico City, CDMX", 29, ["American", "Mexican"], ["Spanish"], ["Reading", "Swimming"], ["Computer Science", "Playing musical instruments"], "Love reading latin american writers like Alberto Fuguet and Gabriel Garcia Marquez")
var eunjinKooConnection = new Connection("Eunjin Koo", "Seoul, SL", 30, ["Korean"], ["English"], ["Reading", "Swimming"], ["Computer Science"], "Love author food and I enjoy trying new restaurants during the weekends")

allConnections.push(aliciaSmithConnection)
allConnections.push(benChenConnection)
allConnections.push(carlaGomezConnection)
allConnections.push(jorgeRamirezConnection)
allConnections.push(eunjinKooConnection)


myConnections.push(aliciaSmithConnection)
myConnections.push(benChenConnection)
myConnections.push(carlaGomezConnection)

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


