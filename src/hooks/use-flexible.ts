/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import { useAsync, useInterval } from 'react-use';
import { closeActionWaiting, closeLoading } from 'src/store/actions';
import {
  setApr,
  setTotalStaked,
  setYourReward,
  setYourStake,
  setTotalRewardEarned,
} from 'src/store/actions/flexible.action';
import { formatUnits } from 'src/utils/helpers';
import {
  useAppDispatch,
  useAppSelector,
  useAppWeb3,
  useStakingContract,
} from '.';

export const useFlexible = () => {
  const { totalStaked } = useAppSelector((s) => s.flexible);
  const dispatch = useAppDispatch();
  const stakingContract = useStakingContract();
  const { account, provider, unsupportedNetwork } = useAppWeb3();

  const getApr = useCallback(async () => {
    if (!stakingContract || !totalStaked) return;
    const reward_per_block = await stakingContract.rewardPerBlock();
    const block_in_year = Number(process.env.REACT_APP_BLOCK_IN_YEAR);
    const alloc_point = Number(process.env.REACT_APP_ALLOC_POINT);
    const total_alloc_point = Number(process.env.REACT_APP_TOTAL_ALLOC_POINT);
    const reward_in_year =
      (alloc_point / total_alloc_point) *
      formatUnits(reward_per_block) *
      block_in_year;
    const reward_price = Number(process.env.REACT_APP_REWARD_TOKEN_PRICE);
    const accept_price = Number(process.env.REACT_APP_ACCEPT_TOKEN_PRICE);
    const total_value_locked = totalStaked;

    const apr_pool =
      (reward_in_year * reward_price) / (total_value_locked * accept_price);
    dispatch(setApr(apr_pool));
  }, [stakingContract, totalStaked]);

  const getTotalStaked = useCallback(async () => {
    if (!stakingContract) return;

    const total_staked = await stakingContract.totalFlexibleStaked();
    dispatch(setTotalStaked(formatUnits(total_staked)));
  }, [stakingContract]);

  const getYourStake = useCallback(async () => {
    if (stakingContract && account && !unsupportedNetwork) {
      const { amount, totalRewardEarned } = await stakingContract.userInfo(
        account,
      );
      dispatch(setYourStake(formatUnits(amount)));
      dispatch(setTotalRewardEarned(formatUnits(totalRewardEarned)));
    }
  }, [stakingContract, account]);

  const getYourReward = useCallback(async () => {
    if (stakingContract && account && !unsupportedNetwork) {
      const your_reward = await stakingContract.pendingReward(account);
      dispatch(setYourReward(formatUnits(your_reward)));
    }
  }, [account, stakingContract]);

  useEffect(() => {
    if (!account || unsupportedNetwork) {
      dispatch(setYourReward(formatUnits(0)));
      dispatch(setYourStake(formatUnits(0)));
      dispatch(setTotalRewardEarned(formatUnits(0)));
    }
  }, [account, unsupportedNetwork]);

  useInterval(
    getYourReward,
    !unsupportedNetwork && account && stakingContract ? 15000 : null,
  );

  const { value: isInitialized = false } = useAsync(async () => {
    const _isInitialized = await stakingContract?.isInitialized();

    return _isInitialized;
  }, [stakingContract]);

  const reloadData = useCallback(async () => {
    await getTotalStaked();
    await getYourStake();
    await getYourReward();
    dispatch(closeLoading());
    dispatch(closeActionWaiting());
  }, [getTotalStaked, getYourStake, getYourReward, dispatch]);

  const { value: stopReward = false } = useAsync(async () => {
    if (!stakingContract || !provider) return;
    const blockNumber = await provider.getBlockNumber();
    const bonusEndBlock = await stakingContract.bonusEndBlock();
    // const _stopReward = formatUnits(bonusEndBlock) <  blockNumber;
    const _stopReward = bonusEndBlock.lt(blockNumber);

    return _stopReward;
  }, [stakingContract]);

  useEffect(() => {
    if (!stakingContract) return;

    // TODO:
    // when user deposit or withdraw, we should update
    // 1. pool's total staked
    // 2. user's staked
    // 3. user's reward
    // hint: this custom hook can be unmount
  }, [stakingContract, dispatch, reloadData]);

  useEffect(() => {
    getApr();
  }, [getApr]);

  useEffect(() => {
    getTotalStaked();
  }, [getTotalStaked]);

  useEffect(() => {
    getYourStake();
  }, [getYourStake]);

  useEffect(() => {
    getYourReward();
  }, [getYourReward]);

  return {
    getApr,
    getTotalStaked,
    getYourStake,
    getYourReward,
    isInitialized,
    stopReward,
  };
};
