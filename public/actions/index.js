// 2048 key board actions

exports.onLeftArrow = function () {
  return {
    type: 'LEFT'
  };
};

exports.onRightArrow = function () {
  return {
    type: 'RIGHT',
  };
};

exports.onUpArrow = function () {
  return {
    type: 'UP'
  };
};

exports.onDownArrow = function () {
  return {
    type: 'DOWN'
  };
};

exports.newGame = function () {
  return {
    type: 'NEW_GAME'
  };
};
