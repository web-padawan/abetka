import React, { Component, PropTypes } from 'react';

export default class Letter extends Component {
  render() {
    return (
      <li>
        {this.props.letter}
      </li>
    );
  }
}
