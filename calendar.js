var class_description = "08:00 English Class";
var class_blocks = ["14", "16", "24", "26", "34", "36", "44", "46"];

// When document had fully loaded 
document.addEventListener("DOMContentLoaded", function(event) {
    createCalendarDateBlock();
    addMonthToBlock();
    addHoliday("Easter", "11");
    addHoliday("Cinco de Mayo", "57");
    for (i=0; i<class_blocks.length; i++) {
        addEvent(class_blocks[i], "class", class_description);
    }
    addEvent("27", "museum", "11:00 MFA Visit");
    addEvent("47", "museum", "11:00 MFA Visit");
    addEvent("22", "career", "08:00 Career Fair");
    addEvent("32", "career", "10:00 Campus Interviews");


});

/**
 * Fills calendar grid with divs representing day blocks for April 2018.
 * Hard coded
 */
function createCalendarDateBlock() {
    console.log("here");
    var blocks_panel = document.getElementsByClassName("calendar-dates")[0];
    var row_counter = 1;
    var col_counter = 1;
    var day = 1;
    for (var i=1; i<36; i++) {
        var day_block = createDateDiv(row_counter, col_counter);
        if (col_counter == 7) {
            col_counter = 1;
            row_counter += 1;
        }
        else {col_counter += 1;}
        if (day == 31) { day=1;}
        day_block.innerHTML = day;
        day += 1;
        blocks_panel.appendChild(day_block);
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

/**
 * Adds April, May to block of 1st of each month. 
 * Hard coded
 */
function addMonthToBlock() {
    document.getElementById("11").innerHTML = "April &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1";
    document.getElementById("53").innerHTML = "May &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1";
}

/**
 * Creates holiday div and adds it to calendar day-block.
 * Hard coded
 * @param {string} holiday 
 * @param {string} day_block_id
 */
function addHoliday(holiday, day_block_id) {
    var holiday_slot = document.createElement('div');
    holiday_slot.classList.add("holiday");
    holiday_slot.style.gridRow = 2; //Changes depending on # of holidays on day-block
    holiday_slot.innerHTML = holiday;
    document.getElementById(day_block_id).appendChild(holiday_slot);
}

/**
 * Creates list with event description and adds it to day block.
 * @param {string} day_block_id 
 * @param {string} type Type of event: class, museum, career
 * @param {string} description Time and name of event in that order
 */
function addEvent(day_block_id, type, description) {
    var event_slot = document.createElement('ul');
    event_slot.setAttribute("id", type);
    event_slot.style.gridRow = 2; //Changes depending on # of holidays and events on day-block
    var event_list = document.createElement('li');
    var event_description = document.createElement('b');
    event_description.innerHTML = description;
    event_list.appendChild(event_description);
    event_slot.appendChild(event_list);
    document.getElementById(day_block_id).appendChild(event_slot);   
}



