import React, { useState } from 'react';
import { 
  Button, 
  useToast,
  Box,
  Stack
} from "@chakra-ui/react";
import { createMintClient } from "@zoralabs/protocol-sdk";
import type { Address, WalletClient } from "viem";
import { createPublicClient, createWalletClient, http } from "viem";
//import { zora } from "viem/chains";
import { useWalletClient } from "wagmi";
import { useConnectModal } from '@rainbow-me/rainbowkit';

async function mintNFT(
  walletClient: WalletClient,
  address: Address,
  tokenId: bigint,
  quantityToMint: number,
  mintReferralAddress: string
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
      quantityToMint: quantityToMint,
      mintComment: "",
      mintReferral: mintReferralAddress,
    },
  });
  const simulatedMinted = await publicClient.simulateContract(
    params.simulateContractParameters
  );
  const hash = await walletClient.writeContract(simulatedMinted.request);
  return await publicClient.waitForTransactionReceipt({ hash });
}

function ensureAddressFormat(address) {
  if (!address.startsWith('0x')) {
    return `0x${address}`;
  }
  return address;
}


function MintButton() {
  const address = "0x0250FfD918AA6DeeA1bbBD7B89DbA06478E723be";
  const tokenId = BigInt(1);
  const walletClient = useWalletClient();
  const { openConnectModal } = useConnectModal();
  const isWalletConnected = walletClient?.data !== undefined;
  const [isMinting, setIsMinting] = useState(false);
  const toast = useToast();

  // quantity things
  const [quantityToMint, setQuantityToMint] = useState(1);
  const mintCostPerNFT = 0.000777;

  const incrementQuantity = () => {
    setQuantityToMint(q => q + 1);
  };

  const decrementQuantity = () => {
    setQuantityToMint(q => Math.max(1, q - 1));
  };

  const mintReferralAddress = "0xD1344833F3cCB6359583657BE3D8959a18AB83b2";

  const handleMint = async () => {
    if (walletClient?.data) {
      setIsMinting(true); // Start minting
      try {
        const formattedMintReferralAddress = ensureAddressFormat(mintReferralAddress);
        await mintNFT(walletClient.data, address, tokenId, quantityToMint, mintReferralAddress);
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
    <div>
      {isWalletConnected && (
        <>
        <Stack mt={4} align="center" justifyContent="center" fontFamily="acumin-pro-extra-condensed, sans-serif" direction='row'>
          <Button 
            w="10%" 
            onClick={decrementQuantity}
            borderRadius="0"
            backgroundColor="#fff"
            borderColor="#EBF3E6"
            borderWidth="3px" 
            fontSize="h5"
            pb={2}
            _hover={{bg:'#EBF3E6'}}
          >-</Button>
          <Box w="10%" textAlign='center'>{quantityToMint}</Box>
          <Button 
            w="10%" 
            onClick={incrementQuantity}
            borderRadius="0"
            backgroundColor="#fff"
            borderColor="#EBF3E6"
            borderWidth="3px" 
            fontSize="h5"
            pb={2}
            _hover={{bg:'#EBF3E6'}}
          >+</Button>
          <Button 
          onClick={handleMint} 
          disabled={isMinting}
          borderRadius="0"
          backgroundColor="#DF257E"
          borderColor="#DF257E"
          borderWidth="3px" 
          color="#fff"
          fontSize="h5"
          _hover={{bg:'#DF257E'}}
          w="70%"
          pb={1}
          >
            {isWalletConnected ? (isMinting ? "minting..." : "MINT") : "CONNECT WALLET"}
            <Box fontSize="md" ml={1}>{quantityToMint * mintCostPerNFT} eth</Box>
          </Button>
        </Stack>
        </>
      )}
    </div>
  );
}

//  return (
//    <Button colorScheme="blue" onClick={handleMint}>
//      {isWalletConnected ? (isMinting ? "Minting..." : "Mint") : "Connect Your Wallet"}
//    </Button>
//  );
//}

export default MintButton;