import { getParsedNftAccountsByOwner, isValidSolanaAddress } from "@nfteyez/sol-rayz";
import * as anchor from '@project-serum/anchor';
import dotenv from 'dotenv';

dotenv.config()

export default async function confirmHolder (publicKey: string): Promise<boolean> {
    let hasNFT = false;
    try {
        const connection = new anchor.web3.Connection(anchor.web3.clusterApiUrl("mainnet-beta"))
        const result = isValidSolanaAddress(publicKey)
        if (result) {
            const nfts = await getParsedNftAccountsByOwner({
                publicAddress: publicKey,
                connection: connection,
            })
            nfts.forEach((nft: any) => {
                if (nft.updateAuthority === process.env.updateAuthority) {
                    hasNFT = true;
                    return hasNFT;
                }
            })
        } else {
            console.log("Invalid Solana Public Key.")
        }
    } catch (e: any) {
        console.log(e.message)
    }
    return hasNFT;
}