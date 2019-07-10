// global variables
var rpsJumbotron = document.getElementById("rps-jumbotron");
var rpsCardGroup = document.getElementById("rps-card-group");
var winCount = document.getElementById("winCount");
var loseCount = document.getElementById("loseCount");
var tieCount = document.getElementById("tieCount");
var resetBtn = document.getElementById("reset-btn");
var userImg = document.getElementById("user-img");
var computerImg = document.getElementById("computer-img");
// global var count
var wins = 0;
var losses = 0;
var ties = 0;
// This function is for any key press
function gameStart(event){
    if (event.key === 'r' || event.key === 'p' || event.key === 's') {
        rpsJumbotron.style.display = "none";
        rpsCardGroup.style.display = "flex";
        var computerPicked = computerGuess();
        var computerPicture = updatePicture(computerPicked);
        computerImg.src = computerPicture;
        userImg.src = updatePicture(event.key);
        updateScore(computerPicked, event.key);
    } else if (event.key === "q") {
        rpsJumbotron.style.display = "block";
        rpsCardGroup.style.display = "none";
        initialScores();
    } 
};

// function that set the wins, lose and tie value
function initialScores() {
    wins = 0;
    losses = 0;
    ties = 0;

    displayScores();
};

// update the html values of the score with javascript  
function displayScores() {
    winCount.textContent = wins;
    loseCount.textContent = losses;
    tieCount.textContent = ties;
};

// this function will give the computer a random guess from the available options of r, p, s
function computerGuess() {
    var computerOptions = ['r', 'p', 's'];
    var computerChoice = computerOptions[Math.floor(Math.random() * 3)];
    return computerChoice;
};

// receive a guess from either the user or computer and return the correct img
function updatePicture(char) {
     if (char === 'r') {
        return 'assets/imgs/rockimg.jpg'
     } else if (char === 'p') {
        return 'assets/imgs/paperimg.jpg'
     } else if (char === 's') {
        return 'assets/imgs/scissorsimg.jpg'
     }
 };

//  this function will keep score
function updateScore(comp, user) {
    if((user === 'r' && comp === 's') ||
    (user === 'p' && comp === 'r') ||
    (user === 's' && comp === 'p')) {
        wins++;
    } else if (comp === user) {
        ties++;
    } else{
        losses++;
    }
    displayScores();
};


document.onkeyup = gameStart;

// add an event listener for reset button when clicked 
resetBtn.addEventListener("click", initialScores);

//  call this function when the files loads to set the scores 
initialScores();
