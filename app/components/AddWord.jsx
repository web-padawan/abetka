import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

export default class AddWord extends Component {
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="addWord">
        <input className="addWord__text" type='text' ref='input' />
        <button onClick={e => this._onClick(e)} className="addWord__submit">
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
