



let date = moment().format("MMMM Do YYYY");
// console.log(date);
moment().format("LT");

$("#currentDay").append(date);



let time = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"]
updatetime();

function updatetime() {
    let currentTime = moment().format('H');
    for (var i = 0; i < time.length; i++) {

        if (parseInt(time[i]) > currentTime) {
            $("#" + time[i]).attr("style", "background-color: #58ce7b");


        }
        else if (parseInt(time[i]) < currentTime) {
            $("#" + time[i]).attr("style", "background-color: lightgray");

        }
        else if (parseInt(time[i]) == currentTime) {
            $("#" + time[i]).attr("style", "background-color: #fc665e");

        }
    }
}

$(".saveBtn").on("click", function () {
    let timeOfday = $(this).parent().attr("id");
    let textContent = $(this).siblings("input").val()
    // console.log(timeOfday);
    // console.log(textContent);

    localStorage.setItem(timeOfday, textContent);

})

$("#8am").children("input").val(localStorage.getItem("8am"));
$("#9am").children("input").val(localStorage.getItem("9am"));
$("#10am").children("input").val(localStorage.getItem("10am"));
$("#11am").children("input").val(localStorage.getItem("11am"));
$("#12pm").children("input").val(localStorage.getItem("12pm"));
$("#1pm").children("input").val(localStorage.getItem("1pm"));
$("#2pm").children("input").val(localStorage.getItem("2pm"));
$("#3pm").children("input").val(localStorage.getItem("3pm"));
$("#4pm").children("input").val(localStorage.getItem("4pm"));
$("#5pm").children("input").val(localStorage.getItem("5pm"));
