//variables 
var taskInput = $('#user-input');
var timeDisplayEl = $('#current-day');

//displays current date 
var todaysDate = moment().format('MMM DD, YYYY');
timeDisplayEl.text(todaysDate);

var currentTime = moment().hour()

//calls the number id associated with the the time block 
var hours = [$('#9'),$('#10'),$('#11'),$('#12'),$('#13'),$('#14'),$('#15'),$('#16'),$('#17')]

//loops through the array of numbers and determines if it is past, present, or future and assigns the class accordingly 
for (let i = 0; i < hours.length; i++) {
    const hoursEl = hours[i].attr("id");
    hours[i].children('input').val(JSON.parse(localStorage.getItem(hoursEl)) || "")
    if (hoursEl < currentTime) {
        hours[i].children('input').addClass('past')
        console.log("this is thr past")
    
    }
    else if (hoursEl == currentTime) {
        hours[i].children('input').addClass('present')
        console.log("this is right now")
    }

    else {
        hours[i].children('input').addClass('future')
        console.log("this is future")
    }
}


//click event sets item in local storage and saves the user input as 
$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    var userInput = $(this).siblings("input");
    localStorage.setItem(userInput.parent().attr('id'), JSON.stringify(userInput.val()))
    
})

