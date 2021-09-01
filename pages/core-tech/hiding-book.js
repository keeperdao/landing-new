import React from "react";

import Image from "next/image";

import theme from "../../src/theme";

import { Grid, Typography, Button, Divider } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const HidingBookIntro = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "80px",
  justifyContent: "space-around",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const AsUsedBy = styled(Grid)(({ theme }) => ({
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

const Keepers = styled(Grid)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "calc(-50vw + 50%)",
  marginBottom: "128px",
  justifyContent: "center",
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: { sm: "10px", xs: "20px" },
  paddingRight: { sm: "10px", xs: "20px" },
  backgroundColor: "#1D1842",
}));

const PartnerRewards = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const WhyIntegrate = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const HowToIntegrate = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "128px",
  justifyContent: "space-around",
  alignItems: "center",
  background: "rgba(9, 167, 243, 0.05)",
  borderRadius: "4px",
}));

const FAQ = styled(Grid)(({ theme }) => ({
  width: "100vw",
  position: "relative",
  left: "calc(-50vw + 50%)",
  marginBottom: 0,
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "128px",
  paddingBottom: "128px",
  backgroundColor: "rgba(143, 143, 143, 0.05)",
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: "none",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    paddingTop: "40px",
    paddingBottom: "40px",
    transform: "scale(1)",
    transition: "0.35s all ease",
    "&.Mui-expanded": {
      //paddingBottom: "0px",
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(180deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: 0,
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  marginBottom: "16px",
  //borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function HidingBook(props) {
  const { colorMode, setColorMode } = props;
  setColorMode("light");

  const [expanded, setExpanded] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ padding: 0, margin: 0 }}>
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
            {/*<AutoplaySlider play={true} interval={1000}>
              <Typography variant="headingDisplay">YEETUS</Typography>
              <Typography variant="headingDisplay">BEETUS</Typography>
            </AutoplaySlider>*/}
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
              <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                Integrating with the Hiding Book allows you to offer your users
                free and fully MEV-protected limit orders, while benefitting
                from unmatched liquidity efficiency.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "24px" }}>
              <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                Additionally, any available MEV will be captured by our Keepers
                and handed back to you and your users{" "}
                <Typography variant="bodyNormal" sx={{ fontStyle: "italic" }}>
                  pro rata.
                </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                In this way, by integrating with the Hiding Book, both our
                partners and their users will{" "}
                <Typography variant="bodyNormal" sx={{ fontWeight: 600 }}>
                  get paid to play
                </Typography>
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
      <AsUsedBy continer id="as-used-by" direction="column">
        <Grid container item justifyContent="center" alignItems="center">
          <Image
            height={107}
            width={659}
            src={"/images/graphics/as_used_by.png"}
          />
        </Grid>
      </AsUsedBy>
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
              <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                MEV is a big and growing problem in DeFi, resulting in slippage,
                higher gas fees, failed transactions, and frustrated users. And
                Ethereum 2.0 won't fix it.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: "24px" }}>
              <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                In the competitive DeFi landscape, protecting yourself and your
                users from predatory MEV attacks has moved from a nice perk to a
                requisite.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
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
            sx={{ padding: "32px", color: "#525252", borderRadius: "4px" }}
          >
            <Typography
              variant="bodyBold"
              align="center"
              sx={{ maxWidth: "600px", color: "#525252" }}
            >
              You can make that $0 for your exchange, aggregator, wallet or DeFi
              product through integrating with the Hiding Book.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "rgba(9, 167, 243, 0.05)",
            borderRadius: "4px 4px 0px 0px",
          }}
        >
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
        <Grid
          item
          sx={{
            backgroundColor: "rgba(9, 167, 243, 0.2)",
            borderRadius: "0px 0px 4px 4px",
          }}
        >
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
            sx={{
              backgroundColor: "rgba(9, 167, 243, 0.05)",
              borderRadius: "4px 4px 0px 0px",
            }}
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
              <Grid item sx={{ color: "#525252" }}>
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
            sx={{
              backgroundColor: "rgba(108, 70, 214, 0.05)",
              borderRadius: "0px 0px 4px 4px",
            }}
          >
            <Grid
              container
              item
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              sx={{
                paddingTop: "32px",
                paddingBottom: 0,
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
              <Grid item sx={{ color: "#525252", marginBottom: 0 }}>
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
          <Grid item sx={{ marginTop: 0 }}>
            <Image
              width={698}
              height={96}
              src={"/images/graphics/logos_purple.png"}
            />
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
                  borderRadius: "4px",
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
                  borderRadius: "4px",
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
                  borderRadius: "4px",
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
                  borderRadius: "4px",
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
          <Grid container item sm={12} md={9} sx={{ color: "#525252" }}>
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
      <SideTitle container id="why-use-limit-orders" direction="row">
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
          <Grid container item sm={12} md={9} sx={{ color: "#525252" }}>
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
                borderRadius: "4px",
              }}
            >
              <Typography
                align="left"
                variant="bodyNormal"
                sx={{ color: "#141414" }}
              >
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
      <Keepers
        container
        id="keepers"
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          container
          item
          maxWidth="840px"
          alignItems="center"
          justifyContent="center"
          sx={{ color: theme.palette.text.primary_dark }}
        >
          <Grid item xs={10} sm={6}>
            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="flex-start"
              maxWidth="345px"
            >
              <Grid item sx={{ marginBottom: "64px" }}>
                <Typography variant="headingTitle">
                  KeeperDAO's Keepers can source liquidity from anywhere.
                </Typography>
              </Grid>
              <Grid item sx={{ marginBottom: "16px" }}>
                <Typography variant="subtitleRegular">
                  All DEX networks
                </Typography>
              </Grid>
              <Grid item sx={{ marginBottom: "40px" }}>
                <Grid container direction="row">
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/uniswap_kd.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/sushi_kd.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/0x_kd.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/1inch_kd.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/plus.png"}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ marginBottom: "16px" }}>
                <Typography variant="subtitleRegular">
                  All Centralized Exchanges
                </Typography>
              </Grid>
              <Grid item sx={{ marginBottom: "40px" }}>
                <Grid container direction="row">
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/binance.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/huobi.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img width={36} height={36} src={"/images/logos/ftx.png"} />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/coinbase.png"}
                    />
                  </Grid>
                  <Grid item sx={{ marginRight: "32px" }}>
                    <img
                      width={36}
                      height={36}
                      src={"/images/logos/plus.png"}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} sm={6}>
            <Image
              height={520}
              width={416}
              src={"/images/graphics/keeper_liquidity.png"}
            />
          </Grid>
        </Grid>
      </Keepers>
      <PartnerRewards container id="partner-rewards">
        <Grid item xs={9} md={6}>
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            sx={{ marginBottom: "32px" }}
          >
            <Grid container sx={{ maxWidth: "345px", marginBottom: "32px" }}>
              <Grid item>
                <Typography variant="headingTitle">
                  Partner Rewards Program
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ maxWidth: "416px", color: "#525252" }}>
              <Grid item sx={{ marginBottom: "24px" }}>
                <Typography variant="bodyNormal">
                  By default, users will receive 100% of the filled order's
                  reward based on the amount of arbitrage captured by a Keeper.
                </Typography>
              </Grid>
              <Grid item sx={{ marginBottom: "24px" }}>
                <Typography variant="bodyNormal">
                  Registered partners can opt to receive 5% of the total reward
                  amount for themselves.
                </Typography>
              </Grid>
              <Grid item sx={{ marginBottom: "24px" }}>
                <Typography variant="bodyNormal">
                  This incentivizes partners to integrate with the Hiding Book
                  and enables them to generate revenue from the integration.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="text-light"
                  sx={{
                    marginLeft: "-16px",
                    fontSize: "18px",
                    color: theme.palette.accent,
                    fontWeight: 500,
                  }}
                >
                  Partner Rewards Guide
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} md={6}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item sx={{ borderRadius: "4px" }}>
              <Image
                height={374}
                width={345}
                src={"/images/graphics/mev_rewards.png"}
              />
            </Grid>
          </Grid>
        </Grid>
      </PartnerRewards>
      <WhyIntegrate container id="why-integrate" direction="column">
        <Grid item sx={{ marginBottom: "24px" }}>
          <Grid
            container
            maxWidth="220px"
            direction="row"
            justifyContent="center"
          >
            <Typography variant="headingTitle" align="center">
              Why integrate
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ marginBottom: "40px" }}>
          <Grid
            container
            maxWidth="416px"
            direction="row"
            justifyContent="center"
            sx={{ color: "#525252" }}
          >
            <Typography variant="bodyNormal" align="center">
              By integrating with the Hiding Book, partner exchanges provide
              their users
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sx={{ width: "100%" }} justifyContent="center">
          <Grid
            container
            direction="row"
            sx={{ maxWidth: "840px", padding: 0, margin: 0 }}
          >
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "3px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "104px",
                  background: "rgba(143, 143, 143, 0.05)",
                  color: "#525252",
                  padding: "16px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="bodyNormal" align="center">
                  Full control over their trade execution price
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "3px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "104px",
                  background: "rgba(143, 143, 143, 0.05)",
                  color: "#525252",
                  padding: "16px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="bodyNormal" align="center">
                  Their best chance of getting their orders filled{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "3px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "104px",
                  background: "rgba(143, 143, 143, 0.05)",
                  color: "#525252",
                  padding: "16px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="bodyNormal" align="center">
                  Zero slippage{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "3px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "104px",
                  background: "rgba(143, 143, 143, 0.05)",
                  color: "#525252",
                  padding: "16px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="bodyNormal" align="center">
                  The ability to trade assets for free{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "3px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "104px",
                  background: "rgba(143, 143, 143, 0.05)",
                  color: "#525252",
                  padding: "16px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="bodyNormal" align="center">
                  Full MEV protection on limit orders{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "3px" }}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                item
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  height: "104px",
                  background: "rgba(143, 143, 143, 0.05)",
                  color: "#525252",
                  padding: "16px",
                  borderRadius: "4px",
                }}
              >
                <Typography variant="bodyNormal" align="center">
                  MEV rewards in $ROOK{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </WhyIntegrate>
      <HowToIntegrate container id="how-to-integrate" direction="column">
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              item
              sx={{
                paddingTop: { xs: "16px", sm: "48px" },
                paddingLeft: { xs: "16px", sm: "48px" },
                paddingRight: { xs: "16px", sm: "48px" },
                paddingBottom: 0,
              }}
            >
              <Grid container item sx={{ marginBottom: "32px" }}>
                <Typography align="left" variant="headingTitle">
                  How to integrate
                </Typography>
              </Grid>
              <Grid
                container
                item
                sx={{ marginBottom: "24px", color: "#525252" }}
              >
                <Typography align="left" variant="bodyNormal">
                  You can integrate the Hiding Book by following the integration
                  guide.
                </Typography>
              </Grid>
              <Grid
                container
                item
                sx={{ marginBottom: "32px", color: "#525252" }}
              >
                <Typography align="left" variant="bodyNormal">
                  Integration is relatively straightforward, mainly depending on
                  whether or not your exchange has limit order functionality set
                  up already. If anything is unclear or if you have any further
                  questions, contact us and we'll help you out.
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                spacing={1}
              >
                <Grid item>
                  <Button variant="contained" sx={{ borderRadius: "8px" }}>
                    Talk to the team
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined-light"
                    sx={{
                      borderRadius: "8px",
                      borderColor: theme.palette.accent_light,
                      color: theme.palette.accent_light,
                    }}
                  >
                    Integration guide
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: 0, marginBottom: "-4px" }}>
          <Image
            width={840}
            height={116}
            src={"/images/graphics/logos_azure.png"}
          />
        </Grid>
      </HowToIntegrate>
      <FAQ container id="faq" direction="row">
        <Grid
          container
          item
          maxWidth="840px"
          direction="column"
          sx={{
            paddingLeft: { sm: "10px", xs: "20px" },
            paddingRight: { sm: "10px", xs: "20px" },
          }}
        >
          <Grid container item width="345px" sx={{ marginBottom: "64px" }}>
            <Typography variant="headingTitle" align="left">
              Frequently Asked Questions
            </Typography>
          </Grid>
          <Grid
            container
            item
            direction="column"
            sx={{ color: theme.palette.text.primary_light }}
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: theme.palette.text.primary_light }}
                  />
                }
              >
                <Typography variant="subtitleRegular">
                  What is required to integrate and how long does it take?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none", color: "#525252" }}>
                <Typography variant="bodyNormal">
                  Integration is relatively straightforward, mainly depending on
                  whether or not your exchange has limit order functionality set
                  up already. The required components are an 0xv4 integration
                  and front end limit order functionality. For more, consult our
                  Integration Guide.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: theme.palette.text.primary_light }}
                  />
                }
              >
                <Typography variant="subtitleRegular">
                  What kind of support do you offer?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none", color: "#525252" }}>
                <Typography variant="bodyNormal">
                  We can offer engineering and testing support and will set up a
                  dedicated channel with representatives who will be available
                  to communicate with you when you need it. You can also receive
                  advance notice of planned protocol changes and assistance with
                  upgrades if necessary.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: theme.palette.text.primary_light }}
                  />
                }
              >
                <Typography variant="subtitleRegular">
                  Can I talk to someone from your team?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none", color: "#525252" }}>
                <Typography variant="bodyNormal">
                  Of course, your best bet is to contact either Lapras or Tommy
                  inside the KeeperDAO Discord.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: theme.palette.text.primary_light }}
                  />
                }
              >
                <Typography variant="subtitleRegular">
                  Can limit orders be filled with only liquidity from my
                  exchange?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none", color: "#525252" }}>
                <Typography variant="bodyNormal">Not at this time.</Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: theme.palette.text.primary_light }}
                  />
                }
              >
                <Typography variant="subtitleRegular">
                  Is The Hiding Book available for L2 as well?
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none", color: "#525252" }}>
                <Typography variant="bodyNormal">
                  Not yet, but it's planned for 2022.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
          </Grid>
        </Grid>
      </FAQ>
    </div>
  );
}
