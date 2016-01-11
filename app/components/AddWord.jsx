import React, { Component, PropTypes } from 'react';

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
    this.props.onAddClick(this.refs.input.value.trim());
    this.refs.input.value = '';
  }
}
