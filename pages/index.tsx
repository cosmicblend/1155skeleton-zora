import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderNav from '../frontend/components/headernav';
import ArtWallList from '../frontend/components/artwalllist';
import { 
  Heading
} from '@chakra-ui/react';
// import { useAccount } from 'wagmi';
// import React, { useState, useEffect } from 'react';
// import { WalletClient } from 'viem'; // Import WalletClient from viem

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Technology of Togetherness by Take Up Space</title>
        <meta content="Technology of Togetherness by Take Up Space" name="Technology of Togetherness" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <HeaderNav />

      <main>
        <Heading>The Artists</Heading>
        <ArtWallList />
      </main>

      <footer>
        <a href="" rel="noopener noreferrer" target="_blank">
          made by people
        </a>
      </footer>
    </div>
  );
};

export default Home;
