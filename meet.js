
//Possible filters for finding people


/*var filters = [
    {
        title: "Look for",
        values: ["Persons", "Groups"]
    },
    {
        title: "Nationality",
        values: ["American", "Canadian", "Chinese", "Korean", "Mexican", "Spanish", "Japanese"]
    },
    {
        title: "Language",
        values: ["Catalan", "Chinese", "English", "French", "Japanese", "Spanish"]
    },
    {
        title: "Hobby",
        values: ["Cooking", "Listening to music", "Reading", "Swimming", "Watching films", "Talk about politics"]
    },
    {
        title: "Professional interests",
        values: ["Computer science", "Finance", "Molecular biology", "Playing musical instruments", "Politics", "Psychology"]
    }
];*/

var filters = [
    //Default filter
    {
        title: "Look for",
        values: ["People", "Groups"]
    }

];

var lookForPersons = true;
var lookForGroups = true;

var nationalityFilter = [];
var languageFilter = [];
var hobbyFilter = [];
var professionalIntsFilter = [];

var currentPerson = null;
var currentGroup = null;
var currentAddButton = null;

/**
 * Groups can only have one language, people from multiple nationalities, 
 * multiple hobbies, and multiple professional interests
 */


//When document has fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
    //Add filters to filters bar
    createFilters();
    //By default users will be looking for either persons and groups
    selectPersonsAndGroupsByDefault();
    //Add initial list of people
    addListOfPeople();
    //Add initial list of groups
    addListOfGroups();
    //Show how many people it is possible to connect with
    showInitialNumberOfPersonsToConnectWith();

    showNumConnections();



    //Button Clear All filters
    let btnClearAllFilters = get(".clear-all-filters");
    btnClearAllFilters.addEventListener("click", (e) => {

        clearArrayFilters();

        let arrayCheckbox = document.querySelectorAll("input[type='checkbox']");

        arrayCheckbox.forEach((element) => {
            element.checked = false;
        });

        addListOfPeople(allConnections);
        addListOfGroups(allGroups);
        selectPersonsAndGroupsByDefault();
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

    //Add information to filters

    let nationalityArray = [];
    let hobbyArray = [];
    let professionalInterestsArray = [];
    let languageArray = [];

    //Extract filter values from people
    allConnections.forEach((person, numPerson) => {
        //Nationalities
        let nationalityArrayPerson = person.origin.nationality;

        nationalityArrayPerson.forEach((nationality, numNationality) => {
            if (!exists(nationality, nationalityArray)) {
                nationalityArray.push(nationality);
            }
        });

        //Hobbies
        let hobbyArrayPerson = person.hobbies;

        hobbyArrayPerson.forEach((hobby, numHobby) => {
            if (!exists(hobby, hobbyArray)) {
                hobbyArray.push(hobby);
            }
        });

        //Professional Interests
        let professionalIntsArrayPerson = person.professionalInterests;

        professionalIntsArrayPerson.forEach((profInt, numProfInt) => {
            if (!exists(profInt, professionalInterestsArray)) {
                professionalInterestsArray.push(profInt);
            }
        });

        //Languages
        let languagesArrayPerson = person.languages;

        languagesArrayPerson.forEach((language, numLanguage) => {
            if (!exists(language, languageArray)) {
                languageArray.push(language);
            }
        });

    });


    //Extract filter values from groups
    allGroups.forEach((group, numGroup) => {
        //Nationalities
        let nationalityArrayGroup = group.nationalities;

        nationalityArrayGroup.forEach((nationality, numNationality) => {
            if (!exists(nationality, nationalityArray)) {
                nationalityArray.push(nationality);
            }
        });

        //Hobbies
        let hobbyArrayGroup = group.hobbies;

        hobbyArrayGroup.forEach((hobby, numHobby) => {
            if (!exists(hobby, hobbyArray)) {
                hobbyArray.push(hobby);
            }
        });

        //Professional Interests
        let professionalIntsArrayGroup = group.professionalInterests;

        professionalIntsArrayGroup.forEach((profInt, numProfInt) => {
            if (!exists(profInt, professionalInterestsArray)) {
                professionalInterestsArray.push(profInt);
            }
        });

        //Languages
        let languagesGroup = group.language;

        if (!exists(languagesGroup, languageArray)) {
            languageArray.push(languagesGroup);
        }
    });

    //Sort
    nationalityArray.sort();
    languageArray.sort();
    hobbyArray.sort();
    professionalInterestsArray.sort();

    //Add filters
    filters.push(
        {
            title: "Nationality",
            values: nationalityArray
        }
    );

    filters.push(
        {
            title: "Language",
            values: languageArray
        }
    );

    filters.push(
        {
            title: "Hobby",
            values: hobbyArray
        }
    );

    filters.push(
        {
            title: "Professional interests",
            values: professionalInterestsArray
        }
    );

    //Create html elements for filters
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
                    case "Look for":
                        switch (optionValue) {
                            case "People":
                                lookForPersons = isChecked;
                                if (!isChecked) {
                                    let chkGroups = get("input[value='Groups']");
                                    chkGroups.checked = true;
                                    lookForGroups = true;
                                    //Remove people
                                    let listPeople = getAll("div[id^='person']");
                                    let listPeopleGroupsDiv = get(".people-groups-list");

                                    removeElementsFrom(listPeople, listPeopleGroupsDiv);
                                }

                                break;
                            case "Groups":
                                lookForGroups = isChecked;
                                if (!isChecked) {
                                    let chkPersons = get("input[value='People']");
                                    chkPersons.checked = true;
                                    lookForPersons = true;
                                    //Remove groups
                                    let listGroups = getAll("div[id^='group']");
                                    let listPeopleGroupsDiv = get(".people-groups-list");

                                    removeElementsFrom(listGroups, listPeopleGroupsDiv);
                                }

                                break;
                            default:
                                console.error("Option value (" + optionValue + ") doesn't exist!");
                                break;
                        }
                        break;
                    default:
                        console.error("Filter (" + filterName + ") doesn't exist!");
                        break;
                }

                let numFilteredPeople = filterPeople();
                let numFilteredGroups = filterGroups();

                if (areFiltersEmpty()) {
                    showInitialNumberOfPersonsToConnectWith();
                } else {
                    updateNumPeople(numFilteredPeople, numFilteredGroups);
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

function removeElementsFrom(elements, from) {
    for (let numChild = 0; numChild < elements.length; numChild++) {
        let child = elements[numChild];
        from.removeChild(child);
    }
}

function filterPeople() {
    if (!lookForPersons) {
        return;
    }

    let filteredPeople = allConnections;

    if (!areFiltersEmpty()) {
        //Filter people
        filteredPeople = allConnections.filter(isPersonInFilters);
    }

    addListOfPeople(filteredPeople);

    return filteredPeople.length;
}

function filterGroups() {

    if (!lookForGroups) {
        return;
    }

    let filteredGroups = allGroups;

    if (!areFiltersEmpty()) {
        //Filter groups
        filteredGroups = allGroups.filter(isGroupInFilters);
    }

    addListOfGroups(filteredGroups);

    return filteredGroups.length;
}

function selectPersonsAndGroupsByDefault() {

    let chkPersons = get("input[value='People']");
    chkPersons.checked = true;

    let chkGroups = get("input[value='Groups']");
    chkGroups.checked = true;
}

function isPersonInFilters(person) {
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

function isGroupInFilters(group) {

    let groupLanguage = group.language;

    if (languageFilter.indexOf(groupLanguage) >= 0) {
        return true;
    }


    let nationalityArray = group.nationalities;

    for (let i = 0; i < nationalityArray.length; i++) {
        let nationality = nationalityArray[i];
        if (nationalityFilter.indexOf(nationality) >= 0) {
            return true;
        }
    }


    let hobbiesArray = group.hobbies;

    for (let i = 0; i < hobbiesArray.length; i++) {
        let hobby = hobbiesArray[i];
        if (hobbyFilter.indexOf(hobby) >= 0) {
            return true;
        }
    }

    let profIntsArray = group.professionalInterests;

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
    let peopleGroupsList = get(".people-groups-list");

    //Empty list
    peopleGroupsList.innerHTML = "";

    if (!list) {
        list = allConnections;
    }

    for (let numPerson = 0; numPerson < list.length; numPerson++) {
        let person = list[numPerson];

        //Create person element
        let personDiv = document.createElement("div");
        personDiv.setAttribute("id", "person_" + numPerson);
        personDiv.classList.add("person");

        let nameSpan = document.createElement("span");
        nameSpan.classList.add("name");
        nameSpan.innerHTML = person.name + ", <span class='age'>" + person.age + "</span>";

        personDiv.appendChild(nameSpan);

        let originSpan = document.createElement("span");
        originSpan.classList.add("origin");
        originSpan.innerHTML = person.origin.city + ", " + person.origin.stateOrRegion;

        personDiv.appendChild(originSpan);

        //let ageSpan = document.createElement("span");
        //ageSpan.classList.add("age");
        //ageSpan.innerHTML = "&emsp;&emsp;&emsp;&emsp;" + person.age;

        //personDiv.appendChild(ageSpan);

        let addButtonDiv = document.createElement("div");
        addButtonDiv.classList.add("add-friend-div");

        let personAlreadyInConnections = false;

        var myConnections = JSON.parse(sessionStorage.getItem("my_connections"));

        //See if person is already in myConnections
        for (let numPerson = 0; numPerson < myConnections.length; numPerson++) {
            let connection = myConnections[numPerson];
            if (person.name == connection.name) {
                personAlreadyInConnections = true;
                break;
            }
        }

        let addButton = document.createElement("button");
        if (!personAlreadyInConnections) {
            addButton.classList.add("add-contact");
            addButton.innerHTML = "+";
            addButton.title = "Add this person to my connections";

            addButton.addEventListener("click", (e) => {
                currentAddButton = e.target;
                currentPerson = person;
                displayMessage("Add person", "Would you like to connect with <span class='modal-name-person-or-group'>" + person.name + "</span>?", document);
            });
        } else {
            addButton.classList.add("added-friend");
            addButton.innerHTML = "Added";
            addButton.title = "Already connected with this person";

        }

        addButtonDiv.appendChild(addButton);

        personDiv.appendChild(addButtonDiv);

        let personDescriptionDiv = document.createElement("div");
        personDescriptionDiv.classList.add("person-description");
        personDescriptionDiv.innerHTML = person.description;

        personDiv.appendChild(personDescriptionDiv);

        //Add person to list
        peopleGroupsList.appendChild(personDiv);
    }
}

/**
 * Add the list of groups to the array
 */
function addListOfGroups(list) {
    let peopleGroupsList = get(".people-groups-list");

    //Empty list
    //peopleList.innerHTML = "";

    if (!list) {
        list = allGroups;
    }

    for (let numGroup = 0; numGroup < list.length; numGroup++) {
        let group = list[numGroup];

        //Create group element
        let groupDiv = document.createElement("div");
        groupDiv.setAttribute("id", "group_" + numGroup);
        groupDiv.classList.add("group");

        let nameSpan = document.createElement("span");
        nameSpan.classList.add("group-name");
        nameSpan.innerHTML = group.name;

        groupDiv.appendChild(nameSpan);

        let languageSpan = document.createElement("span");
        languageSpan.classList.add("group-language");
        languageSpan.innerHTML = group.language;

        groupDiv.appendChild(languageSpan);

        let addButtonDiv = document.createElement("div");
        addButtonDiv.classList.add("add-group-div");

        let groupAlreadyInConnections = false;

        var myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
        //See if group is already in myGroups
        for (let numGroup = 0; numGroup < myGroups.length; numGroup++) {
            let connection = myGroups[numGroup];
            if (group.name == connection.name) {
                groupAlreadyInConnections = true;
                break;
            }
        }

        let addButton = document.createElement("button");
        if (!groupAlreadyInConnections) {
            addButton.classList.add("add-contact");
            addButton.innerHTML = "+";
            addButton.title = "Add this group to my connections";

            addButton.addEventListener("click", (e) => {
                currentAddButton = e.target;
                currentGroup = group;
                currentPerson = null;
                displayMessage("Add group", "Would you like to connect with group <span class='modal-name-person-or-group'>" + group.name + "</span>?", document);
            });
        } else {
            addButton.classList.add("added-group");
            addButton.innerHTML = "Added";
            addButton.title = "Already connected with this group";
        }

        addButtonDiv.appendChild(addButton);

        groupDiv.appendChild(addButtonDiv);

        let groupDescriptionDiv = document.createElement("div");
        groupDescriptionDiv.classList.add("group-description");
        groupDescriptionDiv.innerHTML = group.description;

        groupDiv.appendChild(groupDescriptionDiv);

        //Add group to list
        peopleGroupsList.appendChild(groupDiv);
    }
}

function showNumConnections() {
    let numConnectionsSpan = get(".num-of-connections");

    let myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
    let myConnections = JSON.parse(sessionStorage.getItem("my_connections"));

    let numConnections = myConnections.length + myGroups.length;
    if (numConnections === 1) {
        numConnectionsSpan.innerHTML = "Currently you have 1 connection";
    } else if (numConnections > 1) {
        numConnectionsSpan.innerHTML = "Currently you have " + numConnections + " connections";
    } else {
        numConnectionsSpan.innerHTML = "Currently you have 0 connections";
    }


}

function showInitialNumberOfPersonsToConnectWith() {

    let matchingCriteria = get(".matching-criteria");

    let myGroups = JSON.parse(sessionStorage.getItem("my_groups"));
    let myConnections = JSON.parse(sessionStorage.getItem("my_connections"));

    let numPeople = allConnections.length - myConnections.length;

    let legend = "";

    if (numPeople === 1) {
        legend += "You have 1 person and ";
    } else if (numPeople > 1) {
        legend = "You have " + numPeople + " people and ";
    } else {
        legend = "You have 0 people and ";
    }

    let numGroups = allGroups.length - myGroups.length;

    if (numGroups === 1) {
        legend += "1 group to connect with";
    } else if (numGroups > 1) {
        legend += numGroups + " groups to connect with";
    } else {
        legend += "0 groups to connect with";
    }

    matchingCriteria.innerHTML = legend;

}

function updateNumPeople(numPeople, numGroups) {
    let matchingCriteria = get(".matching-criteria");

    let legend = "";

    if (numPeople === 1) {
        legend += "1 person and ";
    } else if (numPeople > 1) {
        legend = numPeople + " people and ";
    } else {
        legend = "0 people and ";
    }

    if (numGroups === 1) {
        legend += "1 group match the criteria";
    } else if (numGroups > 1) {
        legend += numGroups + " groups match the criteria";
    } else {
        legend += "0 groups match the criteria";
    }

    matchingCriteria.innerHTML = legend;
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

function exists(item, array) {
    return indexOfElementInArray(item, array) >= 0;
}

/**
 * Returns the selected element
 * @param {*} selector {String}
 */
function get(selector) {
    return document.querySelector(selector);
}

function getAll(selector) {
    return document.querySelectorAll(selector);
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

    modalDisplay.innerHTML =

        '<div class="modal-title-meet">' +
        '<span class="modal-title">' + title + '</span>' +
        '<span class="close-button">&times;</span>' +
        '</div>' +

        '<div class="modal-message-meet">' + message + '</div>' +
        '<div class="message-optional"> <textarea class="textarea-message" rows="4" cols="50" maxlength="250" placeholder="Message (Optional)"></textarea> </div>' +
        '<div class="message-buttons-container">' +
        '<button id="btnBack" class="message-buttons-format">Cancel</button>' +
        '<button id="btnSend" class="message-buttons-format">Send Request</button>' +
        '</div>';

    modal.appendChild(modalDisplay);

    let closeButton = get(".close-button");
    closeButton.addEventListener("click", (e) => {
        let modalMeet = get("#modal-meet");
        modalMeet.style.display = "none";
    });

    let textArea = get(".textarea-message");
    textArea.addEventListener("click", (e) => {
        e.target.select();
    });

    let btnSend = get("#btnSend");
    btnSend.addEventListener("click", (e) => {
        if (currentPerson != null) {
            var connections = JSON.parse(sessionStorage.getItem("my_connections"));
            connections.push(currentPerson);
            sessionStorage.setItem("my_connections", JSON.stringify(connections));

            let modalMeet = get("#modal-meet");
            modalMeet.style.display = "none";
            //Change button + to Added
            showConnectionAdded();
        } else {
            var groups = JSON.parse(sessionStorage.getItem("my_groups"));
            groups.push(currentGroup);
            sessionStorage.setItem("my_groups", JSON.stringify(groups));

            let modalMeet = get("#modal-meet");
            modalMeet.style.display = "none";
            //Change button + to Added
            showConnectionAdded();
        }

        showNumConnections();

    });

    let btnBack = get("#btnBack");
    btnBack.addEventListener("click", (e) => {
        let modalMeet = get("#modal-meet");
        modalMeet.style.display = "none";
    });
}

function showConnectionAdded() {
    //Change add button to Added
    currentAddButton.classList.remove("add-contact");
    currentAddButton.classList.add("added-friend");
    currentAddButton.innerHTML = "Added";
    currentAddButton.setAttribute("disabled", "disabled");
}

