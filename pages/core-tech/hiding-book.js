import React from "react";

import theme from "../../src/theme";

import { Grid, Typography, Button, Divider } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import Image from "next/image";

const HidingBookIntro = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "80px",
  justifyContent: "space-around",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const MEVIntro = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "space-around",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const Benefits = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const UseCases = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const SideTitle = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const HGFlowChart = styled(Grid)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "calc(-50vw + 50%)",
  marginBottom: "128px",
  justifyContent: "center",
  paddingTop: "48px",
  paddingBottom: "48px",
  paddingLeft: "10px",
  paddingRight: "10px",
  backgroundColor: "rgba(9, 167, 243, 0.05)",
}));

export default function HidingBook(props) {
  const { colorMode, setColorMode } = props;
  setColorMode("light");
  return (
    <div>
      <HidingBookIntro container id="intro" direction="column">
        <Grid item sx={{ marginBottom: "16px" }}>
          <Typography variant="paragraphBoldLabel" color="accent">
            THE HIDING BOOK
          </Typography>
        </Grid>
        <Grid item sx={{ marginBottom: "40px" }}>
          <Grid container maxWidth="769px">
            <Typography variant="headingDisplay">
              Get paid to integrate the most comprehensive MEV protection into
              your wallet.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            maxWidth="620px"
            sx={{
              marginBottom: "56px",
            }}
          >
            <Grid item sx={{ marginBottom: "24px" }}>
              <Typography variant="bodyNormal">
                Integrating with the Hiding Book allows you to offer your users
                free and fully MEV-protected limit orders, while benefitting
                from unmatched liquidity efficiency.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "24px" }}>
              <Typography variant="bodyNormal">
                Additionally, any available MEV will be captured by our Keepers
                and handed back to you and your users pro rata.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="bodyNormal">
                In this way, by integrating with the Hiding Book, both our
                partners and their users will get paid to play.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent={{ xs: "center", sm: "flex-start" }}
          >
            <Grid item>
              <Button
                variant="contained"
                sx={{
                  width: "275px",
                  height: "56px",
                  marginRight: { xs: 0, sm: "8px" },
                  marginBottom: "8px",
                  borderRadius: "8px",
                }}
              >
                Questions? Let's chat
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined-blue"
                sx={{ width: "275px", height: "56px", borderRadius: "8px" }}
              >
                Go to docs
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </HidingBookIntro>
      <Grid
        container
        item
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          marginBottom: "24px",
          width: "100%",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div style={{ zIndex: 1 }}>
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
            zIndex: 0,
            height: "4px",
            width: "231px",
            opacity: 0.8,
            background:
              "linear-gradient(91.6deg, #6C46D6 0%, #4F63DF 52.08%, #09A7F3 100%)",
          }}
        />
      </Grid>
      <MEVIntro container id="mev" direction="column">
        <Grid item sx={{ marginBottom: "32px" }}>
          <Grid container maxWidth="373px">
            <Typography variant="headingTitle">
              Every day, MEV bots are exploiting your users
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            maxWidth="699px"
            sx={{
              marginBottom: "32px",
            }}
          >
            <Grid item sx={{ marginBottom: "24px" }}>
              <Typography variant="bodyNormal">
                MEV is a big and growing problem in DeFi, resulting in slippage,
                higher gas fees, failed transactions, and frustrated users. And
                Ethereum 2.0 won't fix it.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "24px" }}>
              <Typography variant="bodyNormal">
                In the competitive DeFi landscape, protecting yourself and your
                users from predatory MEV attacks has moved from a nice perk to a
                requisite.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="bodyNormal">
                On average this year, users and protocols are being manipulated
                out of $2,300,000 in MEV per day.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            marginBottom: "32px",
            backgroundColor: "rgba(9, 167, 243, 0.05)",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "32px", color: "#525252" }}
          >
            <Typography
              variant="bodyBold"
              align="center"
              sx={{ maxWidth: "600px" }}
            >
              You can make that $0 for your exchange, aggregator, wallet or DeFi
              product through integrating with the Hiding Book.
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: "rgba(9, 167, 243, 0.05)" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              height={318}
              width={840}
              src={"/images/graphics/mev_chart.png"}
            />
          </Grid>
        </Grid>
        <Grid item sx={{ backgroundColor: "rgba(9, 167, 243, 0.2)" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ padding: "24px", color: "#09A7F3" }}
          >
            <Typography
              variant="paragraphRegularMedium"
              align="center"
              sx={{ maxWidth: "619px" }}
            >
              Lower bound estimate of cumulative Extracted MEV on Ethereum L1
              alone (source: Flashbots)
            </Typography>
          </Grid>
        </Grid>
      </MEVIntro>
      <Benefits container id="benefits" direction="column">
        <Grid item sx={{ marginBottom: "40px" }}>
          <Grid container justifyContent="center">
            <Typography variant="headingTitle" align="center">
              Why use the Hiding Book
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="698px"
        >
          <Grid
            container
            item
            justifyContent="center"
            sx={{ backgroundColor: "rgba(9, 167, 243, 0.05)" }}
          >
            <Grid
              container
              item
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{
                paddingTop: "32px",
                paddingBottom: "32px",
                paddingLeft: "16px",
                paddingRight: "16px",
                maxWidth: "416px",
              }}
            >
              <Grid item sx={{ marginBottom: "16px" }}>
                <Typography
                  variant="subtitleRegular"
                  align="left"
                  sx={{
                    color: theme.palette.accent_light,
                    marginRight: "8px",
                  }}
                >
                  User
                </Typography>
                <Typography variant="subtitleRegular" align="left">
                  Benefits
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="paragraphRegularMedium"
                  sx={{ lineHeight: "21px" }}
                >
                  • Free and fully MEV-protected limit orders
                </Typography>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Zero slippage
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Full control over trade execution price
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Receive MEV rewards if order resulted in captured MEV
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Soft Cancel, Instant Fill and Stop Limit (coming soon)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            sx={{ backgroundColor: "rgba(108, 70, 214, 0.05)" }}
          >
            <Grid
              container
              item
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{
                paddingTop: "32px",
                paddingBottom: "32px",
                paddingLeft: "16px",
                paddingRight: "16px",
                maxWidth: "416px",
              }}
            >
              <Grid item sx={{ marginBottom: "16px" }}>
                <Typography
                  variant="subtitleRegular"
                  align="left"
                  sx={{
                    color: theme.palette.accent,
                    marginRight: "8px",
                  }}
                >
                  Partner
                </Typography>
                <Typography variant="subtitleRegular" align="left">
                  Benefits
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="paragraphRegularMedium"
                  sx={{ lineHeight: "21px" }}
                >
                  • Free and fully MEV-protected limit orders
                </Typography>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Receive optional 5% of MEV Rewards
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Unmatched liquidity efficiency
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Easy integration
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Client-friendly API
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Smooth front end user experience
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Round the clock technical support
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="paragraphRegularMedium"
                    sx={{ lineHeight: "21px" }}
                  >
                    • Minimal KeeperDAO branding
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Benefits>
      <UseCases container id="use-cases" direction="column">
        <Grid item sx={{ marginBottom: "40px" }}>
          <Grid container justifyContent="center">
            <Typography variant="headingTitle" align="center">
              Use Cases
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sx={{ width: "100%" }} justifyContent="center">
          <Grid container sx={{ maxWidth: "840px", padding: 0, margin: 0 }}>
            <Grid
              container
              item
              xs={12}
              sm={6}
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "4px" }}
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "130px",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(9, 167, 243, 0.05)",
                  color: "#525252",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Decentralized Exchanges
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "4px" }}
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "130px",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(9, 167, 243, 0.05)",
                  color: "#525252",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Aggregators
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "4px" }}
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "130px",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(9, 167, 243, 0.05)",
                  color: "#525252",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  Wallets
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              justifyContent="center"
              alignItems="center"
              sx={{ padding: "4px" }}
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  height: "130px",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  backgroundColor: "rgba(9, 167, 243, 0.05)",
                  color: "#525252",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "24px",
                    lineHeight: "29px",
                  }}
                >
                  DeFi Products
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </UseCases>
      <SideTitle container id="how-does-it-work" direction="row">
        <Grid container item sx={{ maxWidth: "840px" }}>
          <Grid
            item
            sm={12}
            md={3}
            sx={{ padding: "16px", marginBottom: "16px" }}
          >
            <Typography align="left" variant="headingTitle">
              How does it work?
            </Typography>
          </Grid>
          <Grid container item sm={12} md={9}>
            <Grid item sx={{ padding: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                Integrating with the Hiding Book allows partners to route their
                limit orders through the Hiding Game, to be executed by
                integrated KeeperDAO Keepers.
              </Typography>
            </Grid>
            <Grid item sx={{ padding: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                This is a win-win because both user and Keeper will work
                together to maximize profit generation from a trade the user was
                going to perform anyways.
              </Typography>
            </Grid>
            <Grid item sx={{ padding: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                Since our Keepers have access to virtually any liquidity source
                the Hiding Book is able to efficiently fill limit orders with
                zero slippage, fully MEV-protected.
              </Typography>
            </Grid>
            <Grid item sx={{ padding: "16px", marginBottom: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                Additionally, any available MEV is captured by our Keepers and
                redistributed pro rata to the user and partnering exchange.
              </Typography>
            </Grid>
            <Grid item sx={{ padding: "16px" }}>
              <Button
                variant="outlined-blue"
                sx={{ width: "300px", height: "56px", borderRadius: "8px" }}
              >
                Technical Documentation
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </SideTitle>
      <HGFlowChart
        container
        id="hiding-game"
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Grid container sx={{ width: "100%", maxWidth: "828px" }}>
            <Image
              width={828}
              height={368}
              src={"/images/graphics/hiding_book.png"}
            />
          </Grid>
        </Grid>
      </HGFlowChart>
      <SideTitle container id="how-does-it-work" direction="row">
        <Grid container item sx={{ maxWidth: "840px" }}>
          <Grid
            item
            sm={12}
            md={3}
            sx={{ padding: "16px", marginBottom: "16px" }}
          >
            <Typography align="left" variant="headingTitle">
              Why use limit orders
            </Typography>
          </Grid>
          <Grid container item sm={12} md={9}>
            <Grid item sx={{ padding: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                Limit orders provide traders guaranteed execution price and
                allows them to trade bigger size with zero slippage, as long as
                the liquidity can be found.
              </Typography>
            </Grid>
            <Grid item sx={{ padding: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                Normally, for market makers and institutional traders
                (colloquially, 'whales') access to sufficient liquidity is a
                problem in DeFi, leaving them unable to place large orders
                without suffering from slippage and being at risk of MEV
                attacks.
              </Typography>
            </Grid>
            <Grid item sx={{ padding: "16px" }}>
              <Typography align="left" variant="bodyNormal">
                This problem isn't exclusive to the bigger players in DeFi, as
                the scattered liquidity across DEXs and CEXs (especially for
                less liquid token pairs) can cause smaller traders to suffer
                from the same issues.
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                padding: "16px",
                backgroundColor: "rgba(9, 167, 243, 0.05)",
              }}
            >
              <Typography align="left" variant="bodyNormal">
                Integrating with the Hiding Book fixes the liquidity
                fragmentation problem by enlisting Keepers, who are able to
                leverage bespoke order execution strategies and can source
                liquidity from virtually anywhere, whether that's from DEXs,
                CEXs, OTC, or somewhere else.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </SideTitle>
    </div>
  );
}
