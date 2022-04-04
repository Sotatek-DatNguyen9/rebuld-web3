import { createReducer } from '@reduxjs/toolkit';
import {
  closeLoading,
  enqueueLoading,
  enqueueAlert,
  closeAlert,
  toggleConnectorDialog,
  closeTutorial,
  enqueueTutorial,
  setErrorConnect,
  closeActionFailed,
  closeActionSuccess,
  enqueueActionFailed,
  enqueueActionSuccess,
  closeActionWaiting,
  enqueueActionWaiting,
} from '../actions/response.action';

interface ConnectorType {
  open: boolean;
  error: boolean;
}
export interface AuthState {
  loading: boolean;
  openAlert: boolean;
  messageAlert: string;
  connector: ConnectorType;
  openTutorial: boolean;
  openActionFailed: boolean;
  openActionSuccess: boolean;
  openActionWaiting: boolean;
  txLink: string;
}

const initialState = {
  loading: false,
  openAlert: false,
  messageAlert: '',
  connector: {
    open: false,
    error: false,
  },
  openTutorial: false,
  openActionFailed: false,
  openActionSuccess: false,
  openActionWaiting: false,
  txLink: '',
};

const authReducer = createReducer<AuthState>(initialState, (builder) => {
  builder
    .addCase(enqueueAlert, (state, action) => {
      state.messageAlert = action.payload;
      state.openAlert = true;
    })
    .addCase(closeAlert, (state) => {
      state.openAlert = false;
    })
    .addCase(closeLoading, (state) => {
      state.loading = false;
    })
    .addCase(enqueueLoading, (state) => {
      state.loading = true;
    })
    .addCase(toggleConnectorDialog, (state, { payload }) => {
      state.connector.open = payload;
    })
    .addCase(enqueueTutorial, (state) => {
      state.openTutorial = true;
    })
    .addCase(closeTutorial, (state) => {
      state.openTutorial = false;
    })
    .addCase(setErrorConnect, (state, { payload }) => {
      state.connector.error = payload;
    })
    .addCase(closeActionFailed, (state) => {
      state.openActionFailed = false;
    })
    .addCase(closeActionSuccess, (state) => {
      state.openActionSuccess = false;
    })
    .addCase(closeActionWaiting, (state) => {
      state.openActionWaiting = false;
    })
    .addCase(enqueueActionFailed, (state) => {
      state.openActionFailed = true;
    })
    .addCase(enqueueActionSuccess, (state, { payload }) => {
      state.openActionSuccess = true;
      state.txLink = payload;
    })
    .addCase(enqueueActionWaiting, (state) => {
      state.openActionWaiting = true;
    });
});

export default authReducer;
