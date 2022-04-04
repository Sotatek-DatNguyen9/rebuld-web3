export interface HistoryType {
  id: string;
  eventName: string;
  amount: string;
  transactionTime: string;
  poolId: string;
  period: string;
  pendingReward?: string;
}
