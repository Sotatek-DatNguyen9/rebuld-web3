/* eslint-disable no-throw-literal */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { queryGraph, queryGetListPool } from 'src/utils/request';
import { PoolItemType } from 'src/utils/types';

const actionType = 'longterm';

export const setDataConfirm = createAction<{}>(`${actionType}setDataConfirm`);

export const addLongTermPools = createAsyncThunk(
  `${actionType}addPools`,
  async () => {
    try {
      const res: any = await queryGraph(queryGetListPool);

      return _.sortBy(
        res.data.poolEntities as PoolItemType[],
        (o) => +o.period,
      );
    } catch (err) {
      return [] as PoolItemType[];
    }
  },
);

export const updateLongTermPools = createAction<PoolItemType[]>(
  `${actionType}updatePools`,
);
