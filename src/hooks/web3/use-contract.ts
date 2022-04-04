import {
  ERC20Contract,
  StakingContract,
  generateContract,
  MulticallContract,
  fallbackProvider,
} from 'src/blockchain';
import { useEffect, useState } from 'react';
import { useAppWeb3 } from '../use-app-web3';

export function useContract<T>(abiName: string, addressOrIns?: string | T) {
  const { connector, provider, account } = useAppWeb3();

  const [contract, setContract] = useState<T>();

  useEffect(() => {
    if (!addressOrIns) return;

    if (typeof addressOrIns === 'string') {
      generateContract<T>(
        abiName,
        addressOrIns,
        // @ts-ignore
        provider ?? fallbackProvider,
        account,
      ).then((inst) => {
        setContract(inst);
      });
    } else {
      setContract(addressOrIns);
    }
  }, [abiName, addressOrIns, account, provider, connector]);

  return contract;
}

export type AddressOrERC20 = string | ERC20Contract;
export const useERC20Contract = (address?: AddressOrERC20) =>
  useContract<ERC20Contract>('ERC20', address);

export type AddressOrStakingContract = string | StakingContract;
export const useStakingContract = (address?: AddressOrStakingContract) =>
  useContract<StakingContract>('Staking', address);

export type AddressOrMulticallContract = string | MulticallContract;
export const useMulticallContract = (address?: AddressOrMulticallContract) =>
  useContract<MulticallContract>('Multicall', address);
