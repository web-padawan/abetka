import types from '../constants/ActionTypes';
import uuid from 'node-uuid';

export function addWord(word) {
  return {
    type: types.ADD_WORD,
    word: {
      id: uuid.v4(),
      text: word
    }
  };
};
