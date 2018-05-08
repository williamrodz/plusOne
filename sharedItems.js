var allConnections = [];
var allEvents = [];
var allGroups = [];

var myConnections = [];
var myEvents = [];
var myMessages = [];
var myGroups = [];

var userImages = ["resources/funnyGuyAvatar.png", "resources/doraAvatar.png", "resources/avatar.png", "resources/catAvatar.png", "resources/penguinAvatar.png", "resources/nerd.png"];

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
    group: false,
    avatar_index: 1,
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
    avatar_index: 2,
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
    group: false,
    avatar_index: 3,
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
    group: false,
    avatar_index: 4,
    uid: "B058573F-F202-48CF-A90E-9B60E1C42941"
};
var eunjinKooConnection = {
    name: "Eunjin Koo",
    age: 30,
    origin: {
        nationality: ["Korean"],
        country: "Korea",
        city: "Seoul",
        stateOrRegion: "SL"
    },
    hobbies: ["Reading", "Swimming"],
    professionalInterests: ["Computer science"],
    languages: ["Korean", "English"],
    description: "Love author food and I enjoy trying new restaurants during the weekends",
    group: false,
    avatar_index: 5,
    uid: "98D4E404-4F0D-4CEE-89FF-69DFBA8A52B4"
};
var carlesMentuyConnection = {
    name: "Carles Mentuy",
    age: 30,
    origin: {
        nationality: ["Spanish"],
        country: "Spain",
        city: "Barcelona",
        stateOrRegion: "Catalonia"
    },
    hobbies: ["Swimming"],
    professionalInterests: ["Reading"],
    languages: ["Spanish", "Catalan"],
    description: "Love reading Arturo Perez Reverte",
    group: false,
    avatar_index: 1,
    uid: "E3F6B164-F4B9-4E35-B6C7-FFB55F761A08"
}

var johnSmithConnection = {
    name: "John Smith",
    age: 39,
    origin: {
        nationality: ["American"],
        country: "US",
        city: "Boston",
        stateOrRegion: "MA"
    },
    hobbies: ["Reading", "Swimming", "Entrepreneur", "Listening to music"],
    professionalInterests: ["Computer science", "Playing musical instruments"],
    languages: ["English"],
    description: "Love playing piano",
    group: false,
    avatar_index: 2,
    uid: "5F78EB84-18AA-40F4-AB14-5A68D05BA9F1"
}

var ayaAkanoConnection = {
    name: "Aya Akano",
    age: 32,
    origin: {
        nationality: ["Japanese"],
        country: "Japan",
        city: "Tokyo",
        stateOrRegion: "TK"
    },
    hobbies: ["Reading", "Swimming", "Cooking"],
    professionalInterests: ["Molecular Biology"],
    languages: ["Japanese", "Korean"],
    description: "Love doing research about molecular biology",
    group: false,
    avatar_index: 3,
    uid: "39B2AC22-DA2F-4B52-891E-9132DA1A6EE4"
}
var xuaHuConnection = {
    name: "Xua Hu",
    age: 40,
    origin: {
        nationality: ["Chinese"],
        country: "China",
        city: "Beijing",
        stateOrRegion: "BJ"
    },
    hobbies: ["Reading", "Cooking"],
    professionalInterests: ["Computer science"],
    languages: ["Chinese", "English"],
    description: "Love doing research about Systems Thinking",
    group: false,
    avatar_index: 4,
    uid: "DD2B5A24-9C3B-4092-A35B-AC641E2AF3E4"
}

allConnections.push(aliciaSmithConnection);
allConnections.push(benChenConnection);
allConnections.push(carlaGomezConnection);
allConnections.push(jorgeRamirezConnection);
allConnections.push(eunjinKooConnection);
allConnections.push(carlesMentuyConnection);
allConnections.push(johnSmithConnection);
allConnections.push(ayaAkanoConnection);
allConnections.push(xuaHuConnection);

myConnections.push(aliciaSmithConnection);
myConnections.push(benChenConnection);
myConnections.push(carlaGomezConnection);

var jsonMyConnections = JSON.stringify(myConnections);
sessionStorage.setItem("my_connections", jsonMyConnections);

if (sessionStorage.getItem("my_connections") == null) {
    var jsonMyConnections = JSON.stringify(myConnections);
    sessionStorage.setItem("my_connections", jsonMyConnections);
}

