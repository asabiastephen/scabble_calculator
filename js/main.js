//custom code for scrabble score calculator

//to prepare the code for running
document.querySelector(".calculate").addEventListener("click", calculatescore);

//perform the following functions when the run botton is clicked
function calculatescore() {
  var inputWord, score, emptyInput;
  emptyInput = document.querySelector(".input-value").value;
  inputWord = document.querySelector(".input-value").value;

  if (emptyInput === "") {
    var errorMessage = "Please enter values to get this baby up and running";
    document.querySelector(".emptyInput").textContent = errorMessage;
    return; //This will prevent the function from continuing
  }

  var letterV = function (letters, score) {
    this.letters = letters;
    this.score = score;
  };

  var scrabbleScore = function (word) {
    var valueOne = new letterV(/[aeioulnrstAEIOULNRST]/, 1);

    var valueTwo = new letterV(/[dgDG]/, 2);

    var valueThree = new letterV(/[bcmpBCMP]/, 3);

    var valueFour = new letterV(/[fhvwyFHVWY]/, 4);

    var valueFive = new letterV(/[kK]/, 5);

    var valueEight = new letterV(/[jxJX]/, 8);

    var valueTen = new letterV(/[qzQZ]/, 10);

    var wordValue = 0;

    var scoreArray = [
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      valueFive,
      valueEight,
      valueTen
    ];
    for (var element = 0; element < scoreArray.length; element++) {
      for (var i = 0; i < word.length; i++) {
        if (scoreArray[element].letters.test(word.charAt(i))) {
          wordValue = wordValue + scoreArray[element].score;
        }
      }
    }
    return wordValue;
  };

  score = scrabbleScore(inputWord);
  document.querySelector(".input-text").textContent = inputWord;
  document.querySelector(".score").textContent = score;
  document.querySelector(".result").style.display = "block";
}