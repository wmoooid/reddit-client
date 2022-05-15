import '@/styles/globals.css';
import '@/styles/normalize.css';
import '@/styles/placeholder.css';
import React from 'react';
import { Layout } from '@/components/Layout';
import { SWRConfig } from 'swr';
import { SWR_OPTIONS } from '@/lib/fetcher';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={SWR_OPTIONS}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
