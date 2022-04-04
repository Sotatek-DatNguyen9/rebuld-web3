import { ContractTransaction, BigNumber, BigNumberish } from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type StakingContract = EthersContractContextV5<
  Staking,
  StakingMethodNames,
  StakingEventsContext,
  StakingEvents
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
export type StakingEvents =
  | 'AddAdmin'
  | 'AddPool'
  | 'AdminTokenRecovery'
  | 'ChangeToken'
  | 'ClaimLongTerm'
  | 'ClosePool'
  | 'Deposit'
  | 'DepositLongTerm'
  | 'EmergencyWithdraw'
  | 'NewPoolLimit'
  | 'NewRewardPerBlock'
  | 'NewStartAndEndBlocks'
  | 'OwnershipTransferred'
  | 'RemoveAdmin'
  | 'RewardsStop'
  | 'UpdatePool'
  | 'Withdraw'
  | 'WithdrawLongTerm';
export interface StakingEventsContext {
  AddAdmin(...parameters: any): EventFilter;
  AddPool(...parameters: any): EventFilter;
  AdminTokenRecovery(...parameters: any): EventFilter;
  ChangeToken(...parameters: any): EventFilter;
  ClaimLongTerm(...parameters: any): EventFilter;
  ClosePool(...parameters: any): EventFilter;
  Deposit(...parameters: any): EventFilter;
  DepositLongTerm(...parameters: any): EventFilter;
  EmergencyWithdraw(...parameters: any): EventFilter;
  NewPoolLimit(...parameters: any): EventFilter;
  NewRewardPerBlock(...parameters: any): EventFilter;
  NewStartAndEndBlocks(...parameters: any): EventFilter;
  OwnershipTransferred(...parameters: any): EventFilter;
  RemoveAdmin(...parameters: any): EventFilter;
  RewardsStop(...parameters: any): EventFilter;
  UpdatePool(...parameters: any): EventFilter;
  Withdraw(...parameters: any): EventFilter;
  WithdrawLongTerm(...parameters: any): EventFilter;
}
export type StakingMethodNames =
  | 'new'
  | 'PRECISION_FACTOR'
  | 'SECONDS_IN_YEAR'
  | 'accTokenPerShare'
  | 'addAdmin'
  | 'addPool'
  | 'admin'
  | 'bonusEndBlock'
  | 'changeToken'
  | 'closePool'
  | 'deposit'
  | 'depositLongTerm'
  | 'earned'
  | 'emergencyRewardWithdraw'
  | 'emergencyWithdraw'
  | 'hasUserLimit'
  | 'initialize'
  | 'isInitialized'
  | 'lastRewardBlock'
  | 'owner'
  | 'pendingReward'
  | 'poolInfo'
  | 'poolLimitPerUser'
  | 'recoverWrongTokens'
  | 'removeAdmin'
  | 'renounceOwnership'
  | 'rewardDistributionAddress'
  | 'rewardPerBlock'
  | 'startBlock'
  | 'stopReward'
  | 'systemAdmin'
  | 'totalFlexibleStaked'
  | 'totalLongTermStaked'
  | 'totalStakeAllPool'
  | 'transferOwnership'
  | 'updatePoolLimitPerUser'
  | 'updateRewardPerBlock'
  | 'updateStartAndEndBlocks'
  | 'userInfo'
  | 'userInfoLongTerm'
  | 'withdraw'
  | 'withdrawLongTerm';
