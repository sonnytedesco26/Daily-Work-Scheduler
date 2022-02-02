//Sets current day displayed at the top of the page
$("#currentDay").html(moment().format('dddd, MMMM Do YYYY'));

//Runs function only when entire page is loaded (page elements and DOM)
$(document).ready(function(){
    //Takes object with saveBtn class and applies following function on click
    $(".saveBtn").click(function(){
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();
        //Creates object with time taken from the ID of parent div, text (task) taken from the description value, then sets it
        localStorage.setItem(time, task);
    })

    function timer(){
        //sets variable to the current time using jquery moment function
        var currentTime = moment().hour();

        //For each div with time-block class, apply following function
        $(".time-block").each(function(){
            //set the blockTime equal to the contents of the div with hour class, take first element (0 index). Parse and make an Int (for comparison logic below)
            var blockTime = parseInt($(this).attr("id").split("hour")[0]);
            //since time "goes back down" after noon (1pm < 12am) we need military time
            //Needs to remove classes, to make sure only one is added (otherwise overwriting gets messy)
            if(blockTime < currentTime){
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            } else if(blockTime === currentTime){
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else{
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    //sets the description of each hour by using getItem on the localstorage with the associated id
    $("#9hour .description").val(localStorage.getItem("9hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#13hour .description").val(localStorage.getItem("13hour"));
    $("#14hour .description").val(localStorage.getItem("14hour"));
    $("#15hour .description").val(localStorage.getItem("15hour"));
    $("#16hour .description").val(localStorage.getItem("16hour"));
    $("#17hour .description").val(localStorage.getItem("17hour"));
    //Call the timer function again when set (do it all over again yayyyyy)
    timer();
})