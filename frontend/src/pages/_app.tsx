import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";

import { ChakraProvider } from "@chakra-ui/react";

import { client } from "../wagmi";

import "../styles/custom.css";
import "../styles/styles.css";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <NextHead>
          <title>My NFTS</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </NextHead>

        {mounted && <Component {...pageProps} />}
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
