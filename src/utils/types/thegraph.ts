export interface StakingHistoryEntity {
  longTerm: number;
  apr: number;
  poolLimit: number;
  min: number;
  max: number;
  primaryColor?: boolean;
  staked?: boolean;
  status?: string;

  // id: string
  // user: string
  // eventName: string
  // eventType: String! # stake | unstake | claim - NEED_FOR_FRONTEND
  // poolId: BigInt! #
  // packageId: BigInt! # flexible is 0
  // amount: BigInt! # value - NEED_FOR_FRONTEND
  // transactionTime: BigInt! # time transaction created
}
