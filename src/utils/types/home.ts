export interface StakeItemType {
  poolId: number;
  longTerm: number;
  apr: number;
  poolLimit: number;
  min: number;
  max: number;
  primaryColor?: boolean;
  staked?: boolean;
  stopDay: number;
  timestart?: number;
  yourStake?: number;
  currentStaking: number;
}

export interface PoolItemType {
  poolId: string;
  minDeposit: number;
  maxDeposit: number;
  limitStaking: number;
  apr: number;
  status: string;
  period: number;
  amount?: string | number;
  staked?: boolean;
  timeStake?: string | number;

  currentStaking: number;
  stopDay?: string | number;
  totalRewardEarned: string | number;
}

export interface PoolInfoItemType {
  amount: string | number;
  staked: boolean;
  timeStake: string | number;
  totalRewardEarned: string | number;
}
