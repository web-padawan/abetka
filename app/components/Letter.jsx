import React, { Component, PropTypes } from 'react';

export default class Letter extends Component {
  render() {
    return (
      <li className="letters__item">
        {this.props.letter}
      </li>
    );
  }
}
