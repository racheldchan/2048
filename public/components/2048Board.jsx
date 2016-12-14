// CIS 197 Final Project- 2048

var _ = require('lodash');
var React = require('react');
var PropTypes = React.PropTypes;
var Cell = require('./Cell.jsx');
var actions = require('../actions/index.js');
var initialState = require('../initialState.js');


var BoardGame = React.createClass({
  propTypes: {
    store: React.PropTypes.object.isRequired
  },
  
  componentDidMount: function () {
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
    window.addEventListener('keydown', this.shiftCells);
  },

  getInitialState: function () {
    return initialState;
  },

  newGame: function () {
    this.props.store.dispatch(actions.newGame());
  },

  shiftCells: function () {
    if (event.keyCode == 37) {
      // left arrow
      console.log('left');
      this.props.store.dispatch(actions.onLeftArrow());
    } else if (event.keyCode == 39) {
      // right arrow
      console.log('right');
      this.props.store.dispatch(actions.onRightArrow());
    } else if (event.keyCode == 38 ) {
      // up arrow
      console.log('up');
      this.props.store.dispatch(actions.onUpArrow());
    } else if (event.keyCode == 40) {
      // down arrow
      console.log('down');
      this.props.store.dispatch(actions.onDownArrow());
    }

  },

  render: function () {
    var storeVariable = this.props.store;
    
    var cellElements = function () {
      var cellArray = new Array(16);
      for (var i = 0; i < this.state.cells.length; i++) {
        for (var j = 0; j < this.state.cells[0].length; j++) {
          cellArray.push(<Cell x_index={i} y_index={j} alive={this.state.cells[i][j]} key={i * 4 + j} store={storeVariable} />);
        }
      }
      return cellArray;
    }.bind(this);
    
    return (
      <div className='game-component'>
      <button onClick={this.newGame} className="new_game_button" >New Game</button>
      <div className='board-component'>{cellElements()}</div>
      <div className='your-score'>Your Score: {this.state.score}</div>
      </div>
    );
  }
});

module.exports = BoardGame;
