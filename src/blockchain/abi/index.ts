import { ethers } from 'ethers';
import type { ERC20Contract } from './ERC20/ERC20';
import type { StakingContract } from './Staking/Staking';
import type { MulticallContract } from './Multicall/Multicall';

export type { ERC20Contract };
export type { StakingContract };
export type { MulticallContract };

export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export async function generateContract<T = any>(
  abiName: string,
  address: string,
  provider?: ethers.providers.Web3Provider,
  signer?: string,
) {
  if (!address || !provider) return undefined;

  const abi = await import(`./${abiName}/${abiName}.json`).then(
    (mod) => mod.default,
  );

  if (!abi) throw new Error('Not found abi with name: ' + abiName);

  const contract = new ethers.Contract(
    address,
    abi,
    signer ? provider?.getSigner(signer) : provider,
  ) as unknown as T;

  return contract;
}
