export enum eventName {
  LONGTERM_STAKE = 'LongTerm-Stake',
  LONGTERM_UNSTAKE = 'LongTerm-Unstake',
  LONGTERM_CLAIM = 'LongTerm-Claim',
  LONGTERM_CLAIM_UNSTAKE = 'LongTerm-Claim-Unstake',

  FLEXIBLE_STAKE = 'Flexible-Stake',
  FLEXIBLE_UNSTAKE = 'Flexible-Unstake',
  FLEXIBLE_CLAIM = 'Flexible-Claim',
  FLEXIBLE_CLAIM_AND_UNSTAKE = 'Flexible-Claim-Unstake',
  FLEXIBLE_CLAIM_AND_STAKE = 'Flexible-Claim-Stake',
}

export const actionName = [
  { key: eventName.FLEXIBLE_STAKE, label: 'Stake' },
  { key: eventName.FLEXIBLE_CLAIM_AND_UNSTAKE, label: 'Claim and unstake' },
  { key: eventName.FLEXIBLE_CLAIM, label: 'Claim' },
  { key: eventName.LONGTERM_CLAIM, label: 'Claim' },
  { key: eventName.FLEXIBLE_UNSTAKE, label: 'Unstake' },
  { key: eventName.LONGTERM_STAKE, label: 'Stake' },
  { key: eventName.LONGTERM_UNSTAKE, label: 'Unstake' },
  { key: eventName.FLEXIBLE_CLAIM_AND_STAKE, label: 'Claim and stake' },
];

export const fromName = [
  { key: eventName.FLEXIBLE_STAKE, label: 'Flexible' },
  { key: eventName.FLEXIBLE_CLAIM_AND_UNSTAKE, label: 'Flexible' },
  { key: eventName.FLEXIBLE_CLAIM, label: 'Flexible' },
  { key: eventName.FLEXIBLE_UNSTAKE, label: 'Flexible' },
  { key: eventName.LONGTERM_CLAIM, label: 'Long term' },
  { key: eventName.LONGTERM_STAKE, label: 'Long term' },
  { key: eventName.LONGTERM_UNSTAKE, label: 'Long term' },
  { key: eventName.FLEXIBLE_CLAIM_AND_STAKE, label: 'Flexible' },
];
