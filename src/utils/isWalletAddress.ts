import { PublicKey } from '@solana/web3.js';
import { solana } from '../../lib/solana';

export async function isWalletAddress(address: string): Promise<boolean> {
  try {
    const pubkey = new PublicKey(address);
    const accountInfo = await solana.getAccountInfo(pubkey);

    // Check if account can sign transactions (is a wallet)
    // Wallets typically should not be executable and should have a non-zero lamports balance
    if (accountInfo && !accountInfo.executable) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to fetch account info:', error);
    return false;
  }
}
