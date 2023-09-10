// Arrays and game variables.
var buttonColours = ["green", "blue", "purple", "orange"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// Game Start event listener.
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("LEVEL " + level);
        nextSequence();
        started = true;
    }
});

// Adds event listeners to game buttons.
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

// Checks to see if user input matches.
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("PRESS A KEY TO TRY AGAIN!");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 500);
        startOver();
    }
}

// Chooses a number between 0 and 3 at random for next colour.
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("LEVEL " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(250).fadeIn(250);
    playSound(randomChosenColour);
}

// Changes button colour on click.
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 500);
}

// Plays sounds on demand.
function playSound(name) {
    var audio = new Audio("/assets/sounds/" + name + ".mp3");
    audio.play();
}

// Resets to game functions to default values.
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
