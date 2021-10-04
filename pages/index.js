import React from "react";

import Home from "../src/Home";
import Head from "next/head";

export default function Index(props) {
  return (
    <>
      <Head>
        <title>KeeperDAO</title>
        <meta property="og:title" content="KeeperDAO" />
        <meta name="twitter:title" content="KeeperDAO" />
        <meta
          property="description"
          content="Creating a more profitable, fair and secure DeFi metaverse for users, protocols and Keepers"
        />
      </Head>
      <Home {...props} />
    </>
  );
}
