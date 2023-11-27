import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderNav from '../frontend/components/headernav';
import ArtWallList from '../frontend/components/artwalllist';
import { 
  Heading,
  Flex,
  Box,
  Image,
  Text
} from '@chakra-ui/react';
// import { useAccount } from 'wagmi';
// import React, { useState, useEffect } from 'react';
// import { WalletClient } from 'viem'; // Import WalletClient from viem

const Home: NextPage = () => {
  const theArtistsUrl = '/images/cursivish-theArtists.png';
  const theManifestoUrl = '/images/cursiveish-theManifesto.png';
  const brandUrl = '/images/cursivish-tot.png';
  const logo2Url = '/images/tus_logo.png';
  return (
    <Box
      w="100%"
      color="#423639"
      sx={{
        //bgGradient: 'radial(ellipse at center, #FFB07F 0%, #DF257E 32%, #F5F5F5 68%, #DFF3F4 84%, #F4F4DE 100%, #FFB07F 68%)',
        bgGradient: 'radial(ellipse at center, #DF257E 0%, #DF257E 32%, #FFB07F 68%, #DF257E 84%, #F4F4DE 100%, #DF257E 68%)',
        backgroundSize: '300% 300%',
        //animation: { 
        //  base: 'cdRotate 24s cubic-bezier(0.32, 0.68, 0.84, 0.16) infinite',
        //  lg: 'cdRotate 24s cubic-bezier(0.32, 0.68, 0.84, 0.16) infinite',
        //},
        //'@keyframes cdRotate': {
        //  '0%': { backgroundPosition: '0% 50%' },
        //  '100%': { backgroundPosition: '200% 50%' },
        //},
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
        <Flex mb="7.993rem" mx={['0%', '19%']}>
          <ArtWallList startIndex={0} itemCount={1} columnCount={1}/>
        </Flex>
        <Flex align='center' justify='center'>
          <Image
            src={theArtistsUrl}
            height={['7.993rem', '11.994rem', '15.986rem']}
            alt=''
            borderRadius='0'
            textAlign="center"
          /> 
        </Flex>
        <ArtWallList startIndex={1}/>
      </Box>

      <Flex 
        align='center' 
        justify='center' 
        textAlign='center' 
        mx={['2rem', '19%', null]}
        py='3rem'
        fontFamily='acumin-pro-extra-condensed, sans-serif'
        fontSize={['h6', 'h5', null]}
        color='#000'
      >
        <footer>
          <Image
            src={brandUrl}
            height={['7.993rem', '11.994rem', '15.986rem']}
            alt=''
          /> 
          <Text>Take Up Space is a media company and collective for culture-makers. <br />We empower creatives through media & community experiences - spanning IRL, online & onchain.</Text>
        </footer>
      </Flex>
    </Box>
  );
};

export default Home;
