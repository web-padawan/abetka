import React, { Component, PropTypes } from 'react';
import Letter from './Letter';

export default class Letters extends Component {
  render() {
    const letters = this.props.letters;

    return (
      <ul>
        {letters.map((letter, index) =>
          <Letter letter={letter} key={index} />
        )}
      </ul>
    );
  }
}
