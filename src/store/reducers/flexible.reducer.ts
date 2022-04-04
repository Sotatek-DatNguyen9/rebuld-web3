import { createReducer } from '@reduxjs/toolkit';
import {
  setYourReward,
  setApr,
  setTotalStaked,
  setYourStake,
  getExchangeRate,
  setFlexibleAmount,
  closeConfirmFlexible,
  openConfirmFlexible,
  setTotalRewardEarned,
} from '../actions/flexible.action';

export interface FlexibleState {
  yourReward: number;
  apr: number;
  estimatedDaily: number;
  estimatedMonthly: number;
  totalStaked: number;
  yourStake: number;
  exchangeRate: number;
  yourStakeConverted: number;
  estimatedMonthlyConverted: number;
  totalStakedConverted: number;
  estimatedDailyConverted: number;
  yourRewardConverted: number;
  amount: number;
  openConfirmDiglog: boolean;
  confirmType: number;
  totalRewardEarned: number;
}

const initialState = {
  yourReward: 0,
  apr: 0,
  estimatedDaily: 0,
  estimatedMonthly: 0,
  totalStaked: 0,
  yourStake: 0,
  exchangeRate: 0,
  yourStakeConverted: 0,
  estimatedMonthlyConverted: 0,
  totalStakedConverted: 0,
  estimatedDailyConverted: 0,
  yourRewardConverted: 0,
  userPlastik: 0,
  amount: 0,
  openConfirmDiglog: false,
  confirmType: 1,
  totalRewardEarned: 0,
};

const flexibleReducer = createReducer<FlexibleState>(
  initialState,
  (builder) => {
    builder
      .addCase(setYourReward, (state, { payload }) => {
        state.yourReward = payload;
        state.yourRewardConverted = payload * state.exchangeRate;
      })
      .addCase(setApr, (state, { payload }) => {
        state.apr = payload;

        const daily = (state.yourStake * state.apr) / 365;
        state.estimatedDaily = daily;
        state.estimatedDailyConverted = daily * state.exchangeRate;

        const monthly = daily * 30;
        state.estimatedMonthly = monthly;
        state.estimatedMonthlyConverted = monthly * state.exchangeRate;
      })
      .addCase(setTotalStaked, (state, { payload }) => {
        state.totalStaked = payload;
        state.totalStakedConverted = payload * state.exchangeRate;
      })
      .addCase(setYourStake, (state, { payload }) => {
        state.yourStake = payload;
        state.yourStakeConverted = payload * state.exchangeRate;

        const daily = (state.yourStake * state.apr) / 365;
        state.estimatedDaily = daily;
        state.estimatedDailyConverted = daily * state.exchangeRate;

        const monthly = daily * 30;
        state.estimatedMonthly = monthly;
        state.estimatedMonthlyConverted = monthly * state.exchangeRate;
      })
      .addCase(getExchangeRate.fulfilled, (state, { payload }) => {
        state.exchangeRate = payload;
      })

      .addCase(setFlexibleAmount, (state, { payload }) => {
        state.amount = payload;
      })
      .addCase(closeConfirmFlexible, (state) => {
        state.openConfirmDiglog = false;
      })
      .addCase(openConfirmFlexible, (state, { payload }) => {
        state.openConfirmDiglog = true;
        state.confirmType = payload;
      })
      .addCase(setTotalRewardEarned, (s, { payload }) => {
        s.totalRewardEarned = payload;
      });
  },
);

export default flexibleReducer;
