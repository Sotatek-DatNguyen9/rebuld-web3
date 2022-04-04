/* eslint-disable no-throw-literal */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeRate } from 'src/blockchain';

const actionType = 'flexible';

export const setYourReward = createAction<number>(`${actionType}setYourReward`);
export const setYourStake = createAction<number>(`${actionType}setYourStake`);
export const setTotalStaked = createAction<number>(
  `${actionType}setTotalStaked`,
);
export const setApr = createAction<number>(`${actionType}setApr`);

export const getExchangeRate = createAsyncThunk(
  `${actionType}getExchangeRate`,
  async () => {
    try {
      const rate = await exchangeRate();
      return rate;
    } catch (err) {
      return 0;
    }
  },
);

export const setFlexibleAmount = createAction<number>(
  `${actionType}setFlexibleAmount`,
);

export const closeConfirmFlexible = createAction<void>('closeConfirmFlexible');
export const openConfirmFlexible = createAction<number>('openConfirmFlexible');

export const setTotalRewardEarned =
  createAction<number>(`setTotalRewardEarned`);