export interface AddAdminEventEmittedResponse {
  user: string;
}
export interface AddPoolEventEmittedResponse {
  id: BigNumberish;
  _minDeposit: BigNumberish;
  _maxDeposit: BigNumberish;
  _currentStaking: BigNumberish;
  _limitStaking: BigNumberish;
  _APR: BigNumberish;
  _period: BigNumberish;
}
export interface AdminTokenRecoveryEventEmittedResponse {
  tokenRecovered: string;
  amount: BigNumberish;
}
export interface ChangeTokenEventEmittedResponse {
  token: string;
}
export interface ClaimLongTermEventEmittedResponse {
  _pid: BigNumberish;
  pending: BigNumberish;
}
export interface ClosePoolEventEmittedResponse {
  _pid: BigNumberish;
  _stopDay: BigNumberish;
}
export interface DepositEventEmittedResponse {
  amount: BigNumberish;
  pendingFlex: BigNumberish;
}
export interface DepositLongTermEventEmittedResponse {
  _pid: BigNumberish;
  amount: BigNumberish;
}
export interface EmergencyWithdrawEventEmittedResponse {
  amount: BigNumberish;
}
export interface NewPoolLimitEventEmittedResponse {
  poolLimitPerUser: BigNumberish;
}
export interface NewRewardPerBlockEventEmittedResponse {
  rewardPerBlock: BigNumberish;
}
export interface NewStartAndEndBlocksEventEmittedResponse {
  startBlock: BigNumberish;
  endBlock: BigNumberish;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface RemoveAdminEventEmittedResponse {
  user: string;
}
export interface RewardsStopEventEmittedResponse {
  blockNumber: BigNumberish;
}
export interface UpdatePoolEventEmittedResponse {
  _pid: BigNumberish;
  _minDeposit: BigNumberish;
  _currentStaking: BigNumberish;
  _limitStaking: BigNumberish;
  _status: boolean;
}
export interface WithdrawEventEmittedResponse {
  amount: BigNumberish;
  pendingFlex: BigNumberish;
}
export interface WithdrawLongTermEventEmittedResponse {
  _pid: BigNumberish;
  amount: BigNumberish;
  pending: BigNumberish;
}
export interface PoolInfoResponse {
  minDeposit: BigNumber;
  0: BigNumber;
  maxDeposit: BigNumber;
  1: BigNumber;
  limitStaking: BigNumber;
  2: BigNumber;
  currentStaking: BigNumber;
  3: BigNumber;
  period: BigNumber;
  4: BigNumber;
  stopDay: BigNumber;
  5: BigNumber;
  APR: BigNumber;
  6: BigNumber;
  status: boolean;
  7: boolean;
  length: 8;
}
export interface UserInfoResponse {
  amount: BigNumber;
  0: BigNumber;
  rewardDebt: BigNumber;
  1: BigNumber;
  totalRewardEarned: BigNumber;
  2: BigNumber;
  length: 3;
}
export interface UserInfoLongTermResponse {
  amount: BigNumber;
  0: BigNumber;
  timeStake: BigNumber;
  1: BigNumber;
  endtime: BigNumber;
  2: BigNumber;
  totalRewardEarned: BigNumber;
  3: BigNumber;
  staked: boolean;
  4: boolean;
  length: 5;
}
export interface Staking {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _rewardDistributionAddress Type: address, Indexed: false
   * @param _token Type: address, Indexed: false
   */
  'new'(
    _rewardDistributionAddress: string,
    _token: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  PRECISION_FACTOR(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  SECONDS_IN_YEAR(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  accTokenPerShare(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _AddAdmin Type: address, Indexed: false
   */
  addAdmin(
    _AddAdmin: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _minDeposit Type: uint256, Indexed: false
   * @param _maxDeposit Type: uint256, Indexed: false
   * @param _limitStaking Type: uint256, Indexed: false
   * @param _APR Type: uint64, Indexed: false
   * @param _period Type: uint128, Indexed: false
   */
  addPool(
    _minDeposit: BigNumberish,
    _maxDeposit: BigNumberish,
    _limitStaking: BigNumberish,
    _APR: BigNumberish,
    _period: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  admin(
    parameter0: string,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  bonusEndBlock(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _token Type: address, Indexed: false
   */
  changeToken(
    _token: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   */
  closePool(
    _pid: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _amount Type: uint256, Indexed: false
   */
  deposit(
    _amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  depositLongTerm(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   * @param _user Type: address, Indexed: false
   */
  earned(
    _pid: BigNumberish,
    _user: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _amount Type: uint256, Indexed: false
   */
  emergencyRewardWithdraw(
    _amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  emergencyWithdraw(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  hasUserLimit(overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _rewardPerBlock Type: uint256, Indexed: false
   * @param _startBlock Type: uint256, Indexed: false
   * @param _bonusEndBlock Type: uint256, Indexed: false
   * @param _poolLimitPerUser Type: uint256, Indexed: false
   */
  initialize(
    _rewardPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    _poolLimitPerUser: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  isInitialized(overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  lastRewardBlock(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _user Type: address, Indexed: false
   */
  pendingReward(
    _user: string,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  poolInfo(
    parameter0: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<PoolInfoResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  poolLimitPerUser(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _tokenAddress Type: address, Indexed: false
   * @param _tokenAmount Type: uint256, Indexed: false
   */
  recoverWrongTokens(
    _tokenAddress: string,
    _tokenAmount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _RemoveAdmin Type: address, Indexed: false
   */
  removeAdmin(
    _RemoveAdmin: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  rewardDistributionAddress(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  rewardPerBlock(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  startBlock(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  stopReward(
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _account Type: address, Indexed: false
   */
  systemAdmin(
    _account: string,
    overrides?: ContractCallOverrides,
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalFlexibleStaked(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   */
  totalLongTermStaked(
    _pid: BigNumberish,
    overrides?: ContractCallOverrides,
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalStakeAllPool(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(
    newOwner: string,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _hasUserLimit Type: bool, Indexed: false
   * @param _poolLimitPerUser Type: uint256, Indexed: false
   */
  updatePoolLimitPerUser(
    _hasUserLimit: boolean,
    _poolLimitPerUser: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _rewardPerBlock Type: uint256, Indexed: false
   */
  updateRewardPerBlock(
    _rewardPerBlock: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _startBlock Type: uint256, Indexed: false
   * @param _bonusEndBlock Type: uint256, Indexed: false
   */
  updateStartAndEndBlocks(
    _startBlock: BigNumberish,
    _bonusEndBlock: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   */
  userInfo(
    parameter0: string,
    overrides?: ContractCallOverrides,
  ): Promise<UserInfoResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   */
  userInfoLongTerm(
    parameter0: BigNumberish,
    parameter1: string,
    overrides?: ContractCallOverrides,
  ): Promise<UserInfoLongTermResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _amount Type: uint256, Indexed: false
   */
  withdraw(
    _amount: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _pid Type: uint256, Indexed: false
   */
  withdrawLongTerm(
    _pid: BigNumberish,
    overrides?: ContractTransactionOverrides,
  ): Promise<ContractTransaction>;
}
