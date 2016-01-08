import types from '../constants/ActionTypes';

const initialState = [];

export default function letters(state = initialState, action) {
  switch (action.type) {
    case types.UPD_LETTERS:
      return (state.indexOf(action.letter) === -1) ? [...state, action.letter].sort() : state;

    default:
      return state;
  }
}
