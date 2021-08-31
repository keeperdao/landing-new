import React, { useState } from "react";

import theme from "../src/theme";

import { Grid, Container, Box, Divider } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

import Image from "next/image";

export default function Layout(props) {
  const { children, colorMode } = props;

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        padding: 0,
        margin: 0,
        background:
          colorMode == "dark"
            ? theme.palette.background.dark
            : theme.palette.background.light,
        color:
          colorMode == "dark"
            ? theme.palette.text.primary_dark
            : theme.palette.text.primary_light,
      }}
    >
      <Grid item>
        <Container maxWidth="md" disableGutters>
          <Header colorMode={colorMode} />
        </Container>
      </Grid>

      <Grid item>
        <Container maxWidth="md" disableGutters>
          <Grid
            item
            direction="column"
            sx={{
              padding: { md: "10px" },
            }}
          >
            {children}
          </Grid>
        </Container>
      </Grid>

      <Grid
        item
        sx={{
          background: theme.palette.background.dark,
          color: theme.palette.text.primary_dark,
        }}
      >
        <Container maxWidth="md" disableGutters>
          <Footer />
        </Container>
        <Grid
          container
          item
          sx={{
            zIndex: 1,
            justifySelf: "flex-end",
            marginTop: { sm: "-300px", xs: "-100px" },
          }}
        >
          <Image
            width={695}
            height={391}
            quality={100}
            src={"/images/graphics/galaxy.png"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
