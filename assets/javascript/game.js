var $ = function (id) {
    return document.getElementById(id);
}

    var game = ["JANUARY", "FEBUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var lettersGuessed = []
    var choice = Math.floor(Math.random()*12);
    var answer = game[choice];
    var myLength = answer.length;
    var display = [myLength];
    var win = myLength;
    var letters = answer.split('');
    var attemptsLeft = 20;
    var output = "";
    var userLetter = "";
    var wins = 0

    console.log(answer)


var setup = function() {
    document.getElementById("guesses").innerHTML ="you have " + attemptsLeft + " guesses left";
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "- ";
        output = output + display [i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";
}

var restart = function() {
    choice = Math.floor(Math.random()*12);
    lettersGuessed = []
    answer = game[choice];
    myLength = answer.length;
    display = [myLength];
    win = myLength;
    letters = answer.split('');
    attemptsLeft = 20;
    output = "";
    userLetter = "";
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    document.getElementById("letters-guessed").innerHTML = "letters guessed: " + lettersGuessed
    console.log(answer)
    
    setup();
}

window.onload = function()
{
    setup();
}

document.onkeyup = function(event)
{


    
    var userLetter = event.key
    output = "";
    lettersGuessed.push(event.key.toUpperCase())
    {
        document.getElementById("letters-guessed").innerHTML = "letters guessed: " + lettersGuessed
    }
    

    for (var c = 0; c< answer.length; c++) {
        //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }
            output = output + display[c] + " ";
    }
    document.getElementById("game").innerHTML = output;
    output="";
    attemptsLeft--;

    if (win < 1) {
        document.getElementById("vicdefeat-text").innerHTML = "YOU WIN!!!";
        wins++;
        restart();
    } else if (attemptsLeft < 1) {
        document.getElementById("vicdefeat-text").innerHTML ="Sorry better luck next time :/";
        restart();
    }
    else {
        document.getElementById("guesses").innerHTML ="you have " + attemptsLeft + " guesses left";
    }

}
