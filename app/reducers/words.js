import * as types from '../actions/words';

const initialState = [];

export default function words(state = initialState, action) {
  switch (action.type) {
    case types.ADD_WORD:
      return [...state, action.word];

    default:
      return state;
  }
}
