import { createReducer } from '@reduxjs/toolkit';
import { PoolItemType } from 'src/utils/types';
import {
  addLongTermPools,
  setDataConfirm,
  updateLongTermPools,
} from '../actions/longterm.action';

export interface LongtermState {
  pools: PoolItemType[];
  yourReward: number;
  apr: number;
  period: number;
  yourRewardConverted: number;
  amountStake: number;
  amountStakeConverted: number;
  timestart: number;
  stopDay?: number;
  poolId: number;
  totalStaked?: number;
  status: string;
  rewardReceive?: number;
  rewardReceiveConverted?: number;
}

const initialState = {
  pools: [],
  yourReward: 0,
  apr: 0,
  period: 0,
  yourRewardConverted: 0,
  amountStake: 0,
  amountStakeConverted: 0,
  timestart: 0,
  stopDay: 0,
  poolId: 0,
  totalStaked: 0,
  status: '',
  rewardReceive: 0,
  rewardReceiveConverted: 0,
};

const longtermReducer = createReducer<LongtermState>(
  initialState,
  (builder) => {
    builder
      .addCase(setDataConfirm, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(addLongTermPools.fulfilled, (s, { payload }) => {
        s.pools.push(...payload);
      })
      .addCase(updateLongTermPools, (s, { payload }) => {
        s.pools = payload;
      });
  },
);

export default longtermReducer;
