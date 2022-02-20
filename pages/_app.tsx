import React from 'react';
import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/placeholder.css';
import { Header } from '@/components/Header/Header';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
