var Letter = require("./Letter.js");


var Word = function(word){
    this.newLetters = word.split("");
    // console.log(this.newLetters = word.split(""));
    this.showWord = function(userAns){
        var guessWord = [];
        // console.log(guessWord);
        for (let i = 0; i < this.newLetters.length; i++) {
            const element = new Letter(this.newLetters[i]);
            // console.log(element.displayLetter());
            element.charCheck(userAns)
            // console.log(element.charCheck(userAns));
            guessWord.push(element.displayLetter());
        }
        console.log("Guessed word: " + guessWord);
        guessWord.join(" ");
        console.log(guessWord.join(" "));
    }
    this.guessFunction = function(userGuess){
        this.newLetters.forEach(element => {
            // console.log(element);
            let hasMatch = false;
            if(element === userGuess){
                hasMatch = true;
            }
            // console.log(hasMatch);
            return hasMatch
        });
    }
};

// word = new Word("Vinit");
// userAns = process.argv[2];
// console.log(word.showWord(userAns));
// console.log(word.guessFunction(userAns));
// console.log(word);

module.exports = Word;