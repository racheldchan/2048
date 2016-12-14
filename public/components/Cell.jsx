//  CIS 197 Final Project- 2048

var React = require('react');
var PropTypes = React.PropTypes;
var actions = require('../actions/index.js');

var Cell = React.createClass({
  propTypes: {
    store: PropTypes.object.isRequired,
    alive: PropTypes.number.isRequired,
    x_index: PropTypes.number.isRequired,
    y_index: PropTypes.number.isRequired,
  },

  getDefaultProps: function () {
    return {
      alive: 0,
      key: 0,
      x_index: 0,
      y_index: 0,
    };
  },

  render: function () {
    var aliveVariable = this.props.alive;
    var defaultValue = this.props.value;

    if (aliveVariable == 2)
      return (
        <span className="cell-component cell two">{aliveVariable}</span>
      );
    else if (aliveVariable == 4)
      return (
        <span className="cell-component cell four">{aliveVariable}</span>
      );
    else if (aliveVariable == 8)
      return (
        <span className="cell-component cell eight">{aliveVariable}</span>
      );
    else if (aliveVariable == 16)
      return (
        <span className="cell-component cell sixteen">{aliveVariable}</span>
      );
    else if (aliveVariable == 32)
      return (
        <span className="cell-component cell three_two">{aliveVariable}</span>
      );
    else if (aliveVariable == 64)
      return (
        <span className="cell-component cell sixtyfour">{aliveVariable}</span>
      );
    else if (aliveVariable == 128)
      return (
        <span className="cell-component cell one_two_eight">{aliveVariable}</span>
      );
    else if (aliveVariable == 256)
      return (
        <span className="cell-component cell two_five_six">{aliveVariable}</span>
      );
    else if (aliveVariable == 512)
      return (
        <span className="cell-component cell five_one_two">{aliveVariable}</span>
      );
    else if (aliveVariable == 1024)
      return (
        <span className="cell-component cell one_zero_two_four">{aliveVariable}</span>
      );
    else if (aliveVariable == 2048)
      return (
        <span className="cell-component cell two_zero_four_eight">{aliveVariable}</span>
      );
    else if (aliveVariable == 4096)
      return (
        <span className="cell-component cell four_zero_nine_six">{aliveVariable}</span>
      );
    else {
      return (
        <span className="cell-component cell"></span>
      );
    }
  }
});

module.exports = Cell;
