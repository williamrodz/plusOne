//Months available in calendar
var april = {
    month: "April",
    prev: null,
    next: "May",
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5]
};
var may = {
    month: "May",
    prev: "April",
    next: "June",
    days: [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2]
};
var june = {
    month: "June",
    prev: "May",
    next: null,
    days: [27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
};
var currentMonth = may;

var filters = [];

var socialFilter = [];
var professionalFilter = [];
var academicFilter = [];
var communityServiceFilter = [];

var events = [
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

// When document had fully loaded 
document.addEventListener("DOMContentLoaded", function (event) {
    createFilters();
    createCalendarDateBlock(currentMonth);
    console.log("here1");
    addEvents(getMonthEvents(events));

    //Button Clear All filters
    let btnClearAllFilters = get(".clear-all-filters");
    btnClearAllFilters.addEventListener("click", (e) => {

        clearArrayFilters();

        let arrayCheckbox = document.querySelectorAll("input[type='checkbox']");

        arrayCheckbox.forEach((element) => {
            element.checked = false;
        });
        console.log("here2");
        addEvents(getMonthEvents(events));
    });

    Util.one("#left").addEventListener("click", function () {
        if (currentMonth.prev) {
            if (currentMonth.prev == "April") {
                currentMonth = april;
            }
            else {
                currentMonth = may;
            }
            reloadCalendar();
            console.log("here3");
            addEvents(getMonthEvents(events));
            filterEvents();

        }
    });

    Util.one("#right").addEventListener("click", function () {
        if (currentMonth.next) {
            if (currentMonth === april) {
                currentMonth = may;
            }
            else {
                currentMonth = june;
            }
            reloadCalendar();
            console.log("here4");
            addEvents(getMonthEvents(events));
            filterEvents();
        }
    })

    window.addEventListener("click", function (e) {
        if (e.target == Util.one("#modal")) {
            e.preventDefault()
            e.stopPropagation()
            Util.one("#modal").style.display = "none";
        }
    })

});

/**
 * Fills calendar grid with divs representing day blocks and populates them
 * with the day number.
 * @param {month object} month
 */
function createCalendarDateBlock(month) {
    var blocks_panel = document.getElementsByClassName("calendarDates")[0];
    var row_counter = 1;
    var col_counter = 1;
    var add_days = true;
    var day_index = 0;
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (var i = 1; i < 36; i++) {
        var day_block = createDateDiv(row_counter, col_counter);
        blocks_panel.appendChild(day_block);
        var day_number = document.createElement('div');
        if (add_days) {
            var day = document.createElement('div');
            day.classList.add("day-label");
            day.innerHTML = days[day_index];
            day_index += 1;
            day_block.appendChild(day);
            day_number.classList.add("first-row-day");
        }
        else {
            day_number.classList.add("reg-day");
        }
        day_number.innerHTML = month.days[i - 1];
        day_block.appendChild(day_number);
        if (col_counter == 7) {
            col_counter = 1;
            row_counter += 1;
            add_days = false;
        }
        else { col_counter += 1; }
    }
}

/**
 * Creates a div representing each block of the calendar. 
 * @param {number} row 
 * @param {number} col 
 */
function createDateDiv(row, col) {
    var day_block = document.createElement('div');
    day_block.classList.add("day-block");
    day_block.style.gridColumn = col;
    day_block.style.gridRow = row;
    day_block.setAttribute("id", row.toString() + col);
    return day_block;
}

function reloadCalendar() {
    document.getElementsByClassName("calendarDates")[0].innerHTML = '';
    createCalendarDateBlock(currentMonth);
    document.getElementById("month").innerHTML = currentMonth.month + " 2018";
}

/**
 * Adds events to blocks
 * @param {list} events
 */
function addEvents(events) {
    cleanCalendarEvents();
    for (let numEvent = 0; numEvent < events.length; numEvent++) {
        var event = events[numEvent];
        var eventBlock = event.when.day;
        var eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.setAttribute("parent", event.when.day);
        eventDiv.innerHTML = event.when.start + " " + event.name;
        document.getElementById(eventBlock).appendChild(eventDiv);
    }
    Util.all(".event").forEach(function (event) {
        event.addEventListener("click", function (e) {
            e.preventDefault()
            e.stopPropagation()
            displayEventModal(event, document)
        })
    })
}

function displayEventModal(event, current_document) {
    var modal = Util.one("#modal");
    modal.style.display = "block";

    modal.innerHTML = "";

    var modal_display = current_document.createElement('div');

    modal_display.classList.add("modal-display-event");

    var eventObject = getEventObject(event);

    modal_display.innerHTML = '<div class="modal-title">' + eventObject.name + '<span class="modal-close">×</span></div><div class="modal-right-side">' + 'Time: ' + eventObject.when.start + ' - ' + eventObject.when.end + '<br>' + 'Location: ' + eventObject.where + '<br>' + eventObject.description + '</div><div class="modal-event-add">Add +</div>';

    var dateDisplay = document.createElement("div")
	dateDisplay.classList.add("modal-left-side")

	var dateDisplayMonthBar = document.createElement("div")
	dateDisplayMonthBar.classList.add("my-event-date-month-modal")
	dateDisplayMonthBar.innerHTML = eventObject.when.month.substring(0, 3);
	dateDisplay.appendChild(dateDisplayMonthBar)

	var dateDisplayDayBar = document.createElement("div")
	dateDisplayDayBar.classList.add("my-event-date-day-modal")
	dateDisplayDayBar.innerHTML = eventObject.when.day
	dateDisplay.appendChild(dateDisplayDayBar)
    modal_display.appendChild(dateDisplay);

    modal.appendChild(modal_display);

    Util.one(".modal-event-add").addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        Util.one("#modal").style.display = "none";
    });

    Util.one(".modal-close").addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()
        Util.one("#modal").style.display = "none";
    });

    Util.one(".modal-event-add").addEventListener("click", function (e) {
        //Change add button to Added
        e.classList.remove("modal-event-add");
        e.classList.add("modal-event-added");
        e.innerHTML = "Added";
    });

}

