import * as React from "react";

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
  padding: "8px",
}));

const ExplainerBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "space-around",
  marginBottom: "100px",
  padding: "8px",
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

function Home() {
  return (
    <div>
      <IntroBox id="intro" container item direction="row">
        <Grid
          container
          item
          direction="column"
          xs={11}
          sm={7}
          md={5}
          justifyContent="space-between"
        >
          <Grid item sx={{ marginBottom: "24px" }}>
            <Typography variant="h1">Welcome to DeFi Utopia.</Typography>
          </Grid>
          <Grid item sx={{ marginBottom: "24px" }}>
            <Typography variant="body1">
              Trade, Borrow, and Earn more securely and profitably inside the
              walled garden of KeeperDAO.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              width: { xs: "100%", md: "85%" },
              justifySelf: "flex-end",
              marginBottom: { xs: "24px", sm: "0px" },
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{ borderRadius: "8px" }}
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
          md={7}
        >
          <Image
            width={501}
            height={282}
            quality={100}
            src={"/images/graphics/keeper_vista.png"}
          />
        </Grid>
      </IntroBox>
      <ExplainerBox
        id="explainer"
        container
        item
        direction="row"
        sx={{
          width: { xs: 300, sm: 558 },
          marginLeft: { sm: "0px", xs: "16px" },
        }}
      >
        <Grid container item direction="column" justifyContent="flex-start">
          <Grid
            container
            item
            justifyContent="flex-start"
            alignItems="center"
            sx={{ marginBottom: "24px", width: "100%" }}
          >
            <Image
              width={32}
              height={52}
              unoptimized
              src={"/images/graphics/small_rook.png"}
            />
            <div
              style={{
                marginLeft: "-16px",
                zIndex: -1,
                height: "4px",
                width: "231px",
                opacity: 0.8,
                background:
                  "linear-gradient(91.6deg, #6C46D6 0%, #4F63DF 52.08%, #09A7F3 100%)",
              }}
            />
          </Grid>
          <Grid
            container
            item
            justifyContent="flex-start"
            sx={{ marginBottom: "24px" }}
          >
            <Typography variant="h6">
              KeeperDAO is building a decentralized protocol for Keepers that
              will help make Ethereum a more secure, egalitarian, and profitable
              network for all.
            </Typography>
          </Grid>
          <Grid container item justifyContent="flex-start">
            <Typography variant="body1">
              In the meantime, enjoy our innovative suite of DeFi primitives.
              Trade, Borrow, and Earn without exposing yourself to predatory MEV
              bots that roam the Dark Forest that is Ethereum's public mempool.
            </Typography>
          </Grid>
        </Grid>
      </ExplainerBox>
      <ProductBox id="products" container item>
        <Grid
          container
          item
          sx={{
            height: { sm: 330 },
            marginLeft: { sm: "0px", xs: "16px" },
            justifyContent: "space-between",
            marginBottom: { md: "0px", xs: "48px" },
          }}
          direction="column"
          xs={10}
          sm={5}
          md={3}
        >
          <div>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "24px" }}
            >
              <Image
                width={72}
                height={72}
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
            sx={{
              justifySelf: { sm: "flex-end" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{ borderRadius: "8px", borderColor: "#6C46D6" }}
              target="_blank"
              href="https://app.keeperdao.com/trade"
              rel="noopener noreferrer"
            >
              Start trading
            </Button>
          </Grid>
        </Grid>
        <Divider
          flexItem
          orientation="vertical"
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Grid
          container
          item
          sx={{
            height: { sm: 330 },
            marginLeft: { sm: "0px", xs: "16px" },
            marginBottom: { md: "0px", xs: "48px" },
            justifyContent: "space-between",
          }}
          direction="column"
          xs={10}
          sm={5}
          md={3}
        >
          <div>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "24px" }}
            >
              <Image
                width={72}
                height={72}
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
            sx={{
              justifySelf: { sm: "flex-end" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{ borderRadius: "8px", borderColor: "#6C46D6" }}
              target="_blank"
              href="https://app.keeperdao.com/vaults"
              rel="noopener noreferrer"
            >
              Start borrowing
            </Button>
          </Grid>
        </Grid>
        <Divider
          flexItem
          orientation="vertical"
          sx={{ display: { xs: "none", md: "block" } }}
        />
        <Grid
          container
          item
          sx={{
            height: { sm: 330 },
            marginLeft: { sm: "0px", xs: "16px" },
            marginBottom: { md: "0px", xs: "48px" },
            justifyContent: "space-between",
          }}
          direction="column"
          xs={10}
          sm={5}
          md={3}
        >
          <div>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "24px" }}
            >
              <Image
                width={72}
                height={72}
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
            sx={{
              justifySelf: { sm: "flex-end" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{ borderRadius: "8px", borderColor: "#6C46D6" }}
              target="_blank"
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
                opacity: 0.8,
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
                width={275}
                height={128}
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
                width={275}
                height={128}
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
                width={275}
                height={128}
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
                opacity: 0.8,
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
              href="https://polychainhedge.com/"
              rel="noopener noreferrer"
            >
              <Image
                width={275}
                height={128}
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
                width={275}
                height={128}
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
                width={275}
                height={128}
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
                opacity: 0.8,
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
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          <Grid item>
            <a
              target="_blank"
              href="https://github.com/keeperdao/docs/tree/master/audits"
              rel="noopener noreferrer"
            >
              <Image
                width={275}
                height={128}
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
                width={275}
                height={128}
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
                width={275}
                height={128}
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
