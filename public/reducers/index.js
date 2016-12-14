// CIS 197 Final Project- 2048

var _ = require('lodash');
var initialState = require('../initialState.js');
var combinedLeftTile = 0;
var combinedRightTile = 0;
var combinedUpTile = 0;
var combinedDownTile = 0;

var mainReducer = function (state, action) {
  switch (action.type) {

  case 'LEFT':
    var leftCells = updateCellsLeft(state);
    var leftScore = updateScore(state);
    return _.assign({}, state, {cells: leftCells, score: leftScore});

  case 'RIGHT':
    var rightCells = updateCellsRight(state);
    var rightScore = updateScore(state);
    return _.assign({}, state, {cells: rightCells, score: rightScore});

  case 'UP':
    var upCells = updateCellsUp(state);
    var upScore = updateScore(state);
    return _.assign({}, state, {cells: upCells, score: upScore}); 
  
  case 'DOWN':
    var downCells = updateCellsDown(state);
    var downScore = updateScore(state);
    return _.assign({}, state, {cells: downCells, score: downScore}); 

  case 'NEW_GAME':
    var newCells = newGame();
    return _.assign({}, state, {cells: newCells}); 
  }
  return state;
};

function updateCellsDown(state) {
  //console.log(db.getAllScores());
  var twoDimentionalArray = new Array(4);
  for (var i = 0; i < 4; i++) {
    twoDimentionalArray[i] = new Array(4);
  }

  var shouldCreateRandomVariable = 0;
  // push numbers down first
  for (var j = 0; j < 4; j++) {
    var columnCounter = 3;
    for (var k = state.cells.length - 1; k >= 0; k--) {
      if (state.cells[k][j] != 0) {
        if (columnCounter != k) {
          shouldCreateRandomVariable = 1;
        }
        twoDimentionalArray[columnCounter][j] = state.cells[k][j];
        columnCounter = columnCounter - 1;

      }
    }
    while (columnCounter >= 0) {
      twoDimentionalArray[columnCounter][j] = 0;
      columnCounter = columnCounter - 1;
    }
  }
  
  for (var a = 0; a < 4; a++) {
    for (var b = twoDimentionalArray.length - 1; b >= 1; b--) {
      if (twoDimentionalArray[b][a] == twoDimentionalArray[b - 1][a] && twoDimentionalArray[b][a] != 0) {
        shouldCreateRandomVariable = 1;
        twoDimentionalArray[b][a] = twoDimentionalArray[b][a] * 2;
        combinedDownTile = twoDimentionalArray[b][a];
        twoDimentionalArray[b - 1][a] = 0;
      }
    }
  }

  // remove zeros again
  for (var d = 0; d < 4; d++) {
    var columnCounter2 = 3;
    for (var c = twoDimentionalArray.length - 1; c >= 0; c--) {
      if (twoDimentionalArray[c][d] != 0) {
        twoDimentionalArray[columnCounter2][d] = twoDimentionalArray[c][d];
        columnCounter2 = columnCounter2 - 1;
      }
    }
    while (columnCounter2 >= 0) {
      twoDimentionalArray[columnCounter2][d] = 0;
      columnCounter2 = columnCounter2 - 1;
    }
  }

  if (shouldCreateRandomVariable == 1) {
    twoDimentionalArray = generateRandomNumber(twoDimentionalArray);
  }
  
  return twoDimentionalArray; 
}

function updateCellsUp(state) {
    //var newCells = new Array(state.cells.length);
  var twoDimentionalArray = new Array(4);
  for (var i = 0; i < 4; i++) {
    twoDimentionalArray[i] = new Array(4);
  }

  var shouldCreateRandomVariable = 0;
  // push numbers up first
  for (var j = 0; j < 4; j++) {
    var columnCounter = 0;
    for (var k = 0; k < state.cells.length; k++) {
      if (state.cells[k][j] != 0) {
        if (columnCounter != k) {
          shouldCreateRandomVariable = 1;
        }
        twoDimentionalArray[columnCounter][j] = state.cells[k][j];
        columnCounter = columnCounter + 1;
      }
    }
    while (columnCounter <= 3) {
      twoDimentionalArray[columnCounter][j] = 0;
      columnCounter = columnCounter + 1;
    }
  }
  
  // combine numbers
  for (var a = 0; a < 4; a++) {
    for (var b = 0; b < twoDimentionalArray.length - 1; b++) {
      //console.log("i: " + i + " j: " + j + " : " + twoDimentionalArray[i][j]);
      if (twoDimentionalArray[b][a] == twoDimentionalArray[b + 1][a] && twoDimentionalArray[b][a] != 0) {
        shouldCreateRandomVariable = 1;
        twoDimentionalArray[b][a] = twoDimentionalArray[b][a] * 2;
        combinedUpTile = twoDimentionalArray[b][a];
        twoDimentionalArray[b + 1][a] = 0;
      }
    }
  }

  // remove zeros again
  for (var d = 0; d < 4; d++) {
    var columnCounter2 = 0;
    for (var c = 0; c < twoDimentionalArray.length; c++) {
      if (twoDimentionalArray[c][d] != 0) {
        twoDimentionalArray[columnCounter2][d] = twoDimentionalArray[c][d];
        columnCounter2 = columnCounter2 + 1;
      }
    }
    while (columnCounter2 <= 3) {
      twoDimentionalArray[columnCounter2][d] = 0;
      columnCounter2 = columnCounter2 + 1;
    }
  }

  if (shouldCreateRandomVariable == 1) {
    twoDimentionalArray = generateRandomNumber(twoDimentionalArray);
  }
  
  return twoDimentionalArray; 
}

