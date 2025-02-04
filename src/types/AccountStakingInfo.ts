import { RewardDestination, StakingLedger } from '@polkadot/types/interfaces';
import type { PalletStakingStakingLedger, PalletStakingRewardDestination } from '@polkadot/types/lookup';
import { AccountId } from '@polkadot/types/interfaces/runtime';

import { IAt } from '.';

export interface IAccountStakingInfo {
	at: IAt;
	controller: AccountId;
	rewardDestination: PalletStakingRewardDestination;
	numSlashingSpans: number;
//	staking: StakingLedger;
	staking: PalletStakingStakingLedger
}
