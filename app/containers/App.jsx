import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWord } from '../actions/words.js';
import { updLetters } from '../actions/letters.js';
import AddWord from '../components/AddWord';
import WordList from '../components/WordList';
import Letters from '../components/Letters';

class App extends Component {
  render() {
    const { dispatch, words, letters } = this.props;

    return (
      <div>
        <Letters letters={letters} />
        <AddWord
          onAddClick={text =>
            (text.length ? dispatch(addWord(text)) && dispatch(updLetters(text[0].toUpperCase())) : null)
          } />
        <WordList words={words} />
      </div>
    );
  }
}

export default connect((state) => ({
  words: state.words,
  letters: state.letters
}))(App);
