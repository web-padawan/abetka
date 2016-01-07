import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from '../actions/words.js';
import AddWord from '../components/AddWord';
import WordList from '../components/WordList';

class App extends Component {
  render() {
    const { dispatch, words } = this.props;

    return (
      <div>
        <AddWord
          onAddClick={text =>
            (text.length ? dispatch(addWord(text)) : null)
          } />
        <WordList words={words} />
      </div>
    );
  }
}

export default connect((state) => ({
  words: state.words
}))(App);
