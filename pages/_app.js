import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

import Layout from "../src/Layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Allows components to individually have light or dark theming
  const [colorMode, setColorMode] = useState("dark");

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>KeeperDAO</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KeeperDAO" />
        <meta
          name="twitter:image"
          content="https://www.keeperdao.com/_next/image?url=%2Fimages%2Fgraphics%2Fkeeper_vista.png&w=1080&q=75"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout colorMode={colorMode} setColorMode={setColorMode}>
          <Component
            {...pageProps}
            colorMode={colorMode}
            setColorMode={setColorMode}
          />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
