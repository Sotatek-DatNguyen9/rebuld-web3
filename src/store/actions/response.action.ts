/* eslint-disable no-throw-literal */
import { createAction } from '@reduxjs/toolkit';

export const closeLoading = createAction<void>('closeLoading');
export const enqueueLoading = createAction<void>('enqueueLoading');
export const enqueueAlert = createAction<string>('enqueueAlert');
export const closeAlert = createAction<void>('closeAlert');
export const toggleConnectorDialog = createAction<boolean>('openConnector');
export const enqueueTutorial = createAction<void>('enqueueTutorial');
export const closeTutorial = createAction<void>('closeTutorial');
export const setErrorConnect = createAction<boolean>('setErrorConnect');

export const enqueueActionFailed = createAction<void>('enqueueActionFailed');
export const closeActionFailed = createAction<void>('closeActionFailed');

export const enqueueActionSuccess = createAction<string>(
  'enqueueActionSuccess',
);
export const closeActionSuccess = createAction<void>('closeActionSuccess');

export const enqueueActionWaiting = createAction<void>('enqueueActionWaiting');
export const closeActionWaiting = createAction<void>('closeActionWaiting');
