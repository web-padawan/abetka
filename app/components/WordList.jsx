import React, { Component, PropTypes } from 'react';
import Word from './Word';

export default class WordList extends Component {
  static propTypes = {
    words: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    }).isRequired).isRequired
  }
  render() {
    const words = this.props.words;

    return (
      <ul>
        {words.map((word, index) =>
          <Word {...word} key={index} />
        )}
      </ul>
    );
  }
}
