import { ethers } from 'ethers';

export const formatUnits = (balanceResult: ethers.BigNumberish) => {
  return Number(ethers.utils.formatUnits(balanceResult, 18));
};

export const parseUnits = (balanceRequest: ethers.BigNumberish) => {
  return ethers.utils.parseUnits(balanceRequest.toString(), 18);
};
