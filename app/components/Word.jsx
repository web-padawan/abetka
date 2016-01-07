import React, { Component, PropTypes } from 'react';

export default class Word extends Component {
  render() {
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}

Word.propTypes = {
  text: PropTypes.string.isRequired,
};
