import React from 'react';
import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/placeholder.css';
import { Layout } from '@/components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
