import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Layout from '@/pages/_layout';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </ChakraProvider>
  );
}