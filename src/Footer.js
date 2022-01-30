import * as React from "react";

import {
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

import Image from "next/image";

import Logo from "../public/images/logos/KeeperDAO_Logo_Inline_White.svg";
import Github from "../public/images/logos/GitHub.svg";
import Discord from "../public/images/logos/Discord.svg";
import Twitter from "../public/images/logos/Twitter.svg";
import Youtube from "../public/images/logos/Youtube.svg";
import theme from "./theme";

const TextButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "17px",
  marginTop: 0,
  paddingTop: 0,
}));

export default function Footer(props) {
  const { colorMode, setColorMode } = props;
  return (
    <div
      style={{
        background: "none",
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Grid
          container
          direction="column"
          sx={{
            paddingTop: "40px",
            padding: "40px 18px 0px",
            zIndex: 2,
          }}
        >
          <Grid
            container
            item
            direction="row"
            sx={{
              color: theme.palette.text.primary_dark,
              zIndex: 3,
              justifyContent: { xs: "space-evenly", header: "space-between" },
            }}
          >
            <Grid
              container
              item
              direction="column"
              sx={{
                maxWidth: "150px",
                padding: { xs: "0 20px", header: "0 8px" },
              }}
            >
              <Grid
                item
                sx={{
                  marginBottom: "12px",
                  marginTop: { xs: "40px", md: "0px" },
                }}
              >
                <Typography align="left" variant="paragraphBoldLarge">
                  KeeperDAO
                </Typography>
              </Grid>
              <Grid item>
                <TextButton
                  sx={{ zIndex: 3 }}
                  variant="text-footer"
                  href="/about"
                  rel="noopener noreferrer"
                >
                  About{" "}
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  sx={{ zIndex: 3 }}
                  variant="text-footer"
                  target="_blank"
                  href="https://blog.keeperdao.com/labs/"
                  rel="noopener noreferrer"
                >
                  KD Labs{" "}
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  sx={{ zIndex: 3 }}
                  target="_blank"
                  href="https://blog.keeperdao.com/mission/"
                  rel="noopener noreferrer"
                >
                  Mission
                </TextButton>
              </Grid>
              {/*<Grid item>
                <TextButton variant="text-dark" sx={{ zIndex: 3 }}>Team</TextButton>
              </Grid>*/}
              <Grid item>
                <TextButton
                  variant="text-footer"
                  sx={{ zIndex: 3 }}
                  target="_blank"
                  href="mailto:kd@keeperdao.com"
                  rel="noopener noreferrer"
                >
                  Press
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://keeperdao-labs.notion.site/Open-Roles-45591931333b410bacfcafad848f3912"
                  rel="noopener noreferrer"
                >
                  Careers{" "}
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://keeperdao-labs.notion.site/KeeperDAO-Brand-Assets-bca7bce9872b4e278dce1cf45fd70e56"
                  rel="noopener noreferrer"
                >
                  Branding{" "}
                </TextButton>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              sx={{
                maxWidth: "150px",
                padding: { xs: "0 20px", header: "0 8px" },
              }}
            >
              <Grid
                item
                sx={{
                  marginBottom: "12px",
                  marginTop: { xs: "40px", md: "0px" },
                }}
              >
                <Typography align="left" variant="paragraphBoldLarge">
                  Core Tech
                </Typography>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  href="/core-tech/hiding-book"
                  onClick={() => setColorMode("light")}
                >
                  Hiding Book
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://docs.keeperdao.com/reference/products/borrow/jitu-underwriter"
                  rel="noopener noreferrer"
                >
                  JITU
                </TextButton>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              sx={{
                maxWidth: "150px",
                padding: { xs: "0 20px", header: "0 8px" },
              }}
            >
              <Grid
                item
                sx={{
                  marginBottom: "12px",
                  marginTop: { xs: "40px", md: "0px" },
                }}
              >
                <Typography align="left" variant="paragraphBoldLarge">
                  Explore
                </Typography>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://blog.keeperdao.com"
                  rel="noopener noreferrer"
                >
                  Blog
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://github.com/keeperdao/whitepaper/blob/main/whitepaper.pdf"
                  rel="noopener noreferrer"
                >
                  Whitepaper{" "}
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://docs.keeperdao.com"
                  rel="noopener noreferrer"
                >
                  Documentation{" "}
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="/files/roadmap.png"
                  rel="noopener noreferrer"
                >
                  Roadmap{" "}
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  href="https://docs.keeperdao.com/reference/faq/"
                  rel="noopener noreferrer"
                >
                  FAQ
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://dune.xyz/shadow/KeeperDAO"
                  rel="noopener noreferrer"
                >
                  Analytics
                </TextButton>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="column"
              sx={{
                maxWidth: "150px",
                padding: { xs: "0 20px", header: "0 8px" },
              }}
            >
              <Grid
                item
                sx={{
                  marginBottom: "12px",
                  marginTop: { xs: "40px", md: "0px" },
                }}
              >
                <Typography align="left" variant="paragraphBoldLarge">
                  Governance
                </Typography>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  href="https://forum.keeperdao.com/"
                  rel="noopener noreferrer"
                >
                  Forum
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://snapshot.org/#/rook.eth"
                  rel="noopener noreferrer"
                >
                  Vote
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://github.com/keeperdao/kips"
                  rel="noopener noreferrer"
                >
                  Proposals
                </TextButton>
              </Grid>
              <Grid item>
                <TextButton
                  variant="text-footer"
                  target="_blank"
                  href="https://discord.com/invite/3JUgvyyNhA"
                  rel="noopener noreferrer"
                >
                  Community
                </TextButton>
              </Grid>

              {/*<Grid item>
                <TextButton variant="text-dark">KD Labs</TextButton>
              </Grid>
              <Grid item>
                <TextButton variant="text-dark">Bug Bounty</TextButton>
              </Grid>
              <Grid item>
                <TextButton variant="text-dark">Code of Conduct</TextButton>
              </Grid>*/}
            </Grid>
          </Grid>
          <Divider
            sx={{
              marginTop: "40px",
              marginBottom: "30px",
              background: "#f5f5f5",
              opacity: 0.1,
            }}
          />
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginBottom: "32px", padding: { xs: 0, header: 0 } }}
          >
            <Grid
              container
              item
              direction="row"
              display={{ xs: "none", md: "block" }}
              md={4}
              alignItems="center"
              justifyContent="flex-start"
              sx={{ zIndex: 2 }}
            >
              <Grid item>
                <IconButton
                  variant={`dark`}
                  sx={{
                    padding: "0 0 0 8px",
                    minHeight: 0,
                    minWidth: 0,
                  }}
                  href="/"
                >
                  <SvgIcon
                    color="inherit"
                    component={Logo}
                    viewBox={"0 0 1000 169.32"}
                    sx={{ height: "28px", width: "166px" }}
                  />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              container
              item
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ zIndex: 2 }}
              md={7}
              xs={12}
            >
              <Grid item>
                <Typography variant="body2" sx={{ marginRight: "22px" }}>
                  © KeeperDAO, 2021
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  variant="dark"
                  target="_blank"
                  href="https://github.com/keeperdao"
                  rel="noopener noreferrer"
                >
                  <SvgIcon
                    component={Github}
                    viewBox={"0 0 32 32"}
                    color="inherit"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  variant="dark"
                  target="_blank"
                  href="https://twitter.com/Keeper_DAO?s=20"
                  rel="noopener noreferrer"
                >
                  <SvgIcon
                    component={Twitter}
                    viewBox={"0 0 32 32"}
                    color="inherit"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  variant="dark"
                  target="_blank"
                  href="https://discord.com/invite/3JUgvyyNhA"
                  rel="noopener noreferrer"
                >
                  <SvgIcon
                    component={Discord}
                    viewBox={"0 0 32 32"}
                    color="inherit"
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  variant="dark"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCDNHJWdB32MdwcHs0Btiaxg"
                  rel="noopener noreferrer"
                >
                  <SvgIcon
                    component={Youtube}
                    color="inherit"
                    viewBox={"0 0 18 12"}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        item
        sx={{
          width: "25%",
          zIndex: 1,
          left: 0,
          marginTop: "-240px",
          padding: 0,
          display: { xs: "none", lg: "flex" },
        }}
      >
        <Image
          priority
          width={300}
          height={240}
          src={"/images/graphics/galaxy.png"}
        />
      </Grid>
    </div>
  );
}
