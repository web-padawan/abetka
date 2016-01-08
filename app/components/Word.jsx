import React, { Component, PropTypes } from 'react';

export default class Word extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  render() {
    return (
      <li className="words__item">
        {this.props.text}
      </li>
    );
  }
}
