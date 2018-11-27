var Word = require("./Word.js");
var inquirer = require("inquirer");
var guessRemaining = 9;

var wordToGuess = ["Elephant","Mouse","Cat","Dog"];

var randWord = new Word(wordToGuess[Math.floor(Math.random()*4)]);
console.log(randWord);
console.log("  "+randWord.showWord())

function wordGuess(guessReamining){

    if(guessReamining>0){
        // if(!(randWord.guessFunction())){    
            inquirer.prompt([
                {
                    type:"input",
                    message: "Guess a letter?",
                    name: "userGuessChar",
                }
            ]).then(function(userChar){
                // console.log(userChar.userGuessChar.toLowerCase());
                var wordArray = [];
                wordArray.push(randWord.showWord(userChar.userGuessChar.toLowerCase()))
                // console.log(randWord.showWord(userChar.userGuessChar.toLowerCase().split("")))
                console.log("word array: "+wordArray);
                guessRemaining--;
                console.log("Guess Remaining: "+guessRemaining)
                wordGuess(guessReamining);
            })
        // };
    }else{
        console.log("Game Over");
    }
}
wordGuess(guessRemaining);
