import React from "react";
import { Button } from "@chakra-ui/react";
import { createMintClient } from "@zoralabs/protocol-sdk";
import type { Address, WalletClient } from "viem";
import { createPublicClient, createWalletClient, http } from "viem";
import { zora } from "viem/chains";
import { useWalletClient } from "wagmi";

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

  const handleMint = () => {
    if (!walletClient?.data) {
      return;
    }

    mintNFT(walletClient.data, address, tokenId);
  };

  return (
    <Button colorScheme="blue" onClick={handleMint}>
      Mint NFT
    </Button>
  );
}

export default MintButton;
