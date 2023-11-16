import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderNav from '../frontend/components/headernav';
import ArtWallList from '../frontend/components/artwalllist';
import { 
  Heading,
  Flex,
  Box
} from '@chakra-ui/react';
// import { useAccount } from 'wagmi';
// import React, { useState, useEffect } from 'react';
// import { WalletClient } from 'viem'; // Import WalletClient from viem

const Home: NextPage = () => {
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

      <Box as="main" p={8}>
        <Heading 
          as="h1" 
          fontSize='h1'
          fontStyle='italic'
          fontWeight='800'
          sx={{
            bgGradient: 'radial(ellipse at center, #DF257E 0%, #F5F5F5 32%, #DF257E 68%, #F4F4DE 84%, #DFF3F4 100%, #DF257E 68%)',
            backgroundSize: '200% 200%',
            animation: { 
              base: 'cdRotate 132s cubic-bezier(0.17, 0.47, 0.83, 0.57) infinite',
              lg: 'cdRotate 32s cubic-bezier(0.32, 0.68, 0.84, 0.16) infinite',
            },
            '@keyframes cdRotate': {
              '0%': { backgroundPosition: '0% 50%' },
              '100%': { backgroundPosition: '200% 50%' },
            },
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >THE ARTISTS</Heading>
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
