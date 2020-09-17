



let date = moment().format("MMMM Do YYYY");
// console.log(date);
moment().format("LT");

$("#currentDay").append(date);



let timeOfday = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"]
updatetime();

function updatetime() {
    var currentTime = moment().format('H');
    for (var i = 0; i < timeOfday.length; i++) {

        if (parseInt(timeOfday[i]) > currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");


        }
        else if (parseInt(timeOfday[i]) < currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

        }
        else if (parseInt(timeOfday[i]) == currentTime) {
            $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");

        }
    }
}

$(".saveBtn").on("click", function(){
    let timeOfday = $(this).parent().attr("id");
    let textContent = $("input").val();
    // console.log(timeOfday);
    // console.log(textContent);
})

