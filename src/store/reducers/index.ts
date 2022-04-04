import { combineReducers } from 'redux';
import response from './response.reducer';
import stakePopup from './stake-popup.reducer';
import message from './message.reducer';
import flexible from './flexible.reducer';
import longterm from './longterm.reducer';

const rootReducer = combineReducers({
  response,
  stakePopup,
  message,
  flexible,
  longterm,
});

export default rootReducer;
