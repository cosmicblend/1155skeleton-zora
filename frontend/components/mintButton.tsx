import React from 'react';
import { Button } from '@chakra-ui/react';
import { createMintClient } from "@zoralabs/protocol-sdk";
import type { Address, WalletClient } from "viem";
import { createWalletClient, http } from "viem";
import { zora } from 'viem/chains';

// async function mintNFT(
//  walletClient: WalletClient,
//  address: Address,
//  tokenId: bigint,
//) {
//  if (!walletClient.chain) {
//    throw new Error('Chain is undefined');
//  }

//  const mintAPI = createMintClient({ chain: walletClient.chain });
//  await mintAPI.mintNFT({
//    walletClient,
//    address,
//    tokenId,
//    mintArguments: {
//      quantityToMint: 1,
//      mintComment: "Hello",
//    },
//  });
//}

function MintButton() {
//  const walletClient = createWalletClient({
//    chain: zora,
//    transport: http()
//  });
//  const address = "0x0250FfD918AA6DeeA1bbBD7B89DbA06478E723be";
//  const tokenId = BigInt(1);

//  const handleMint = () => {
//    mintNFT(walletClient, address, tokenId);
//  };

//  return (
//    <Button colorScheme="blue" onClick={handleMint}>Mint NFT</Button>
//  );
}

export default MintButton;
