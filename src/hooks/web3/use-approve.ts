import { BigNumber, constants, utils } from 'ethers';
import { useEffect } from 'react';
import { useAsyncRetry } from 'react-use';
import { BN } from 'src/utils/helpers';
import { useAppWeb3 } from '../use-app-web3';
import { useTokenContract } from '../use-contract';
import useThrowableAsyncFn from '../use-throwable-async-fn';

const MAX = constants.MaxUint256;

export const useApprove = (spender?: string, amount?: string | number) => {
  const { provider, account } = useAppWeb3();

  const erc20 = useTokenContract();

  const {
    value: allowed = BigNumber.from(0),
    loading: loadingIsApproved,
    retry,
  } = useAsyncRetry(async () => {
    if (!spender || !account || !erc20) return;

    return await erc20.allowance(account, spender);
  }, [spender, account, erc20]);

  useEffect(() => {
    if (!account || !erc20) return;

    // TODO: how we when user approved
    // hint: Approval event with filter

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, erc20, retry]);

  const [{ loading: loadingApprove }, doApprove] = useThrowableAsyncFn(
    async (amountInWei?: string) => {
      if (!provider || !spender || !erc20) return;

      const tx = await erc20.approve(spender, amountInWei ?? MAX);

      // TODO: how we know when a transaction (tx) is confirmed by
      // a validator ??

      return true;
    },
    [provider, erc20],
  );

  const cleanAmount = new BN(amount || '0').dp(9);

  const weiAmount = cleanAmount.isNaN()
    ? '0'
    : utils.parseEther(cleanAmount.toFixed());

  const isApproved = allowed.eq(MAX) || allowed.gte(weiAmount);

  return {
    loading: loadingIsApproved || loadingApprove,
    isApproved,
    doApprove,
  };
};
