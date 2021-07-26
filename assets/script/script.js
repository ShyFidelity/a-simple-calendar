// var saveBtn = $('#saveBtn');
var taskInput = $('#user-input');
var timeDisplayEl = $('#current-day');

var todaysDate = moment().format('MMM DD, YYYY');
timeDisplayEl.text(todaysDate);


var currentTime = moment().hour()

var hours = [$('#9'),$('#10'),$('#11'),$('#12'),$('#13'),$('#14'),$('#15'),$('#16'),$('#17')]

for (let i = 0; i < hours.length; i++) {
    const hoursEl = hours[i].attr("id");
    hours[i].children('input').val(JSON.parse(localStorage.getItem(hoursEl)) || "")
   //in for loop take the element take the children of input and set the value to what is to be in ls

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


  
$(".saveBtn").on("click", function (event) {
    event.preventDefault()
    var userInput = $(this).siblings("input");
    localStorage.setItem(userInput.parent().attr('id'), JSON.stringify(userInput.val()))
    
})
