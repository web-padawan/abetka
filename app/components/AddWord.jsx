import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class AddWord extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={e => this._onClick(e)}>
          Add
        </button>
      </div>
    );
  }
  _onClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

AddWord.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
