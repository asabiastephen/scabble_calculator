//custom code for my scrabble

document.querySelector('.calculate').addEventListener('click', calculatescore);

function calculatescore() {
    var inputWord, score;
    inputWord = document.querySelector('.input-value').nodeValue;

    var letterV = function (letter, score) {
        this.letter = letter;
        this.score = score;
    }

    var scrabbleScore = function (word) {
        var scrabbleScore = function (word) {

            var valueOne = new letterV(/[aeioulnrstAEIOULNRST]/, 1);

            var valueTwo = new letterV(/[dgDG]/, 2);

            var valueThree = new letterV(/[bcmpBCMP]/, 3);

            var valueFour = new letterV(/[fhvwyFHVWY]/, 4);

            var valueFive = new letterV(/[kK]/, 5);

            var valueEight = new letterV(/[jxJX]/, 8);

            var valueTen = new letterV(/[qzQZ]/, 10);

            var wordValue = 0;
            scrabbleArray = [valueOne, valueTwo, valueThree, valueFour, valueFive, valueEight, valueTen];

            for (var element = 0; element < scrabbleArray.length; element++) {
                for (var i = 0; i < word.lenght; i++) {
                    if (scrabbleArray[element].letters.test(word.charAt(i))) {
                        wordValue = wordValue + scrabbleArray[element].score;
                    }
                }
            }
            return wordValue
        };
    }