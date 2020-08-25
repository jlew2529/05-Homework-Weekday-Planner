$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    function colorChange() {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var timeHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeHour, currentHour);

            if (timeHour < currentHour) {
                $(this).addClass("past");
            }
            else if (timeHour === currentHour) {
                $(this).addClass("present");
            }   
            else {
                $(this).addClass("future");
            } 
        })
    }
    colorChange();

    $(".saveBtn").on("click", function () {
        console.log(this);
        var textdescription = $(this).siblings(".description").val();
        var timeBlockId = $(this).parent().attr("id");

        localStorage.setItem(timeBlockId, textdescription);
    })

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

})