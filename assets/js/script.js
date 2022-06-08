let hour = document.querySelector('.col-1 hour')
let timeBlockEls = document.querySelectorAll('.time-block')

let timeclock = function() {
    var timeOfDay = moment().format('[It is currently ] dddd MMMM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = timeOfDay;
}

function checkTimeBlock(time) {
let currentHour = parseInt(moment().format('HH'));
console.log(currentHour)

    if (time < currentHour) {
        return 'past'
    } else if (time > currentHour) {
        return 'future'
    } else {
        return 'present'
    }
}
timeBlockEls.forEach(function(timeBlock){
let hourEl = $(timeBlock).children('.hour').attr('id')
console.log(hourEl)
$(timeBlock).addClass(checkTimeBlock(hourEl))
var taskText = localStorage.getItem(hourEl) || ''
$(timeBlock).children('textarea').val(taskText)

}) 

timeclock()

$('.time-block').on('click', 'button', saveToLocal)

function saveToLocal(event) {
var element = event.target
var hour = $(element).siblings('.hour').attr('id')
var task = $(element).siblings('textarea').val()

localStorage.setItem(hour, task)
console.log($(element).siblings('.hour').attr('id'))
}