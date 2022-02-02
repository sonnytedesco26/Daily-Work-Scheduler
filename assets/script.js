$("#currentDay").html(moment().format('dddd, MMMM Do YYYY'));


/*function saveClick(){
    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();

    localStorage.setItem(time, task);
}*/

$(document).ready(function(){
    $(".saveBtn").click( function(){
        var time = $(this).parent().attr("id");
        var task = $(this).siblings(".description").val();

        localStorage.setItem(time, task);
    })

    function timer(){
        var currentTime = moment().hour();

        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("hour")[0]);

            if(blockTime < currentTime){
                $(this).addClass("past");
            } else if(blockTime === currentTime){
                $(this).addClass("present");
            } else{
                $(this).addClass("future");
            }
        })
    }
    $("#9AM .description").val(localStorage.getItem("9AM"));
    $("#10AM .description").val(localStorage.getItem("10AM"));
    $("#11AM .description").val(localStorage.getItem("11AM"));
    $("#12PM .description").val(localStorage.getItem("12PM"));
    $("#1PM .description").val(localStorage.getItem("1PM"));
    $("#2PM .description").val(localStorage.getItem("2PM"));
    $("#3PM .description").val(localStorage.getItem("3PM"));
    $("#4PM .description").val(localStorage.getItem("4PM"));
    $("#5PM .description").val(localStorage.getItem("5PM"));

    timer();
})