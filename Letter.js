
var Letter = function(char){
    this.char = char;
    this.isGuessed = false;
    this.displayLetter = function(){
        if(this.isGuessed){
            return this.char;
        }else{
            return "_";
        }
    }
    this.charCheck = function(userChar){
        if(userChar === this.char.toLowerCase()){
            this.isGuessed = true;
            return true;
        }else{
            return false;
        }
    }    
}
// var letter = new Letter("a");
// console.log(letter);
module.exports = Letter;