/**
 * Adds or remove selected value to specific array filter. 
 * It keeps UI filters synchronized with their model.
 * @param {Boolean} isChecked true if element will be added, false if removed.
 * @param {String} element to be added or removed.
 * @param {Array} array where to add or remove.
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

/**
 * Returns the selected element
 * @param {*} selector {String}
 */
function get(selector) {
    return document.querySelector(selector);
}
/**
 * Adds filters to filters bar
 */
function createFilters() {

    //Add information to filters

    let socialArray = [];
    let professionalArray = [];
    let academicArray = [];
    let communityServiceArray = [];

    //Extract filter values from events
    events.forEach((event, numEvent) => {
        //Social
        let socialArrayEvent = event.social;

        socialArrayEvent.forEach((socialTag, numSocialTag) => {
            if (!exists(socialTag, socialArray)) {
                socialArray.push(socialTag);
            }
        });

        //Professional
        let professionalArrayEvent = event.professional;

        professionalArrayEvent.forEach((professionalTag, numProfessionalTag) => {
            if (!exists(professionalTag, professionalArray)) {
                professionalArray.push(professionalTag);
            }
        });

        //Academic
        let academicArrayEvent = event.academic;

        academicArrayEvent.forEach((academicTag, numAcademicTag) => {
            if (!exists(academicTag, academicArray)) {
                academicArray.push(academicTag);
            }
        });

        //Community Service
        let commArrayEvent = event.communityService;

        commArrayEvent.forEach((commTag, numCommTag) => {
            if (!exists(commTag, communityServiceArray)) {
                communityServiceArray.push(commTag);
            }
        });

    });

    //Sort
    socialArray.sort();
    professionalArray.sort();
    academicArray.sort();
    communityServiceArray.sort();

    //Add filters
    filters.push(
        {
            title: "Academic",
            values: academicArray
        }
    );

    filters.push(
        {
            title: "Community Service",
            values: communityServiceArray
        }
    );

    filters.push(
        {
            title: "Professional",
            values: professionalArray
        }
    );

    filters.push(
        {
            title: "Social",
            values: socialArray
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
                    case "Social":
                        updateArray(isChecked, optionValue, socialFilter);
                        break;
                    case "Professional":
                        updateArray(isChecked, optionValue, professionalFilter);
                        break;
                    case "Academic":
                        updateArray(isChecked, optionValue, academicFilter);
                        break;
                    case "Community Service":
                        updateArray(isChecked, optionValue, communityServiceFilter);
                        break;
                    default:
                        console.error("Filter (" + filterName + ") doesn't exist!");
                        break;
                }
                filterEvents();
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

function areFiltersEmpty() {
    return socialFilter.length === 0 && academicFilter.length === 0 && professionalFilter.length === 0 && communityServiceFilter.length === 0;
}

function isEventInFilters(event) {
    let socialArray = event.social;

    for (let i = 0; i < socialArray.length; i++) {
        let socialTag = socialArray[i];
        if (socialFilter.indexOf(socialTag) >= 0) {
            return true;
        }
    }

    let professionalArray = event.professional;

    for (let i = 0; i < professionalArray.length; i++) {
        let professionalTag = professionalArray[i];
        if (professionalFilter.indexOf(professionalTag) >= 0) {
            return true;
        }
    }

    let academicArray = event.academic;

    for (let i = 0; i < academicArray.length; i++) {
        let academicTag = academicArray[i];
        if (academicFilter.indexOf(academicTag) >= 0) {
            return true;
        }
    }

    let communityServiceArray = event.communityService;

    for (let i = 0; i < communityServiceArray.length; i++) {
        let communityServiceTag = communityServiceArray[i];
        if (communityServiceFilter.indexOf(communityServiceTag) >= 0) {
            return true;
        }
    }

    return false;

}

function filterEvents() {

    let filteredEvents = getMonthEvents(events);


    if (!areFiltersEmpty() && filteredEvents.length > 0) {
        //Filter events
        filteredEvents = events.filter(isEventInFilters);
        
    }
    console.log("here5");
    addEvents(filteredEvents);
}

function clearArrayFilters() {
    socialFilter = [];
    professionalFilter = [];
    academicFilter = [];
    communityServiceFilter = [];
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

function cleanCalendarEvents() {
    var calendarDates = document.getElementsByClassName("event");
    //for (let i = 0; i < calendarDates.length; i++) {
    let numElements = calendarDates.length;
    for (let i = numElements-1; i >= 0; i--) {
        let event = calendarDates[i];
        let parent = document.getElementById(event.getAttribute("parent"));

        parent.removeChild(event);
    }
}

function getEventObject(event) {
    let eventParent = event.getAttribute("parent");
    for (let i = 0; i < events.length; i++) {
        let potentialEvent = events[i];
        if (eventParent == potentialEvent.when.day && currentMonth.month == potentialEvent.when.month) {
            return potentialEvent;
        }
    }
}

function getMonthEvents(events) {
    var monthEvents = [];
    for (let i = 0; i < events.length; i++) {
        let potentialEvent = events[i];
        if (currentMonth.month == potentialEvent.when.month) {
            monthEvents.push(potentialEvent);
        }
    }
    return monthEvents;
}


