// import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import HeaderNav from '../frontend/components/headernav';
import ArtWallList from '../frontend/components/artwalllist';
// import { useAccount } from 'wagmi';
// import React, { useState, useEffect } from 'react';
// import { WalletClient } from 'viem'; // Import WalletClient from viem

const Home: NextPage = () => {
  //const { address } = useAccount();

  return (
    <div>
      <Head>
        <title>1155 skeleton for zora</title>
        <meta content="1155 skeleton for zora" name="1155 skeleton for zora" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <HeaderNav />

      <main>
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
