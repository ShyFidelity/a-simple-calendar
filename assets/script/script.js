var saveBtn = $('#saveBtn');
var taskInput = $('#user-input');
var timeDisplayEl = $('#current-day');

var todaysDate = moment().format('MMM DD, YYYY');
timeDisplayEl.text(todaysDate);


var currentTime = moment().hour()

var hours = [$('#9'),$('#10'),$('#11'),$('#12'),$('#13'),$('#14'),$('#15'),$('#16'),$('#17')]

for (let i = 0; i < hours.length; i++) {
    const hoursEl = hours[i].attr("id");

    console.log(hoursEl)

    if (hoursEl < currentTime) {
        hours[i].children('#user-input').addClass('past')
        console.log("this is thr past")
    
    }
    else if (hoursEl == currentTime) {
        hours[i].children('#user-input').addClass('present')
        console.log("this is right now")
    }

    else {
        hours[i].children('#user-input').addClass('future')
        console.log("this is future")
    }
}



// saveInput.on('submit', saveInput);

   
//     $(".saveBtn").on("click", function (){

//         var userInput = $('input[name="user-input"]').val;
//         localStorage.setItem(userInput)
