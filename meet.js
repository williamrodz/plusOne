
//Possible filters for finding people
var filters = [

    {
        title: "Nationality",
        values: ["American", "Canadian", "Chinese", "Korean", "Mexican", "Spanish"]
    },
    {
        title: "Language",
        values: ["Catalan", "Chinese", "English", "French", "Japanese", "Spanish"]
    },
    {
        title: "Hobby",
        values: ["Listening to music", "Reading", "Swimming", "Watching films"]
    },
    {
        title: "Professional interests",
        values: ["Computer science", "Finance", "Playing musical instruments", "Psychology"]
    }
];

var nationalityFilter = [];
var languageFilter = [];
var hobbyFilter = [];
var professionalIntsFilter = [];

var people = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
        description: "Love playing piano"
    },
    {
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
    },
    {
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
        description: "Love reading Arturo Perez Reverte"
    }

];


//When document has fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    //Add filters to filters bar
    createFilters();
    //Add initial list of people
    addListOfPeople();

    //Show how many people it is possible to connect with
    showInitialNumberOfPersonsToConnectWith();

    //Button Clear All filters
    let btnClearAllFilters = get(".clear-all-filters");
    btnClearAllFilters.addEventListener("click", (e) => {

        clearArrayFilters();

        let arrayCheckbox = document.querySelectorAll("input[type='checkbox']");

        arrayCheckbox.forEach((element) => {
            element.checked = false;
        });

        addListOfPeople(people);
        showInitialNumberOfPersonsToConnectWith();
    });

    window.addEventListener("click", (e) => {
        let modalMeet = get("#modal-meet");
        if (e.target === modalMeet) {
            e.preventDefault();
            e.stopPropagation();
            modalMeet.style.display = "none";
        }
    })

});



/**
 * Adds filters to filters bar
 */
function createFilters() {
    //let filtersBar = get(".filters-bar");
    let filtersList = get("#filters-list");

    //Create all filters
    for (let numFilter = 0; numFilter < filters.length; numFilter++) {
        let filter = filters[numFilter];
        //Filter div
        let filterDiv = document.createElement("div");
        filterDiv.classList.add("filter");
        //Filter title
        let titleSpan = document.createElement("span");
        titleSpan.classList.add("internal-header-filter");
        titleSpan.innerHTML = filter.title;
        //Filter options
        let filterOptionsDiv = document.createElement("div");
        filterOptionsDiv.classList.add("options");

        //Create and add options to filter
        for (let numOption = 0; numOption < filter.values.length; numOption++) {
            let optionLabel = document.createElement("label");
            optionLabel.innerHTML = filter.values[numOption];
            let optionInput = document.createElement("input");
            optionInput.setAttribute("type", "checkbox");
            optionInput.setAttribute("name", filter.title);
            optionInput.setAttribute("value", filter.values[numOption]);
            //Add listener to option input
            optionInput.addEventListener("change", (e) => {
                let isChecked = e.target.checked;
                let filterName = e.target.name;
                let optionValue = e.target.value;

                switch (filterName) {
                    case "Nationality":
                        updateArray(isChecked, optionValue, nationalityFilter);
                        break;
                    case "Language":
                        updateArray(isChecked, optionValue, languageFilter);
                        break;
                    case "Hobby":
                        updateArray(isChecked, optionValue, hobbyFilter);
                        break;
                    case "Professional interests":
                        updateArray(isChecked, optionValue, professionalIntsFilter);
                        break;
                    default:
                        console.error("Filter (" + filterName + ") doesn't exist!");
                        break;
                }

                let filteredPeople = people;

                if (!areFiltersEmpty()) {
                    //Filter people
                    filteredPeople = people.filter(isInFilters);
                }

                addListOfPeople(filteredPeople);

                if (areFiltersEmpty()) {
                    showInitialNumberOfPersonsToConnectWith();
                } else {
                    updateNumPeople(filteredPeople.length);
                }

            });
            //Add input to its corresponding label
            optionLabel.insertBefore(optionInput, optionLabel.firstChild);
            //Add label to filter options div
            filterOptionsDiv.appendChild(optionLabel);
        }

        //Add title and options to filter
        filterDiv.appendChild(titleSpan);
        filterDiv.appendChild(filterOptionsDiv);

        //Add filter to filters list        
        filtersList.appendChild(filterDiv);

        let horizontalBar = document.createElement("div");
        horizontalBar.classList.add("horizontal-bar");

        filtersList.appendChild(horizontalBar);
    }
}

function isInFilters(person) {
    let nationalityArray = person.origin.nationality;

    for (let i = 0; i < nationalityArray.length; i++) {
        let nationality = nationalityArray[i];
        if (nationalityFilter.indexOf(nationality) >= 0) {
            return true;
        }
    }

    let languageArray = person.languages;

    for (let i = 0; i < languageArray.length; i++) {
        let language = languageArray[i];
        if (languageFilter.indexOf(language) >= 0) {
            return true;
        }
    }

    let hobbiesArray = person.hobbies;

    for (let i = 0; i < hobbiesArray.length; i++) {
        let hobby = hobbiesArray[i];
        if (hobbyFilter.indexOf(hobby) >= 0) {
            return true;
        }
    }

    let profIntsArray = person.professionalInterests;

    for (let i = 0; i < profIntsArray.length; i++) {
        let profInt = profIntsArray[i];
        if (professionalIntsFilter.indexOf(profInt) >= 0) {
            return true;
        }
    }

    return false;

}