function updateCellsLeft(state) {
      //var newCells = new Array(state.cells.length);
  var twoDimentionalArray = new Array(4);
  for (var i = 0; i < 4; i++) {
    twoDimentionalArray[i] = new Array(4);
  }

  var shouldCreateRandomVariable = 0;
  // push numbers up first
  for (var j = 0; j < 4; j++) {
    var columnCounter = 0;
    for (var k = 0; k < state.cells.length; k++) {
      if (state.cells[j][k] != 0) {
        if (columnCounter != k) {
          shouldCreateRandomVariable = 1;
        }
        twoDimentionalArray[j][columnCounter] = state.cells[j][k];
        columnCounter = columnCounter + 1;
      }
    }
    while (columnCounter <= 3) {
      twoDimentionalArray[j][columnCounter] = 0;
      columnCounter = columnCounter + 1;
    }
  }
  
  // combine numbers
  for (var a = 0; a < 4; a++) {
    for (var b = 0; b < twoDimentionalArray.length - 1; b++) {
      //console.log("i: " + i + " j: " + j + " : " + twoDimentionalArray[i][j]);
      if (twoDimentionalArray[a][b] == twoDimentionalArray[a][b + 1] && twoDimentionalArray[a][b] != 0) {
        shouldCreateRandomVariable = 1;
        twoDimentionalArray[a][b] = twoDimentionalArray[a][b] * 2;
        combinedLeftTile = twoDimentionalArray[b][a];
        twoDimentionalArray[a][b + 1] = 0;
      }
    }
  }

  // remove zeros again
  for (var c = 0; c < 4; c++) {
    var columnCounter2 = 0;
    for (var d = 0; d < twoDimentionalArray.length; d++) {
      if (twoDimentionalArray[c][d] != 0) {
        twoDimentionalArray[c][columnCounter2] = twoDimentionalArray[c][d];
        columnCounter2 = columnCounter2 + 1;
      }
    }
    while (columnCounter2 <= 3) {
      twoDimentionalArray[c][columnCounter2] = 0;
      columnCounter2 = columnCounter2 + 1;
    }
  }

  if (shouldCreateRandomVariable == 1) {
    twoDimentionalArray = generateRandomNumber(twoDimentionalArray);
  }
  
  return twoDimentionalArray;  
}

function updateCellsRight(state) {
    //var newCells = new Array(state.cells.length);
  var twoDimentionalArray = new Array(4);
  for (var i = 0; i < 4; i++) {
    twoDimentionalArray[i] = new Array(4);
  }

  var shouldCreateRandomVariable = 0;
  // push numbers down first
  for (var j = 0; j < 4; j++) {
    var columnCounter = 3;
    for (var k = state.cells.length - 1; k >= 0; k--) {
      if (state.cells[j][k] != 0) {
        if (columnCounter != k) {
          shouldCreateRandomVariable = 1;
        }
        twoDimentionalArray[j][columnCounter] = state.cells[j][k];
        columnCounter = columnCounter - 1;
      }
    }
    while (columnCounter >= 0) {
      twoDimentionalArray[j][columnCounter] = 0;
      columnCounter = columnCounter - 1;
    }
  }
  
  
  for (var a = 0; a < 4; a++) {
    for (var b = twoDimentionalArray.length - 1; b >= 1; b--) {
      if (twoDimentionalArray[a][b] == twoDimentionalArray[a][b - 1] && twoDimentionalArray[a][b] != 0) {
        shouldCreateRandomVariable = 1;
        twoDimentionalArray[a][b] = twoDimentionalArray[a][b] * 2;
        combinedRightTile = twoDimentionalArray[b][a];
        twoDimentionalArray[a][b - 1] = 0;
      }
    }
  }

  // remove zeros again
  for (var c = 0; c < 4; c++) {
    var columnCounter2 = 3;
    for (var d = twoDimentionalArray.length - 1; d >= 0; d--) {
      if (twoDimentionalArray[c][d] != 0) {
        twoDimentionalArray[c][columnCounter2] = twoDimentionalArray[c][d];
        columnCounter2 = columnCounter2 - 1;
      }
    }
    while (columnCounter2 >= 0) {
      twoDimentionalArray[c][columnCounter2] = 0;
      columnCounter2 = columnCounter2 - 1;
    }
  }

  if (shouldCreateRandomVariable == 1) {
    twoDimentionalArray = generateRandomNumber(twoDimentionalArray);
  }
  
  return twoDimentionalArray; 
}

function newGame() {
  var twoDimentionalArray = new Array(4);
  for (var b = 0; b < 4; b++) {
    twoDimentionalArray[b] = new Array(4);
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

  return twoDimentionalArray;
}

function generateRandomNumber(array) {
  var getFirstRandomArbitrary = Math.floor(Math.random() * 16);
  var firstXPosition = 0;
  var firstYPosition = 0;
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

  while (array[firstXPosition][firstYPosition] != 0) {
    getFirstRandomArbitrary = Math.floor(Math.random() * 16);
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
  }

  var getNewNumber = Math.random();
  if (getNewNumber < 0.1) {
    array[firstXPosition][firstYPosition] = 4;
  } else {
    array[firstXPosition][firstYPosition] = 2;
  }
  return array;
}

function updateScore(state) {
  var newScore = state.score + combinedRightTile + combinedLeftTile + combinedUpTile + combinedDownTile;
  combinedRightTile = 0;
  combinedLeftTile = 0;
  combinedUpTile = 0;
  combinedDownTile = 0;
  return newScore;
}


module.exports = exports = {
  mainReducer: mainReducer,
  updateCellsDown: updateCellsDown,
  updateCellsUp: updateCellsUp,
  updateCellsLeft: updateCellsLeft,
  updateCellsRight: updateCellsRight,
  newGame: newGame
};
