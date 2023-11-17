import React from "react";
import { Button } from "@chakra-ui/react";
import { createMintClient } from "@zoralabs/protocol-sdk";
import type { Address, WalletClient } from "viem";
import { createPublicClient, createWalletClient, http } from "viem";
import { zora } from "viem/chains";
import { useWalletClient, useAccount } from "wagmi";
import { useConnectModal } from '@rainbow-me/rainbowkit';

async function mintNFT(
  walletClient: WalletClient,
  address: Address,
  tokenId: bigint
) {
  if (!walletClient.chain) {
    throw new Error("Chain is undefined");
  }

  const mintAPI = createMintClient({ chain: walletClient.chain });
  const publicClient = createPublicClient({
    chain: walletClient.chain,
    transport: http(),
  });
  const mintable = await mintAPI.getMintable({
    tokenContract: address,
    tokenId,
  });
  const params = await mintAPI.makePrepareMintTokenParams({
    mintable,
    publicClient,
    minterAccount: walletClient.account!.address,
    mintArguments: {
      mintToAddress: walletClient.account!.address,
      quantityToMint: 1,
      mintComment: "Hello",
    },
  });
  const simulatedMinted = await publicClient.simulateContract(
    params.simulateContractParameters
  );
  const hash = await walletClient.writeContract(simulatedMinted.request);
  return await publicClient.waitForTransactionReceipt({ hash });
}

function MintButton() {
  const { isConnected } = useAccount();
  const address = "0x0250FfD918AA6DeeA1bbBD7B89DbA06478E723be";
  const tokenId = BigInt(1);
  const walletClient = useWalletClient();
  const mintText = isConnected ? 'Mint Now' : 'Connect Your Wallet';
  const { openConnectModal } = useConnectModal();

  const handleMint = async () => {
    if (!isConnected) {
      if (openConnectModal) {
        openConnectModal();
      } else {
        console.error('Unable to open connect modal');
      }
      return;
    }

    if (walletClient?.data) {
      await mintNFT(walletClient.data, address, tokenId);
    } else {
      alert('Wallet client data is not available. Please try again.');    
    }
  };

  return (
    <Button colorScheme="blue" onClick={handleMint}>
      {mintText}
    </Button>
  );
}

export default MintButton;