import types from '../constants/ActionTypes';

const initialState = [];

export default function letters(state = initialState, action) {
  switch (action.type) {
    case types.UPPD_LETTERS:
      return (state.indexOf(action.letter) === -1) ? [...state, action.letter] : state;

    default:
      return state;
  }
}
