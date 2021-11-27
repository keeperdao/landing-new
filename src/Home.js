import * as React from "react";

import theme from "./theme";

import { Grid, Typography, Button, Divider } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import Image from "next/image";

import BorrowText from "../public/images/graphics/borrow_text.svg";
import TradeText from "../public/images/graphics/trade_text.svg";
import EarnText from "../public/images/graphics/earn_text.svg";

const IntroBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  position: "relative",
  width: "100%",
  marginBottom: "100px",
  justifyContent: "space-around",
  //padding: "8px",
}));

const ExplainerBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "space-around",
  marginBottom: "100px",
  padding: "8px",
  background:
    "radial-gradient(circle, rgba(37,31,45,1) 0%, rgba(20,17,24,1) 100%)",
  borderRadius: "8px",
}));

const ProductBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  width: "100%",
  marginBottom: "100px",
  padding: "8px",
  justifyContent: "space-between",
  alignItems: "space-around",
}));

function Home(props) {
  const { colorMode, setColorMode } = props;
  setColorMode("dark");

  return (
    <div style={{ padding: "24px" }}>
      <IntroBox id="intro" container item direction="row">
        <Grid
          container
          item
          direction="column"
          xs={11}
          sm={7}
          header={5}
          justifyContent="space-between"
        >
          <Grid item sx={{ marginBottom: "24px" }}>
            <Typography variant="h1">Welcome to DeFi Utopia.</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "24px", width: "90%" }}>
            <Typography variant="body1">
              Get paid to trade and borrow with full MEV protection and
              virtually unmatched liquidity sourcing.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: { xs: "100%", header: "85%" },
              justifySelf: "flex-end",
              marginBottom: { xs: "24px", sm: "0px" },
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{ borderRadius: "8px", marginBottom: "20px" }}
              target="_blank"
              href="https://app.keeperdao.com/"
              rel="noopener noreferrer"
            >
              Enter KeeperDAO
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{ padding: 0 }}
          justifyContent="center"
          xs={11}
          header={7}
        >
          <Grid item>
            <Image
              width={501}
              height={282}
              src={"/images/graphics/keeper_vista.png"}
            />
          </Grid>
        </Grid>
      </IntroBox>
      <ExplainerBox
        id="explainer"
        container
        item
        direction="row"
        sx={{
          width: "auto",
          padding: { xs: "20px", sm: "40px", md: "40px" },
          margin: { sm: "0 100px 100px" },
        }}
      >
        <Grid container item direction="row" justifyContent="space-between">
          <Grid
            container
            item
            justifyContent="flex-start"
            alignItems="center"
            sx={{ marginBottom: "24px", width: "100%" }}
          >
            <div style={{ zIndex: 2 }}>
              <Image
                width={32}
                height={52}
                unoptimized
                src={"/images/graphics/small_rook.png"}
              />
            </div>
            <div
              style={{
                marginLeft: "-16px",
                zIndex: 1,
                height: "4px",
                width: "92%",
                opacity: 0.9,
                background:
                  "linear-gradient(91.6deg, #6C46D6 0%, #4F63DF 52.08%, #09A7F3 100%)",
              }}
            />
          </Grid>
          <Grid
            container
            item
            justifyContent="flex-start"
            sx={{
              marginBottom: "24px",
              width: { md: "44%" },
            }}
          >
            <Typography variant="h6">
              KeeperDAO is building a decentralized protocol for Keepers that
              will help make Ethereum a more secure, egalitarian, and profitable
              network for all.
            </Typography>
          </Grid>
          <Grid
            container
            item
            justifyContent="flex-start"
            sx={{ width: { md: "44%" } }}
          >
            <Typography variant="body1">
              In the meantime, enjoy our innovative suite of DeFi primitives.
              Trade, Borrow, and Earn without exposing yourself to predatory MEV
              bots that roam the Dark Forest that is Ethereum's public mempool.
            </Typography>
          </Grid>
        </Grid>
      </ExplainerBox>
      <ProductBox
        id="products"
        container
        item
        sx={{ justifyContent: "space-between", gap: "20px" }}
      >
        <Grid
          container
          item
          sx={{
            marginLeft: 0,
            marginBottom: { header: "0px", xs: "60px" },
            width: { md: "220px" },
            background:
              "radial-gradient(circle, rgba(37,31,45,1) 0%, rgba(20,17,24,1) 100%)",
            padding: "20px",
            flex: "1",
          }}
          direction="column"
          justifyContent="space-between"
        >
          <div>
            <Grid
              container
              item
              direction="row"
              sx={{
                marginBottom: "24px",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Image
                width={84}
                height={84}
                quality={100}
                src={"/images/graphics/trade.png"}
              />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "16px" }}
            >
              <TradeText />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{}}
            >
              <Typography variant="body1">
                Place MEV-protected limit orders that get executed for free. Get
                rewarded in ROOK when your trade results in an on-chain profit
                opportunity.
              </Typography>
            </Grid>
          </div>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            sx={{ justifySelf: { sm: "flex-end" } }}
          >
            <Button
              variant="outlined-dark"
              fullWidth
              sx={{
                borderRadius: "8px",
                borderColor: "#6C46D6",
                marginTop: "16px",
              }}
              href="https://app.keeperdao.com/trade"
              rel="noopener noreferrer"
            >
              Start trading
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{
            marginLeft: 0,
            marginBottom: { header: "0px", xs: "60px" },
            width: { md: "220px" },
            background:
              "radial-gradient(circle, rgba(37,31,45,1) 0%, rgba(20,17,24,1) 100%)",
            padding: "20px",
            flex: "1",
          }}
          direction="column"
        >
          <div>
            <Grid
              container
              item
              direction="row"
              sx={{
                marginBottom: "24px",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Image
                width={84}
                height={84}
                quality={100}
                src={"/images/graphics/borrow.png"}
              />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "16px" }}
            >
              <BorrowText />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{}}
            >
              <Typography variant="body1">
                Open up a Vault and secure your Liquidity Positions in an MEV
                protective NFT-wrapper. Receive a cash-back in case of
                liquidation.
              </Typography>
            </Grid>
          </div>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            sx={{ justifySelf: { sm: "flex-end" } }}
          >
            <Button
              variant="outlined-dark"
              fullWidth
              sx={{
                borderRadius: "8px",
                borderColor: "#6C46D6",
                marginTop: "16px",
              }}
              href="https://app.keeperdao.com/vaults"
              rel="noopener noreferrer"
            >
              Start borrowing
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sx={{
            marginLeft: 0,
            marginBottom: { header: "0px", xs: "60px" },
            width: { md: "220px" },
            background:
              "radial-gradient(circle, rgba(37,31,45,1) 0%, rgba(20,17,24,1) 100%)",
            padding: "20px",
            flex: "1",
          }}
          direction="column"
        >
          <div>
            <Grid
              container
              item
              direction="row"
              sx={{
                marginBottom: "24px",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Image
                width={84}
                height={84}
                quality={100}
                src={"/images/graphics/earn.png"}
              />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "16px" }}
            >
              <EarnText />
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{}}
            >
              <Typography variant="body1">
                Provide liquidity to the protocol. Receive a proportionate share
                of our Keepers on-chain profits, paid out in ROOK.
              </Typography>
            </Grid>
          </div>
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            sx={{ justifySelf: { sm: "flex-end" } }}
          >
            <Button
              variant="outlined-dark"
              fullWidth
              sx={{
                borderRadius: "8px",
                borderColor: "#6C46D6",
                marginTop: "16px",
              }}
              href="https://app.keeperdao.com/pool"
              rel="noopener noreferrer"
            >
              Start earning
            </Button>
          </Grid>
        </Grid>
      </ProductBox>

      <Grid
        id="partners"
        container
        item
        direction="column"
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          padding: "8px",
          marginBottom: "48px",
        }}
      >
        <Grid
          container
          item
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "24px",
          }}
          spacing={1}
        >
          <Grid item>
            <div
              style={{
                width: "4px",
                height: "24px",
                opacity: 0.9,
                background:
                  "linear-gradient(180deg, #6C46D6 0%, #4F63DF 52.08%, #09A7F3 100%)",
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Trusted by</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={1}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          <Grid item>
            <a
              target="_blank"
              href="https://bancor.network"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/partners/bancor.png"}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              href="https://0x.org/zrx/staking/pool/23"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/partners/volleyfire.png"}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              href="https://metric.exchange/"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/partners/metric.png"}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        id="investors"
        container
        item
        direction="column"
        sx={{
          display: "flex",
          position: "relative",
          padding: "8px",
          width: "100%",
          marginBottom: "48px",
        }}
      >
        <Grid
          container
          item
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "24px",
          }}
          spacing={1}
        >
          <Grid item>
            <div
              style={{
                width: "4px",
                height: "24px",
                opacity: 0.9,
                background:
                  "linear-gradient(180deg, #6C46D6 0%, #4F63DF 52.08%, #09A7F3 100%)",
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Backed by</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={1}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          <Grid item>
            <a
              target="_blank"
              href="https://polychain.capital/"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/investors/polychain.png"}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              href="https://www.threearrowscap.com/"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/investors/threearrows.png"}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              href="https://www.ambergroup.io/"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/investors/amber.png"}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        id="auditors"
        container
        item
        direction="column"
        sx={{
          display: "flex",
          position: "relative",
          padding: "8px",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Grid
          container
          item
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: "24px",
          }}
          spacing={1}
        >
          <Grid item>
            <div
              style={{
                width: "4px",
                height: "24px",
                opacity: 0.9,
                background:
                  "linear-gradient(180deg, #6C46D6 0%, #4F63DF 52.08%, #09A7F3 100%)",
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Audited by</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          spacing={1}
          sx={{
            justifyContent: { xs: "center", sm: "flex-start" },
            marginBottom: "48px",
          }}
        >
          <Grid item>
            <a
              target="_blank"
              href="https://github.com/keeperdao/docs/tree/master/audits"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/auditors/samczsun.png"}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              href="https://github.com/keeperdao/docs/tree/master/audits"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/auditors/quantstamp.png"}
              />
            </a>
          </Grid>
          <Grid item>
            <a
              target="_blank"
              href="https://github.com/keeperdao/docs/tree/master/audits"
              rel="noopener noreferrer"
            >
              <Image
                width={243}
                height={114}
                quality={100}
                src={"/images/auditors/peckshield.png"}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
