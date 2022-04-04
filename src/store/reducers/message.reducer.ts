import { createReducer } from '@reduxjs/toolkit';
import { closeMessagePopup, showMessagePopup } from '../actions/message.action';

export interface MessageStake {
  openPopup: boolean;
  title: string;
  message: string;
  isICon: boolean;
}

const initialState = {
  openPopup: false,
  title: '',
  message: '',
  isICon: false,
};

const messageReducer = createReducer<MessageStake>(initialState, (builder) => {
  builder
    .addCase(closeMessagePopup, (state) => {
      state.openPopup = false;
    })
    .addCase(showMessagePopup, (state, action) => {
      Object.assign(state, action.payload);
    });
});

export default messageReducer;