message1 = {
    from: "Alicia Smith",
    content: "Hi how's it going? Just wanted to meet up for coffee before class",
    uid: "B7285C31-59F8-4D7E-AD0B-36EE0C7A6438"
};
message2 = {
    from: "Ben Chen",
    content: "Great class last week!",
    uid: "3B524B16-66A5-4457-BCC3-73C86658D5BC"
};
message3 = {
    from: "Carla Gomez",
    content: "Looking forward to the interview! Really interested in the project and can't wait to meet!",
    uid: "D66A65C9-74D2-4E05-A93F-D9260D517A8F"
};
message4 = {
    from: "Jorge Ramirez",
    content: "Plans for the weekend?",
    uid: "5F7EDCCF-F70D-40F8-B60E-CD537354E19B"
};
message5 = {
    from: "Eunjin Koo",
    content: "Great meeting you this week!",
    uid: "8EE99589-CC4B-4974-9AE1-3ED36AF7BACC"
};
message6 = {
    from: "John Doe",
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


allEvents = [
    {
        name: "English Class",
        when: {
            month: "June",
            day: "56",
            dayNumber: "29",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "54",
            dayNumber: "27",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "46",
            dayNumber: "22",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "44",
            dayNumber: "20",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "36",
            dayNumber: "15",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "34",
            dayNumber: "13",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "26",
            dayNumber: "8",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "June",
            day: "24",
            dayNumber: "6",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "54",
            dayNumber: "30",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "46",
            dayNumber: "25",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "44",
            dayNumber: "23",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "36",
            dayNumber: "18",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "34",
            dayNumber: "16",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "26",
            dayNumber: "11",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "24",
            dayNumber: "9",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "16",
            dayNumber: "4",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "May",
            day: "14",
            dayNumber: "2",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "46",
            dayNumber: "27",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "44",
            dayNumber: "25",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "36",
            dayNumber: "20",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "34",
            dayNumber: "18",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "26",
            dayNumber: "13",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "24",
            dayNumber: "11",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "16",
            dayNumber: "6",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "English Class",
        when: {
            month: "April",
            day: "14",
            dayNumber: "4",
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social: ["Culture"],
        professional: [],
        academic: ["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills."
    },
    {
        name: "MFA Visit",
        when: {
            month: "June",
            day: "47",
            dayNumber: "23",
            start: "11:00",
            end: "13:00"
        },
        where: "Boston MFA",
        social: ["Family", "Culture"],
        professional: [],
        academic: [],
        communityService: [],
        description: "Join other MIT families at the MFA and enjoy exclusive guided tours and discussions with art experts."
    },
    {
        name: "MFA Visit",
        when: {
            month: "June",
            day: "27",
            dayNumber: "9",
            start: "11:00",
            end: "13:00"
        },
        where: "Boston MFA",
        social: ["Family", "Culture"],
        professional: [],
        academic: [],
        communityService: [],
        description: "Join other MIT families at the MFA and enjoy exclusive guided tours and discussions with art experts."
    },
    {
        name: "MFA Visit",
        when: {
            month: "May",
            day: "27",
            dayNumber: "12",
            start: "11:00",
            end: "13:00"
        },
        where: "Boston MFA",
        social: ["Family", "Culture"],
        professional: [],
        academic: [],
        communityService: [],
        description: "Join other MIT families at the MFA and enjoy exclusive guided tours and discussions with art experts."
    },
    {
        name: "MFA Visit",
        when: {
            month: "April",
            day: "27",
            dayNumber: "14",
            start: "11:00",
            end: "13:00"
        },
        where: "Boston MFA",
        social: ["Family", "Culture"],
        professional: [],
        academic: [],
        communityService: [],
        description: "Join other MIT families at the MFA and enjoy exclusive guided tours and discussions with art experts."
    },
    {
        name: "Career Fair",
        when: {
            month: "April",
            day: "22",
            dayNumber: "9",
            start: "09:00",
            end: "11:00"
        },
        where: "GECD",
        social: [],
        professional: ["Job Search"],
        academic: [],
        communityService: [],
        description: "GECD is hosting a career fair for MIT spouses and partners, come to meet employers and learn about available opportunities."
    },
    {
        name: "E-Crash Course",
        when: {
           month: "May",
           day: "34", 
           dayNumber: "16",
           start: "14:00",
           end: "16:00"
           },
        where: "MIT Martin Trust Center",
        social: [],
        professional: ["Career Development"],
        academic: [],
        communityService: [],
        description: "Learn about how to start a new venture from the experts at the Martin Trust Center."
    }, 
    {
        name: "Innovation Fair",
        when: {
           month: "May",
           day: "42", 
           dayNumber: "21",
           start: "16:00",
           end: "18:00"
           },
        where: "MIT Kresge Oval",
        social: [],
        professional: ["Career Development", "Job Search"],
        academic: [],
        communityService: [],
        description: "Come see what MIT Entrepreneurs have been up to this semester and look for potential employers."
    }, 
    {
        name: "Math Tutoring",
        when: {
           month: "May",
           day: "22", 
           dayNumber: "7",
           start: "10:00",
           end: "11:00"
           },
        where: "W20-211",
        social: [],
        professional: [],
        academic: [],
        communityService: ["Tutoring"],
        description: "Help middle school students with their math homework."
    }, 
    {
        name: "Math Tutoring",
        when: {
           month: "May",
           day: "32", 
           dayNumber: "14",
           start: "10:00",
           end: "11:00"
           },
        where: "W20-211",
        social: [],
        professional: [],
        academic: [],
        communityService: ["Tutoring"],
        description: "Help middle school students with their math homework."
    }, 
    {
        name: "Math Tutoring",
        when: {
           month: "April",
           day: "52",
           dayNumber: "30", 
           start: "10:00",
           end: "11:00"
           },
        where: "W20-211",
        social: [],
        professional: [],
        academic: [],
        communityService: ["Tutoring"],
        description: "Help middle school students with their math homework."
    }, 
    {
        name: "Math Tutoring",
        when: {
           month: "June",
           day: "22",
           dayNumber: "4", 
           start: "10:00",
           end: "11:00"
           },
        where: "W20-211",
        social: [],
        professional: [],
        academic: [],
        communityService: ["Tutoring"],
        description: "Help middle school students with their math homework."
    }, 
    {
        name: "Math Tutoring",
        when: {
           month: "June",
           day: "32", 
           dayNumber: "11",
           start: "10:00",
           end: "11:00"
           },
        where: "W20-211",
        social: [],
        professional: [],
        academic: [],
        communityService: ["Tutoring"],
        description: "Help middle school students with their math homework."
    }, 
]

myEvents.push(allEvents[0]);
myEvents.push(allEvents[3]);
myEvents.push(allEvents[5]);
myEvents.push(allEvents[7]);
var jsonMyEvents = JSON.stringify(myEvents);
sessionStorage.setItem("my_events", jsonMyEvents);
if (sessionStorage.getItem("my_events") == null) {
    var jsonMyEvents = JSON.stringify(myEvents);
    sessionStorage.setItem("my_events", jsonMyEvents);
}

var babysittingGroup = {
    name: "Babysitting",
    language: "English",
    nationalities: ["American", "Canadian", "Chinese", "Korean"],
    hobbies: ["Listening to music", "Reading", "Swimming"],
    professionalInterests: ["Playing musical instruments", "Psychology"],
    description: "Join this group if you're interested in doing babysitting or need a babysitter.",
    messages: [],
    group: true,
    uid: "869AC5FE-EA80-4C4C-A173-74F3E2A7DE40"
}

var koreanFriendsGroup = {
    name: "Korean friends",
    language: "Korean",
    nationalities: ["Korean", "Japanese"],
    hobbies: ["Reading", "Molecular Biology"],
    professionalInterests: ["Playing musical instruments", "Psychology", "Molecular Biology"],
    description: "Join this group if you want to have some Korean time and forget about English for a while.",
    messages: [],
    group: true,
    uid: "8DA8375C-65AC-4B69-8233-A716BEDA984D"
}

var aLaMexicanaGroup = {
    name: "A la mexicana",
    language: "Spanish",
    nationalities: ["Mexican"],
    hobbies: ["Reading", "Talk about politics"],
    professionalInterests: ["Playing musical instruments", "Politics"],
    description: "If you want to discuss about politics and current events happening in Mexico, you're welcome to this group.",
    messages: [{ from: 1, content: "Anyone planning on going to the Videgaray talk?" },
    { from: 2, content: "I think it got cancelled" },
    { from: 1, content: "Oh, bummer :(" }],
    group: true,
    uid: "139B35E9-2BBF-4B8F-A0EA-A13C3C4F205D"
}

var englishClubGroup = {
    name: "English club",
    language: "English",
    nationalities: ["American", "Japanese", "Korean", "Mexican"],
    hobbies: ["Reading"],
    professionalInterests: ["Computer science", "Finance"],
    description: "Improve your English by sharing your thoughts with other members of this group. Every week a different topic for discussion.",
    messages: [{ from: 1, content: "Hey guys, when is the next class?" },
    { from: 2, content: "I think we have one on Wednesday at 3" }],
    group: true,
    uid: "F231CA7E-531C-41AD-9054-5A4377202686"
}

var readingGroup = {
    name: "Reading",
    language: "English",
    nationalities: ["American", "Japanese", "Korean", "Mexican"],
    hobbies: ["Reading"],
    professionalInterests: ["Computer science", "Finance", "Psychology"],
    description: "Love reading books? Join our group!",
    messages: [{ from: 1, content: "Any book recommendations?" },
    { from: 2, content: "I'm reading 'Guantanamo Diary'. I really recommend it!" },
    { from: 4, content: "That one is great! I also read 'All the light that you cannot see'. Loved it." },
    { from: 3, content: "Wow, love the book worm activity ;)" }],
    group: true,
    uid: "7807265D-7430-440B-B6FC-BE759E832B9E"
}

allGroups.push(readingGroup)
allGroups.push(babysittingGroup)
allGroups.push(koreanFriendsGroup)
allGroups.push(aLaMexicanaGroup)
allGroups.push(englishClubGroup)

myGroups.push(englishClubGroup)
myGroups.push(readingGroup)

var jsonMyGroups = JSON.stringify(myGroups);
sessionStorage.setItem("my_groups", jsonMyGroups);
if (sessionStorage.getItem("my_groups") == null) {
    var jsonMyGroups = JSON.stringify(myGroups);
    sessionStorage.setItem("my_groups", jsonMyGroups);
}

