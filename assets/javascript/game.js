//Crystal Game Javascript and jQuery file
//

//Variables
var targetNumber = 50;
var counter = 0;
var numberOptions = [10, 5, 3, 7];
var increment = numberOptions[Math.round(Math.random())];

//Number user is trying to guess
$("#number-to-guess").text(targetNumber);


$(".crystalPic").on("click", function () {

    counter += increment;
    //User's total combined guesses
    $("#userScore").text(counter);

    if (counter === targetNumber) {
        alert("You Win!");
    } else if (counter >= targetNumber) {
        alert("You Lose!");
    }
});