function areFiltersEmpty() {
    return nationalityFilter.length === 0 && languageFilter.length === 0 && hobbyFilter.length === 0 && professionalIntsFilter.length === 0;
}

/**
 * Add the list of people to the array
 */
function addListOfPeople(list) {
    let peopleList = get(".people-list");

    //Empty list
    peopleList.innerHTML = "";

    if (!list) {
        list = people;
    }

    for (let numPerson = 0; numPerson < list.length; numPerson++) {
        let person = list[numPerson];

        //Create person element
        let personDiv = document.createElement("div");
        personDiv.setAttribute("id", numPerson);
        personDiv.classList.add("person");

        let nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        nameSpan.innerHTML = person.name;

        personDiv.appendChild(nameSpan);

        let originSpan = document.createElement("span");
        originSpan.classList.add("origin");
        originSpan.innerHTML = person.origin.city + ", " + person.origin.stateOrRegion;

        personDiv.appendChild(originSpan);

        let ageSpan = document.createElement("span");
        ageSpan.classList.add("age");
        ageSpan.innerHTML = "&emsp;&emsp;&emsp;&emsp;" + person.age;

        personDiv.appendChild(ageSpan);

        let addButtonDiv = document.createElement("div");
        addButtonDiv.classList.add("add-friend-div");

        let addButton = document.createElement("button");
        addButton.classList.add("add-friend");
        addButton.innerHTML = "+";
        addButton.title = "Add this person to my connections";

        addButton.addEventListener("click", (e) => {
            displayMessage("Add person", "Would you like to connect with Alicia?", document);
        });

        addButtonDiv.appendChild(addButton);

        personDiv.appendChild(addButtonDiv);

        let personDescriptionDiv = document.createElement("div");
        personDescriptionDiv.classList.add("person-description");
        personDescriptionDiv.innerHTML = person.description;

        personDiv.appendChild(personDescriptionDiv);

        //Add person to list
        peopleList.appendChild(personDiv);
    }
}

function showInitialNumberOfPersonsToConnectWith() {
    let numPeopleSpan = get("#numPeople");
    numPeopleSpan.innerHTML = "";

    let peopleMatchSpan = get("#peopleMatch");
    let numPeople = people.length;

    if (numPeople === 1) {
        peopleMatchSpan.innerHTML = "You have 1 person to connect with";
    } else if (numPeople > 1) {
        peopleMatchSpan.innerHTML = "You have " + numPeople + " persons to connect with";
    } else {
        peopleMatchSpan.innerHTML = "You have 0 persons to connect with";
    }
}

function updateNumPeople(numPeople) {
    let numPeopleSpan = get("#numPeople");
    numPeopleSpan.innerHTML = numPeople

    let peopleMatchSpan = get("#peopleMatch");

    if (numPeople === 1) {
        peopleMatchSpan.innerHTML = "&emsp;person matches the criteria";
    } else {
        peopleMatchSpan.innerHTML = "&emsp;persons match the criteria";
    }
}

/**
 * Adds or remove selected value to specific array filter. 
 * It keeps UI filters synchronized with their model.
 * @param {*} isChecked {Boolean} true if element will be added, false if removed.
 * @param {*} element {String} to be added or removed.
 * @param {*} array {Array} where to add or remove.
 */
function updateArray(isChecked, element, array) {
    if (isChecked) {
        array.push(element);
    } else {
        let index = indexOfElementInArray(element, array);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }
}

function clearArrayFilters() {
    nationalityFilter = [];
    languageFilter = [];
    hobbyFilter = [];
    professionalIntsFilter = [];
}

/**
 * Returns the index of element inside array if it exists.
 * Otherwise, it returns -1.
 * @param {*} element {String}
 * @param {*} array []
 */
function indexOfElementInArray(element, array) {
    return array.indexOf(element);
}

/**
 * Returns the selected element
 * @param {*} selector {String}
 */
function get(selector) {
    return document.querySelector(selector);
}

/**
 * 
 * @param {*} message 
 * @param {*} current_document 
 */
function displayMessage(title, message, current_document) {
    var modal = get("#modal-meet");
    modal.style.display = "block";
    modal.innerHTML = "";

    var modalDisplay = current_document.createElement('div');
    modalDisplay.classList.add("modal-display-message-meet");

    modalDisplay.innerHTML = '<div class="modal-title-meet">' + title + '</div><div class="modal-message-meet">' + message + '</div>' +
        '<div class="message-optional"> <textarea class="textarea-message" rows="4" cols="50" maxlength="250" placeholder="Message (Optional)"></textarea> </div>' +
        '<div class="message-buttons-container">' +
        '<button id="btnSend" class="message-buttons-format">Send Request</button>' +
        '<button id="btnBack" class="message-buttons-format">Cancel</button>' +
        '</div>';

    modal.appendChild(modalDisplay);

    let textArea = get(".textarea-message");
    textArea.addEventListener("click", (e) => {
        e.target.select();
    });

    let btnSend = get("#btnSend");
    btnSend.addEventListener("click", (e) => {
        let modalMeet = get("#modal-meet");
        modalMeet.style.display = "none";
    });

    let btnBack = get("#btnBack");
    btnBack.addEventListener("click", (e) => {
        let modalMeet = get("#modal-meet");
        modalMeet.style.display = "none";
    });
}