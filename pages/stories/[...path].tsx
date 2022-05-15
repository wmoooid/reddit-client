import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { StoriesList } from '@/components/StoriesList/StoriesList';

const Listing: NextPage = () => {
  const router = useRouter();
  const listing = (router.query.path as []) || [];

  return (
    <>
      <Head>
        <title>{listing.join('/')} – Stories</title>
        <style>
          {`:root {
            --accent: #ff7440;
            --accent-light: #993c1a;
            --main: #d0d0d9;
            --background: #252526;
            --background-op: rgba(37, 37, 38, 0.5);
            --grey97: #38383b;
            --grey93: #3d3d40;
            --grey75: #626266;
          }`}
        </style>
      </Head>
      <StoriesList listing={listing.join('/')} />
    </>
  );
};

export default Listing;
