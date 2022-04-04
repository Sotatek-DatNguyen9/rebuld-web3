import { BytesLike as Arrayish, BigNumber, BigNumberish } from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type MulticallContract = EthersContractContextV5<
  Multicall,
  MulticallMethodNames,
  MulticallEventsContext,
  MulticallEvents
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type MulticallEvents = undefined;
export interface MulticallEventsContext {}
export type MulticallMethodNames =
  | 'aggregate'
  | 'getBlockHash'
  | 'getCurrentBlockCoinbase'
  | 'getCurrentBlockDifficulty'
  | 'getCurrentBlockGasLimit'
  | 'getCurrentBlockTimestamp'
  | 'getEthBalance'
  | 'getLastBlockHash';
export interface AggregateRequest {
  target: string;
  callData: Arrayish;
}
export interface AggregateResponse {
  blockNumber: BigNumber;
  0: BigNumber;
  returnData: string[];
  1: string[];
  length: 2;
}
export interface Multicall {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param calls Type: tuple[], Indexed: false
   */
  aggregate(
    calls: AggregateRequest[],
    overrides?: ContractCallOverrides,
  ): Promise<AggregateResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param blockNumber Type: uint256, Indexed: false
   */
  getBlockHash(
    blockNumber: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockCoinbase(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockDifficulty(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockGasLimit(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getCurrentBlockTimestamp(
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param addr Type: address, Indexed: false
   */
  getEthBalance(
    addr: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getLastBlockHash(overrides?: ContractCallOverrides): Promise<string>;
}
