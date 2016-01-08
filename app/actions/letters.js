import types from '../constants/ActionTypes';

export function updLetters(letter) {
  return {
    type: types.UPD_LETTERS,
    letter: letter
  };
};
