var numberOfWon = 0;
var numberOfLost = 0;

for (var i = 1; i <= 5; i++) {
    var guessNumber = Number(prompt("Enter Number 1 to 5 :"));

    var randomNumber = Math.floor(Math.random() * 5) +1;

    if (guessNumber == randomNumber) {
        document.write("<br>" + "You Won This Game ! ");
        numberOfWon++;
    } else {
        document.write(
            "<br>" + "You Lost This Game , Random Number is " + randomNumber
        ) + "<br>";
        numberOfLost++;
    }
}

document.write("<br>" + "Number of Won : " + numberOfWon + "<br>");
document.write("Number of Lost : " + numberOfLost);
