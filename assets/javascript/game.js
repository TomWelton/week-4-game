//Crystal Game Javascript
///////////////////////////////////////////
// DONT FORGET DOCUMENT READY FUNCTIONS
///////////////////////////////////////////
//Variables
$(document).ready(function () {
    //selects number 19-120 for computer to use as target
    var targetNumber = Math.floor((Math.random() * 100) + 20);
    //user score starts at zero
    var counter = 0;
    //array created to hold user-clickable button values to achieve score
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    //used to total and show multiple clicks of value for a "total score" for user
    var increment = numberOptions;
	//array to hold the four selected numbers.
	var selectedNumbers = [0, 0, 0, 0];
    
	//alert("Tommy");
	//Console.log("Tommy");
	
	//Number user is trying to guess
    for (var i = 0; i < 4; i++) {
        selectedNumbers[i] = numberOptions[Math.floor(Math.random() * 12)];
		//alert("selectedNumbers[" + i + "]: " + selectedNumbers[i]);
    }


    $("#number-to-guess").text(targetNumber);


    $(".crystalPic").on("click", function () {

		//alert(this.id);
        counter += selectedNumbers[this.id-1];
        //User's total combined guesses
        $("#userScore").text(counter);

        if (counter == targetNumber) {
            alert("You Win!");
			window.location.reload();
        } else if (counter >= targetNumber) {
            alert("You Lose!");
			window.location.reload();
        }
    });
});