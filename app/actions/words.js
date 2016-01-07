import uuid from 'node-uuid';

export const ADD_WORD = 'ADD_WORD';
export function addWord(word) {
  return {
    type: ADD_WORD,
    word: {
      id: uuid.v4(),
      text: word
    }
  };
};
