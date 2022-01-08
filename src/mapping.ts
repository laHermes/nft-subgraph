import { BigInt } from '@graphprotocol/graph-ts';
import { Transfer } from '../generated/Punks/Punks';
import { User } from '../generated/schema';

export function handleTransfer(event: Transfer): void {
	let user = User.load(event.params.from.toHexString());

	if (user == null) {
		user = new User(event.params.from.toHexString());
	}

	user.totalTransfers = user.totalTransfers.plus(BigInt.fromI32(1));
	user.save();
}
