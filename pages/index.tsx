import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderNav from '../frontend/components/headernav';
import ArtWallList from '../frontend/components/artwalllist';
import { 
  Heading,
  Flex,
  Box,
  Image
} from '@chakra-ui/react';
// import { useAccount } from 'wagmi';
// import React, { useState, useEffect } from 'react';
// import { WalletClient } from 'viem'; // Import WalletClient from viem

const Home: NextPage = () => {
  const theArtistsUrl = '/images/cursivish-theArtists.png';
  const theManifestoUrl = '/images/cursiveish-theManifesto.png';
  return (
    <Box
      w="100%"
      color="#423639"
      sx={{
        bgGradient: 'radial(ellipse at center, #FFB07F 0%, #DF257E 32%, #F5F5F5 68%, #DFF3F4 84%, #F4F4DE 100%, #FFB07F 68%)',
        backgroundSize: '200% 200%',
        animation: { 
          base: 'cdRotate 32s cubic-bezier(0.32, 0.68, 0.84, 0.16) infinite',
          lg: 'cdRotate 32s cubic-bezier(0.32, 0.68, 0.84, 0.16) infinite',
        },
        '@keyframes cdRotate': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      }}
    >
      <Head>
        <title>Technology of Togetherness by Take Up Space</title>
        <meta content="Technology of Togetherness by Take Up Space" name="Technology of Togetherness" />
        <link href="/favicon.ico" rel="icon" />
        <link rel="stylesheet" href="https://use.typekit.net/brz2ppj.css" />
      </Head>

      <HeaderNav />

      <Box as="main" p={['2', '4']}>
      <Flex align='center' justify='center'>
          <Image
            src={theManifestoUrl}
            height={['7.993rem', '11.994rem', '15.986rem']}
            alt=''
            borderRadius='0'
            textAlign="center"
          /> 
        </Flex>
        <Heading>manifesto stuff here</Heading>
        <Flex align='center' justify='center'>
          <Image
            src={theArtistsUrl}
            height={['7.993rem', '11.994rem', '15.986rem']}
            alt=''
            borderRadius='0'
            textAlign="center"
          /> 
        </Flex>
        <ArtWallList />
      </Box>

      <footer>
        <a href="" rel="noopener noreferrer" target="_blank">
          made by people
        </a>
      </footer>
    </Box>
  );
};

export default Home;
