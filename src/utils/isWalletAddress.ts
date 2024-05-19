import { TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { solana } from '../../lib/solana';

export async function isWalletAddress(address: string): Promise<boolean> {
  try {
    const pubkey = new PublicKey(address);
    const accountInfo = await solana.getAccountInfo(pubkey);

    if (
      accountInfo?.owner.equals(TOKEN_PROGRAM_ID) ||
      accountInfo?.owner.equals(TOKEN_2022_PROGRAM_ID)
    ) {
      return false;
    } else {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to fetch account info:', error);
    return false;
  }
}
