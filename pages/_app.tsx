import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="Only 2 diners allowed"
        description="Search through restaurants that only allow 2 pax dine in from 19 July to 8 August 2021"
      />
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
