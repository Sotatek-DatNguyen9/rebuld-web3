import { createAction } from '@reduxjs/toolkit';

export const closeStakeFlexible = createAction<void>('closeStakeFlexible');
export const showStakeFlexible = createAction<void>('showStakeFlexible');
export const showUnStakeFlexible = createAction<void>('showUnStakeFlexible');
export const closeStakeLongTerm = createAction<void>('closeStakeLongTerm');
export const showStakeLongTerm = createAction<void>('showStakeLongTerm');
export const closeStakeConfirm = createAction<void>('closeStakeConfirm');
export const showStakeConfirmFlexible = createAction<void>(
  'showStakeConfirmFlexible',
);
export const showUnStakeConfirm = createAction<void>('showUnStakeConfirm');
export const showStakeConfirmLongTerm = createAction<void>(
  'showStakeConfirmLongTerm',
);
export const closeStakeConfirmLongTerm = createAction<void>(
  'closeStakeConfirmLongTerm',
);

export const showClaimConfirm = createAction<void>('showClaimConfirm');
