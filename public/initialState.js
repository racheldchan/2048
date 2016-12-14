// CIS 197 Final Project- 2048

var twoDimentionalArray = new Array(4);
for (var i = 0; i < 4; i++) {
  twoDimentionalArray[i] = new Array(4);
}
for (var i = 0; i < twoDimentionalArray.length; i++) {
	for (var j = 0; j < twoDimentionalArray[0].length; j++) {
		twoDimentionalArray[i][j] = 0;
	}
}

var getFirstRandomArbitrary = Math.floor(Math.random() * 16);
var getSecondRandomArbitrary = Math.floor(Math.random() * 16);
while (getFirstRandomArbitrary == getSecondRandomArbitrary) {
  getSecondRandomArbitrary = Math.floor(Math.random() * 16);
}

var firstXPosition = 0;
var firstYPosition = 0;
var secondXPosition = 0;
var secondYPosition = 0;


if (getFirstRandomArbitrary == 0) {
    firstXPosition = 0;
    firstYPosition = 0;
} else if (getFirstRandomArbitrary % 4 == 0) {
	firstXPosition = Math.floor(getFirstRandomArbitrary / 4) - 1;
	firstYPosition = 3;
} else {
	firstXPosition = Math.floor(getFirstRandomArbitrary / 4);
	firstYPosition = (getFirstRandomArbitrary % 4) - 1;
}

if (getSecondRandomArbitrary == 0) {
    secondXPosition = 0;
    secondYPosition = 0;
} else if (getSecondRandomArbitrary % 4 == 0) {
	secondXPosition = Math.floor(getSecondRandomArbitrary / 4) - 1;
	secondYPosition = 3;
} else {
	secondXPosition = Math.floor(getSecondRandomArbitrary / 4);
	secondYPosition = (getSecondRandomArbitrary % 4) - 1;
}

var initialNumbersRandom = Math.random();

if (initialNumbersRandom < 0.5) {
  twoDimentionalArray[firstXPosition][firstYPosition] = 2;
  twoDimentionalArray[secondXPosition][secondYPosition] = 2;
} else {
  twoDimentionalArray[firstXPosition][firstYPosition] = 2;
  twoDimentionalArray[secondXPosition][secondYPosition] = 4;
}

module.exports = exports = {
  cells: twoDimentionalArray,
  score: 0,
  highScore: 0
};


