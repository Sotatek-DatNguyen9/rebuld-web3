import _ from 'lodash';
import { useCallback } from 'react';
import { useAppWeb3 } from 'src/hooks';
import { queryGraph } from '.';

export const queryExampleEntities = `{
    exampleEntities(first: 5) {
      id
      count
      previousOwner
      newOwner
    }
  }`;

export const queryGetListPool = `
{
  poolEntities {
    id
    poolId
    minDeposit
    maxDeposit
    limitStaking
    currentStaking
    apr
    period
    stopDay
    status
  }
}


`;

export const queryPoolId = `
{
  poolEntities {
    poolId
    period
  }
}`;

enum OrderBy {
  id = 'id',
  eventName = 'eventName',
  amount = 'amount',
  transactionTime = 'transactionTime',
}

enum orderDirection {
  desc = 'desc',
  asc = 'asc',
}

export const useQueryHistory = (
  orderBy?: OrderBy,
  orderDirection?: orderDirection,
) => {
  const { account } = useAppWeb3();
  const orderByDefault = orderBy ? orderBy : 'transactionTime';
  const directionDefault = orderDirection ? orderDirection : 'desc';

  const queryStake =
    Boolean(account) &&
    `{
    stakingHistoryEntities(where: {user: "${account}"}, orderBy: ${orderByDefault}, orderDirection: ${directionDefault}) {
      id
      user
      eventName
      poolId
      amount
      transactionTime
    }
  }`;

  const queryUnstake =
    Boolean(account) &&
    `{
      withdrawHistoryEntities(where: {user: "${account}"}, orderBy: ${orderByDefault}, orderDirection: ${directionDefault}) {
      id
      user
      eventName
      poolId
      amount
      transactionTime
    }
  }`;

  const queryClaim =
    Boolean(account) &&
    `{
      claimHistoryEntities(where: {user: "${account}"}, orderBy: ${orderByDefault}, orderDirection: ${directionDefault}) {
      id
      user
      eventName
      poolId
      pendingReward
      transactionTime
    }
  }`;

  const fetchData = useCallback(async () => {
    if (queryStake && queryUnstake && queryClaim) {
      const stakeList = _.get(
        await queryGraph(queryStake),
        'data.stakingHistoryEntities',
      );

      const unstakeList = _.get(
        await queryGraph(queryUnstake),
        'data.withdrawHistoryEntities',
      );

      const claimList = _.get(
        await queryGraph(queryClaim),
        'data.claimHistoryEntities',
      );

      const poolList = _.get(
        await queryGraph(queryPoolId),
        'data.poolEntities',
      );

      const mergeData1 = stakeList ? stakeList : [];
      const mergeData2 = unstakeList
        ? _.concat(mergeData1, unstakeList)
        : mergeData1;
      const mergeData3 = claimList
        ? _.concat(
            mergeData2,
            _.map(claimList, (i) => ({ ...i, amount: i.pendingReward })),
          )
        : mergeData2;

      const mergeData4 = poolList
        ? _.map(mergeData3, (i) => ({
            ...i,
            period: _.get(
              _.find(poolList, (pool) => pool.poolId === i.poolId),
              'period',
            ),
          }))
        : mergeData3;

      const mergeDataSorted = _.sortBy(mergeData4, [
        'transactionTime',
      ]).reverse();

      return mergeDataSorted;
    }
  }, [queryStake, queryClaim, queryUnstake]);

  return fetchData;
};
