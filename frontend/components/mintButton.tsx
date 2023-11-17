import React, { useState } from 'react';
import { Button, useToast } from "@chakra-ui/react";
import { createMintClient } from "@zoralabs/protocol-sdk";
import type { Address, WalletClient } from "viem";
import { createPublicClient, createWalletClient, http } from "viem";
import { zora } from "viem/chains";
import { useWalletClient } from "wagmi";
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
  const mintableParams = new URLSearchParams({
    tokenId: `${tokenId}`,
    collectionAddress: address,
    chainName: mintAPI.network.zoraBackendChainName,
  }).toString();
  const result = await fetch(`/api/mintable?${mintableParams}`)
  const mintable = await result.json();
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
  const address = "0x0250FfD918AA6DeeA1bbBD7B89DbA06478E723be";
  const tokenId = BigInt(1);
  const walletClient = useWalletClient();
  const { openConnectModal } = useConnectModal();
  const isWalletConnected = walletClient?.data !== undefined;
  const [isMinting, setIsMinting] = useState(false);
  const toast = useToast();

  const handleMint = async () => {
    if (walletClient?.data) {
      setIsMinting(true); // Start minting
      try {
        await mintNFT(walletClient.data, address, tokenId);
        toast({
          title: "Success",
          description: "NFT minted successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } catch (error) {
        let errorMessage = "Something went wrong. Please try again.";
        let errorTitle = "Error";        
        
      // Check for a transaction rejection error
      if (error instanceof Error && error.message.includes("User denied transaction signature")) {
        errorMessage = "Transaction rejected by user.";
        errorTitle = "Transaction Rejected";
      }
      toast({
        title: "Error",
        description: errorMessage,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      } finally {
        setIsMinting(false); // End minting
      }
    } else {
      if (openConnectModal) {
        openConnectModal();
      } else {
        // Handle the case where openConnectModal is undefined
        console.error("Wallet connection functionality is unavailable.");
        toast({
          title: "Error",
          description: "Unable to connect to the wallet. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    }
  };  

  return (
    <Button colorScheme="blue" onClick={handleMint}>
      {isWalletConnected ? (isMinting ? "Minting..." : "Mint") : "Connect Your Wallet"}
    </Button>
  );
}

export default MintButton;