import {
  useMulticallContract as _useMulticallContract,
  useStakingContract as _useStakingContract,
  useERC20Contract as _useERC20Contract,
} from 'src/hooks/web3/use-contract';

export const STAKING_ADDRESS = process.env.REACT_APP_SC_ADDRESS_MAIN!;

export const useStakingContract = () => _useStakingContract(STAKING_ADDRESS);

export const ERC20_PLASTIK_ADDRESS = process.env.REACT_APP_SC_ADDRESS_TOKEN!;
export const useTokenContract = () => _useERC20Contract(ERC20_PLASTIK_ADDRESS);

export const MULTICALL_ADDRESS = process.env.REACT_APP_SC_ADDRESS_MULTICALL!;
export const useMulticallContract = () =>
  _useMulticallContract(MULTICALL_ADDRESS);
