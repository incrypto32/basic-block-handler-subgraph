import { Address, ethereum, log } from '@graphprotocol/graph-ts';
import { Usdc } from '../generated/Usdc/Usdc';
import { BlockData } from '../generated/schema';

export function handleBlock(block: ethereum.Block): void {
  let addr = Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48');
  let a = ethereum.getCode(addr);
  log.info('======> Val: {}, LENGTH: {}', [a.toHexString(), a.byteLength.toString()]);
  let data = new BlockData(block.number.toString());
  data.number = block.number;
  data.bytes = a;
  data.save();
}
