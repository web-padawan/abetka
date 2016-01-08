import { combineReducers } from 'redux';
import words from './words';
import letters from './letters';

const rootReducer = combineReducers({
  words, letters
});

export default rootReducer;
