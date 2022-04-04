import { createAction } from '@reduxjs/toolkit';

export const closeMessagePopup = createAction<void>('closeMessagePopup');
export const showMessagePopup = createAction<{}>('showMessagePopup');
