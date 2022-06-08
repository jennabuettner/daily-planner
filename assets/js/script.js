let hourNine = $("#9")
const hourTen = $("#10")
const hourEleven = $("#11")
const hourTwelve = $("#12")
const hourOne = $("#1")
const hourTwo = $("#2")
const hourThree = $("#3")
const hourFour = $("#4")
const hourFive = $("#5")

let timeclock = function() {
    var time = moment().format('[It is currently ] dddd MMMM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}










function checkTime(timeArray) {
    let currentHour = (moment().format('12'));
    console.log("The current hour is " + currentHour);
    for (let i = 0; i < timeArray.length; i++) {
        let hourCheck = parseInt(timeArray[i].dataset.num)
        if (currentHour == hourCheck) {
            console.log("this is the current index: " + i);
            console.log(hourCHeck + " is the current hour");
            timeArray[i].className = "present col-10";
        } else if (currentHour > hourCheck) {
            timeArray[i].className = "past col-10";
            console.log(hourCheck + " is in the past.");
            console.log("this is the current index: " + i);
        } else {
            timeArray[i].className = "future col-10";
            console.log("It is not yet " + hourCheck);
            console.log("this is the current index: " + i);
        }
    }
}



// function colorTextArea() {
//     if ('.hour' > timeOfDay) {
//         textarea.setAttribute('background color', 'gray')
//     }
// }

// timeclock()
// setInterval(timeclock, 1000)
// //capture variabes for user input
// function checkTime() {
// var timeOfDay = (".hour");
// var hours = .getHours();
//     if(hours >= 9 && hours <= 17){
//         $(".hour").addClass("present");
//     }
//     else if (hours < 9) {
//         $(".hour").addClass("past");
//     } else {
//         $(".hour").addClass("future");
//     }
// }

// checkTime();




//var current Day = $("#current-day")

//add classes and event listners on all save buttons

//function to determine whether or not time has already passed
//color code in respons
//loop to go through all time blocks then compare each one to current hour var currentTime

//variable that stores that blocks hour grab by timeblock id in id parse string to integer 
// if statements
// if (timebox < currentHour)
    //add pass class
//  else if (timebox > moment)
    //remove present
    //remove past
    // add future class

// if (timebox == moment)
    //remove past
    // add present


// function loading tast from local storage
// target with reference to textarea set value to localstorage.getItem('key')

//setInterval to run the hourcolor updating function every 15-30s

//moment function
//capture moment for current time in hour moment().hours (militarytime)
//does this onload in tandem with color code function


//save task functon 
//reference to textarea and grab userinput via value
//store value as var
//event.target for save button

//use sibling method to target textarea
//use parent to target the specific hour based on the hour id
//local storage set time as key and value as textarea text (setItem)


//event listener to save to local storage
//key for each hour
$('.time-block').on('click', 'button', saveToLocal)

function saveToLocal(event) {
var element = event.target
var hour = $(element).siblings('.hour').attr('id')
var task = $(element).siblings('textarea').val()

localStorage.setItem(hour, task)
console.log($(element).siblings('.hour').attr('id'))
}

function loadFromLocal() {
var hourCount = 9

while (hourCount <=17) {
var taskText = localStorage.getItem(hourCount)
console.log(taskText)
hourCount ++;
}
}

loadFromLocal()