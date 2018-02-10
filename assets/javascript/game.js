//Crystal Game Javascript

//Variables
//selects number 19-120 for computer to use as target
var targetNumber = Math.floor((Math.random() * 100) + 20);
//user score starts at zero
var counter = 0;
//array created to hold user-clickable button values to achieve score
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//used to total and show multiple clicks of value for a "total score" for user
var increment = numberOptions;
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