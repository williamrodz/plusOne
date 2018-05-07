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

//Possible filters for finding events
var filters = [

    {
        title: "Social",
        values: ["Kids", "Family", "Religion", "Culture"]
    },
    {
        title: "Professional",
        values: ["Job Search", "Career Development", "Networking"]
    },
    {
        title: "Academic",
        values: ["Innovation Course", "English Classes", "Korean Classes", "Teaching Labs"]
    },
    {
        title: "Community Service",
        values: ["School", "Hospital"]
    }
];

var socialFilter = [];
var professionalFilter = [];
var academicFilter = [];
var communityServiceFilter = [];

var events = [
    {
        name: "English Class",
        when: {
            month: ["April", "May", "June"],
            days: {
                "April": ["14", "16", "24", "26", "34", "36", "44", "46"],
                "May": ["14", "16", "24", "26", "34", "36", "44", "46", "54"],
                "June": ["24", "26", "34", "36", "44", "46", "54", "56"],
            },
            start: "08:00",
            end: "09:30"
        },
        where: "32-141",
        social:[],
        professional:[],
        academic:["English Classes"],
        communityService: [],
        description: "The Language Conversation Exchange is offering English courses for people looking to improve conversational skills." 
    },
    {
        name: "MFA Visit",
        when: {
           month: ["April", "May", "June"],
           days: {
               "April": ["27"],
               "May": ["27"],
               "June": ["27", "47"]
           },
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
           month: ["April"],
           days: {
               "April": ["22"],
               "May": [], 
               "June": []
           },
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
           month: ["May"],
           days: {
               "April": [],
               "May": ["34"],
               "June": []
           },
           start: "14:00",
           end: "16:00"
        },
        where: "MIT Martin Trust Center",
        social: [],
        professional: ["Career Development"],
        academic: [],
        communityService: [],
        description: "Learn about how to start a new venture from the experts at the Martin Trust Center."
    }
]

// When document had fully loaded 
document.addEventListener("DOMContentLoaded", function(event) {
    createFilters();
    createCalendarDateBlock(currentMonth);
    addEvents(events);

    //Button Clear All filters
    let btnClearAllFilters = get(".clear-all-filters");
    btnClearAllFilters.addEventListener("click", (e) => {

        clearArrayFilters();

        let arrayCheckbox = document.querySelectorAll("input[type='checkbox']");

        arrayCheckbox.forEach((element) => {
            element.checked = false;
        });

        addEvents(events);
    });

    Util.one("#left").addEventListener("click", function() {
        if (currentMonth.prev) {
            if (currentMonth.prev == "April"){
                currentMonth = april;
            }
            else{
                currentMonth = may;
            }
            reloadCalendar();
            addEvents(events);
        }
    });

    Util.one("#right").addEventListener("click", function() {
        if (currentMonth.next) {
            if (currentMonth.next == "May"){
                console.log("here");
                currentMonth = may;
            }
            else{
                currentMonth = june;
            }
            reloadCalendar();
            addEvents(events);
        }
    })

    Util.all(".event").forEach(function(event) {
        event.addEventListener("click", function(e){
            e.preventDefault()
            e.stopPropagation()
            displayEvent(event, document)
        })
    })

    window.addEventListener("click", function(e){
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
    for (var i=1; i<36; i++) {
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
        day_number.innerHTML = month.days[i-1];
        day_block.appendChild(day_number);
        if (col_counter == 7) {
            col_counter = 1;
            row_counter += 1;
            add_days = false;
        }
        else {col_counter += 1;}
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
    for (let numEvent = 0; numEvent < events.length; numEvent++) {
        var event = events[numEvent];
        var month = currentMonth.month;
        var eventBlocks = event.when.days[month];
        for (let numBlock = 0; numBlock < eventBlocks.length; numBlock++) {
            var eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            eventDiv.innerHTML = event.when.start + " " + event.name;
            var block = eventBlocks[numBlock];
            document.getElementById(block).appendChild(eventDiv);
            
        }
    }







    // var event_slot = document.createElement('div');
    // event_slot.classList.add("event");
    // event_slot.setAttribute("id", type);
    // event_slot.style.gridRow = 2; //Changes depending on # of holidays and events on day-block
    // var event_list = document.createElement('li');
    // var event_description = document.createElement('b');
    // event_description.innerHTML = description;
    // event_list.appendChild(event_description);
    // event_slot.appendChild(event_list);
    // document.getElementById(day_block_id).appendChild(event_slot);   
}

function displayEvent(event, current_document) {
    var modal = Util.one("#modal")
    modal.style.display = "block";

    modal.innerHTML = "";

    var modal_display = current_document.createElement('div')

    modal_display.classList.add("modal-display-event")

    modal_display.innerHTML = '<div class="modal-title">English Class</div><img class="modal-left-side" src="event.png"/><div class="modal-right-side">Right side</div><div class="modal-event-add">Add +</div>'

    modal.appendChild(modal_display)

    Util.one(".modal-event-add").addEventListener("click", function(e){
        e.preventDefault()
        e.stopPropagation()
        Util.one("#modal").style.display = "none";
    })
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

/**
 * Returns the selected element
 * @param {*} selector {String}
 */
function get(selector) {
    return document.querySelector(selector);
}

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

function clearArrayFilters() {
    socialFilter = [];
    professionalFilter = [];
    academicFilter = [];
    communityServiceFilter = [];
}


