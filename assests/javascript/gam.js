var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var completter = Math.floor(Math.random() * letters.length);
var compguess = letters[completter];
var winner = document.getElementsByClassName("wins")
var winss = 1;
var loser = document.getElementById("guessesleft");
var you = 10;

console.log(compguess);


document.addEventListener("keypress", (events) => {
    var keycoder = events.key;
console.log(keycoder)
    if (keycoder == compguess){
        alert("you have  " + winss + " wins!");
        winss++;
        
        

    }
    else{
        alert("you have " + you + " guesses left");
        you--;

    }
    
    if(you==0){
        alert("You Lose");
    }

});
