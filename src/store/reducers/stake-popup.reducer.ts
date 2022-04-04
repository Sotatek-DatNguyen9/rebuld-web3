import { createReducer } from '@reduxjs/toolkit';
import {
  closeStakeConfirm,
  closeStakeConfirmLongTerm,
  closeStakeFlexible,
  closeStakeLongTerm,
  showClaimConfirm,
  showStakeConfirmFlexible,
  showStakeConfirmLongTerm,
  showStakeFlexible,
  showStakeLongTerm,
  showUnStakeConfirm,
  showUnStakeFlexible,
} from '../actions';

export interface StakePopupState {
  typeFlexibleStake: number;
  openLongTermStake: boolean;
  typeConfirmStake: number;
  openStakeLongTerm: boolean;
}

const initialState = {
  typeFlexibleStake: 0,
  openLongTermStake: false,
  typeConfirmStake: 0,
  openStakeLongTerm: false,
};

const stakePopupReducer = createReducer<StakePopupState>(
  initialState,
  (builder) => {
    builder
      .addCase(closeStakeFlexible, (state) => {
        state.typeFlexibleStake = 0;
      })
      .addCase(showStakeFlexible, (state) => {
        state.typeFlexibleStake = 1;
      })
      .addCase(showUnStakeFlexible, (state) => {
        state.typeFlexibleStake = 2;
      })
      .addCase(closeStakeConfirm, (state) => {
        state.typeConfirmStake = 0;
      })
      .addCase(showStakeConfirmFlexible, (state) => {
        state.typeConfirmStake = 1;
      })
      .addCase(showUnStakeConfirm, (state) => {
        state.typeConfirmStake = 2;
      })
      .addCase(showStakeConfirmLongTerm, (state) => {
        state.openLongTermStake = true;
      })
      .addCase(closeStakeConfirmLongTerm, (state) => {
        state.openLongTermStake = false;
      })
      .addCase(showClaimConfirm, (state) => {
        state.typeConfirmStake = 4;
      })
      .addCase(closeStakeLongTerm, (state) => {
        state.openLongTermStake = false;
      })
      .addCase(showStakeLongTerm, (state) => {
        state.openLongTermStake = true;
      });
  },
);

export default stakePopupReducer;
