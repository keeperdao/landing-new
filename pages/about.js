import React from "react";

import Image from "next/image";
import Head from "next/head";

import theme from "../src/theme";

import {
  Grid,
  Typography,
  Button,
  Divider,
  Card,
  CardActionArea,
  SvgIcon,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import BorrowText from "../public/images/graphics/borrow_text.svg";
import TradeText from "../public/images/graphics/trade_text.svg";
import IntegrateText from "../public/images/graphics/integrate_text.svg";
import ArrowDiagonalUp from "../public/images/graphics/arrow.svg";

const AboutIntro = styled(Grid)(({ theme }) => ({
  maxWidth: "100%",
  marginBottom: "40px",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "8px 18px",
}));

const InfoCards = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "80px",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "8px 18px",
}));

const ProductIntro = styled(Grid)(({ theme }) => ({
  maxWidth: "698px",
  marginTop: "10px",
  marginBottom: "40px",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "8px 18px",
}));

const ProductCards = styled(Grid)(({ theme }) => ({
  width: "100%",
  marginBottom: "80px",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 0,
}));

function ProductCard(props) {
  const { children } = props;
  return (
    <Grid
      container
      item
      xs={10}
      sm={7}
      md={4}
      sx={{ padding: "4px", justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        container
        item
        direction="column"
        justifyContent="space-between"
        sx={{
          width: "100%",
          height: { xs: "auto", sm: "475px", md: "525px" },
          padding: "26px",
          margin: 0,
          backgroundColor: "rgba(9, 167, 243, 0.05)",
          borderRadius: "4px",
          color: "#525252",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

function PrincipleCard(props) {
  const { children, header_text, body_text, image_path } = props;
  return (
    <Grid
      container
      item
      sx={{
        width: "100%",
        padding: { xs: "4px 18px", md: "4px" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        item
        direction="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
          padding: "32px",
          margin: 0,
          backgroundColor: "rgba(9, 167, 243, 0.05)",
          borderRadius: "4px",
          color: "#525252",
        }}
      >
        <Grid item xs={10}>
          <Grid container direction="column" justifyContent="space-between">
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ margin: "0 0 8px 3px" }}
            >
              <Typography variant="paragraphBoldLabel" color="accent_light">
                PRINCIPLES
              </Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="flex-start"
              sx={{ marginBottom: "24px" }}
            >
              <Grid item maxWidth="471px">
                <Typography variant="headingTitle" color="#141118">
                  {header_text}
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row" justifyContent="flex-start">
              <Typography variant="bodyNormal2">{body_text}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            justifyContent="flex-end"
            alignItems="flex-start"
            sx={{ padding: 0, margin: 0 }}
          >
            <Image width={84} height={84} quality={100} src={image_path} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function About(props) {
  const { colorMode, setColorMode } = props;
  setColorMode("light");

  const [expanded, setExpanded] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Head>
        <title>About | KeeperDAO</title>
        <meta property="og:title" content="About | KeeperDAO" />
        <meta name="twitter:title" content="About | KeeperDAO" />
        <meta
          name="description"
          content="Learn about how KeeperDAO is creating a more profitable, fair and secure DeFi metaverse for users, protocols and Keepers."
        />
        <meta
          name="keywords"
          content="MEV, KeeperDAO, DEX, Keeper, wallet, exchange, aggregator, DeFi"
        ></meta>
      </Head>
      <div
        style={{
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          direction="column"
          maxWidth="730px"
          alignItems="center"
          sx={{
            padding: 0,
            margin: 0,
            alignSelf: "center",
          }}
        >
          <AboutIntro container item id="intro" direction="column">
            <Grid item sx={{ maxWidth: "698px" }}>
              <Grid item sx={{ margin: "0 0 16px 4px" }}>
                <Typography variant="paragraphBoldLabel" color="accent_light">
                  ABOUT KEEPERDAO
                </Typography>
              </Grid>
              <Grid item sx={{ marginBottom: "40px" }}>
                <Grid container maxWidth="557px">
                  <Typography variant="headingDisplay">
                    Creating a more profitable, fair and secure DeFi
                    <span>
                      <Typography
                        variant="headingDisplay"
                        sx={{
                          color: theme.palette.accent_light,
                        }}
                      >
                        {" metaverse"}
                      </Typography>
                      .
                    </span>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column" maxWidth="698px">
                  <Grid item sx={{ marginBottom: "24px" }}>
                    <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                      KeeperDAO is a DAO dedicated to Keepers and the work they
                      do. We are united around a shared mission: to bring about
                      a decentralised economy in which Keepers create more
                      efficient, secure, and egalitarian blockchain networks.
                    </Typography>
                  </Grid>
                  <Grid item sx={{ marginBottom: "24px" }}>
                    <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                      Together with them, we make DeFi a better place to do
                      business. Where users and protocols aren't at risk of
                      being exploited by miners and predatory bots, but are
                      instead protected by an Economy of Keepers, who will
                      coordinate, capture and fairly redistribute MEV back to
                      them.
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                      Because of our coordinating Keeper Economy we're not only
                      able to provide the most complete MEV protection in DeFi,
                      but by capturing and redistributing the available on-chain
                      profits back to our users and partners, we allow them to{" "}
                      <Typography variant="bodyNormal" sx={{ fontWeight: 600 }}>
                        get paid to play.
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </AboutIntro>
          <InfoCards container item id="info" direction="column">
            <Grid container item sx={{ width: "100%" }} justifyContent="center">
              <Grid
                container
                justifyContent="space-between"
                sx={{
                  padding: 0,
                  margin: 0,
                  color: "accent_light",
                  gap: { xs: "0", md: "2px" },
                }}
              >
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: "4px 0",
                    width: { xs: "100%", md: "49%" },
                  }}
                >
                  <CardActionArea
                    target="_blank"
                    href="https://blog.keeperdao.com/mission/"
                    rel="noopener noreferrer"
                  >
                    <Grid
                      container
                      item
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        height: "104px",
                        width: "100%",
                        padding: "32px",
                        margin: 0,
                        backgroundColor: "rgba(9, 167, 243, 0.05)",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="subtitleRegular">
                        Our Mission
                      </Typography>
                      <img
                        height={40}
                        width={40}
                        src={"/images/graphics/circle_arrow.png"}
                      />
                    </Grid>
                  </CardActionArea>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: "4px 0",
                    width: { xs: "100%", md: "49%" },
                  }}
                >
                  <CardActionArea
                    target="_blank"
                    href="https://keeperdao.com/files/roadmap.png"
                    rel="noopener noreferrer"
                  >
                    <Grid
                      container
                      item
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        height: "104px",
                        width: "100%",
                        padding: "32px",
                        margin: 0,
                        backgroundColor: "rgba(9, 167, 243, 0.05)",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="subtitleRegular">Roadmap</Typography>
                      <img
                        height={40}
                        width={40}
                        src={"/images/graphics/circle_arrow.png"}
                      />
                    </Grid>
                  </CardActionArea>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: { xs: "4px 0", md: "6px 0" },
                    width: { xs: "100%", md: "49%" },
                  }}
                >
                  <CardActionArea
                    target="_blank"
                    href="https://github.com/keeperdao/whitepaper/blob/main/whitepaper.pdf"
                    rel="noopener noreferrer"
                  >
                    <Grid
                      container
                      item
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        height: "104px",
                        width: "100%",
                        padding: "32px",
                        margin: 0,
                        backgroundColor: "rgba(9, 167, 243, 0.05)",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="subtitleRegular">
                        Whitepaper
                      </Typography>
                      <img
                        height={40}
                        width={40}
                        src={"/images/graphics/circle_arrow.png"}
                      />
                    </Grid>
                  </CardActionArea>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    padding: { xs: "4px 0", md: "6px 0" },
                    width: { xs: "100%", md: "49%" },
                  }}
                >
                  <CardActionArea
                    target="_blank"
                    href="https://docs.keeperdao.com/reference/"
                    rel="noopener noreferrer"
                  >
                    <Grid
                      container
                      item
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{
                        height: "104px",
                        width: "100%",
                        padding: "32px",
                        margin: 0,
                        backgroundColor: "rgba(9, 167, 243, 0.05)",
                        borderRadius: "4px",
                      }}
                    >
                      <Typography variant="subtitleRegular">
                        Documentation
                      </Typography>
                      <img
                        height={40}
                        width={40}
                        src={"/images/graphics/circle_arrow.png"}
                      />
                    </Grid>
                  </CardActionArea>
                </Grid>
              </Grid>
            </Grid>
          </InfoCards>
          <Grid
            container
            item
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              width: "100%",
              padding: "0 18px",
            }}
          >
            <div style={{ zIndex: 1 }}>
              <Image
                priority
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
          <ProductIntro container item direction="column">
            <Grid item sx={{ marginBottom: "32px" }}>
              <Grid container>
                <Typography variant="headingTitle">Products</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" maxWidth="486px">
                <Grid item>
                  <Typography variant="bodyNormal" sx={{ color: "#525252" }}>
                    On top of our core technology, KeeperDAO is developing a
                    novel suite of products for use by individual and
                    institutional users as well as other DeFi protocols.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </ProductIntro>
        </Grid>
        <ProductCards
          container
          id="products"
          direction="row"
          sx={{ gap: { xs: "30px", md: "0" } }}
        >
          <ProductCard>
            <Grid item>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <Image
                  width={80}
                  height={80}
                  quality={100}
                  src={"/images/graphics/trade.png"}
                />
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "8px" }}
              >
                <Typography variant="paragraphBoldLabel" color="accent_light">
                  THE HIDING GAME
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <TradeText />
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <Typography variant="bodyNormal2">
                  Through the Hiding Game, DeFi users can get paid to trade
                  assets with zero slippage, zero gas fees, and full
                  MEV-protection, and earn ROOK in the process.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Button
                variant="outlined-blue"
                fullWidth
                sx={{
                  borderRadius: "8px",
                  fontSize: "16px",
                  height: "56px",
                }}
                endIcon={
                  <SvgIcon
                    color="inherit"
                    component={ArrowDiagonalUp}
                    viewBox={"0 0 19 19"}
                    sx={{ marginTop: "6px" }}
                  />
                }
                target="_blank"
                href="https://app.keeperdao.com/trade"
                rel="noopener noreferrer"
              >
                Start trading
              </Button>
            </Grid>
          </ProductCard>
          <ProductCard>
            <Grid item>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <Image
                  width={80}
                  height={80}
                  quality={100}
                  src={"/images/graphics/borrow.png"}
                />
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "8px" }}
              >
                <Typography variant="paragraphBoldLabel" color="accent_light">
                  THE HIDING VAULT
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <BorrowText />
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <Typography variant="bodyNormal2">
                  Through the Hiding Vault, users can borrow assets from major
                  lending protocols such as Compound and Aave in a more secure
                  and profitable way, while earning additional yield in ROOK.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Button
                variant="outlined-blue"
                fullWidth
                sx={{ borderRadius: "8px", fontSize: "16px", height: "56px" }}
                endIcon={
                  <SvgIcon
                    color="inherit"
                    component={ArrowDiagonalUp}
                    viewBox={"0 0 19 19"}
                    sx={{ marginTop: "6px" }}
                  />
                }
                target="_blank"
                href="https://app.keeperdao.com/vaults"
                rel="noopener noreferrer"
              >
                Start borrowing
              </Button>
            </Grid>
          </ProductCard>
          <ProductCard>
            <Grid item>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <Image
                  width={80}
                  height={80}
                  quality={100}
                  src={"/images/graphics/earn.png"}
                />
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "8px" }}
              >
                <Typography variant="paragraphBoldLabel" color="accent_light">
                  THE HIDING BOOK
                </Typography>
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "17px" }}
              >
                <IntegrateText />
              </Grid>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                sx={{ marginBottom: "24px" }}
              >
                <Typography variant="bodyNormal2">
                  The Hiding Book integration allows DeFi protocols to provide
                  their users with completely costless, MEV-protected,
                  zero-slippage limit orders, while also benefitting from
                  unmatched liquidity sourcing.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Button
                variant="outlined-blue"
                fullWidth
                endIcon={
                  <SvgIcon
                    color="inherit"
                    component={ArrowDiagonalUp}
                    viewBox={"0 0 19 19"}
                    sx={{ marginTop: "6px" }}
                  />
                }
                sx={{ borderRadius: "8px", fontSize: "16px", height: "56px" }}
                href="/core-tech/hiding-book"
              >
                Learn more
              </Button>
            </Grid>
          </ProductCard>
        </ProductCards>
        <Grid
          container
          direction="column"
          maxWidth="730px"
          alignItems="center"
          sx={{
            padding: 0,
            margin: 0,
            alignSelf: "center",
            marginBottom: "100px",
          }}
        >
          <ProductIntro
            container
            item
            direction="column"
            sx={{ marginBottom: 0, marginTop: 0 }}
          >
            <Grid item sx={{ marginBottom: "32px" }}>
              <Grid container>
                <Typography variant="headingTitle">
                  Founding Principles
                </Typography>
              </Grid>
            </Grid>
          </ProductIntro>
          <PrincipleCard
            header_text={"Reward those that add value"}
            body_text={
              "Users, applications and protocols are what makes DeFi valuable. MEV profits shouldn't come at their expense. Instead, they should be rewarded to a share of any surplus profit gained from their activity."
            }
            image_path={"/images/graphics/trophy.png"}
          />
          <PrincipleCard
            header_text={"MEV doesn't belong to block producers"}
            body_text={
              "Keepers discover MEV and provide liquidity to capture it; protocols and users create MEV with their markets, products, and transactions. Block producers are incidental to the MEV economy and have no claim to the value within the blocks they validate or mine."
            }
            image_path={"/images/graphics/mev.png"}
          />
          <PrincipleCard
            header_text={'Search for "win-win" scenarios'}
            body_text={
              "Coordination and cooperation can be more competitive than going at it alone, especially in the open world of DeFi. We want to embody coordination not only in our protocol design, but in business practices and funding, to create a DAO that looks to work with others, shares its profits to gain even more, and welcomes any partnership or contribution where both parties stand to gain."
            }
            image_path={"/images/graphics/rooks.png"}
          />
          <PrincipleCard
            header_text={"Solve hard problems"}
            body_text={
              'As co-founder Joey Zacherl said, "we\'re a home run first, singles and doubles later type of ball club." We want to be a DAO focused on providing lasting solutions to the complex problems of MEV and the Keeper economy. Solutions that generalize and can flourish in many directions.'
            }
            image_path={"/images/graphics/solve.png"}
          />
          <PrincipleCard
            header_text={"Decentralise"}
            body_text={
              "We believe in the power of decentralisation to create stronger communities and modes of production. We are committed to creating and experimenting with all approaches that can allow us to become a stronger DAO."
            }
            image_path={"/images/graphics/kip.png"}
          />
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
            marginBottom: "100px",
          }}
        >
          <Grid
            container
            item
            direction="row"
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "40px",
              paddingLeft: { xs: "16px", md: 0 },
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
            sx={{ justifyContent: { xs: "center", md: "space-between" } }}
          >
            <Grid
              item
              sx={{
                padding: "2px 4px",
                width: { xs: "247px", md: "200px", header: "234px" },
              }}
            >
              <a
                target="_blank"
                href="https://polychain.capital/"
                rel="noopener noreferrer"
              >
                <Image
                  width={247}
                  height={115}
                  quality={100}
                  src={"/images/investors/polychain_light.png"}
                />
              </a>
            </Grid>
            <Grid
              item
              sx={{
                padding: "2px 4px",
                width: { xs: "247px", md: "200px", header: "234px" },
              }}
            >
              <a
                target="_blank"
                href="https://www.threearrowscap.com/"
                rel="noopener noreferrer"
              >
                <Image
                  width={247}
                  height={115}
                  quality={100}
                  src={"/images/investors/threearrows_light.png"}
                />
              </a>
            </Grid>
            <Grid
              item
              sx={{
                padding: "2px 4px",
                width: { xs: "247px", md: "200px", header: "234px" },
              }}
            >
              <a
                target="_blank"
                href="https://www.ambergroup.io/"
                rel="noopener noreferrer"
              >
                <Image
                  width={247}
                  height={115}
                  quality={100}
                  src={"/images/investors/amber_light.png"}
                />
              </a>
            </Grid>
            <Grid
              item
              sx={{
                padding: "2px 4px",
                width: { xs: "247px", md: "200px", header: "234px" },
              }}
            >
              <a
                target="_blank"
                href="https://www.fisher8.capital/"
                rel="noopener noreferrer"
              >
                <Image
                  width={247}
                  height={115}
                  quality={100}
                  src={"/images/investors/fisher8_light.png"}
                />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
