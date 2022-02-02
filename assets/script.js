$("#currentDay").html(moment().format('dddd, MMMM Do YYYY'));


$(document).ready(function(){
    $(".saveBtn").click(function(){
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();

        localStorage.setItem(time, task);
    })

    function timer(){
        var currentTime = moment().hour();

        $(".time-block").each(function(){
            //0 was taking the wrong attribute
            var blockTime = parseInt($(this).attr("id").split("hour")[0]);
            //since time "goes back down" after 12 (1 < 12) we need military time
            //Needs to remove classes for if they're another case (otherwise overwriting gets messy)
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
    $("#9hour .description").val(localStorage.getItem("9hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#13hour .description").val(localStorage.getItem("13hour"));
    $("#14hour .description").val(localStorage.getItem("14hour"));
    $("#15hour .description").val(localStorage.getItem("15hour"));
    $("#16hour .description").val(localStorage.getItem("16hour"));
    $("#17hour .description").val(localStorage.getItem("17hour"));

    timer();
})