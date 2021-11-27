import React, { useState } from "react";

import theme from "../src/theme";

import { Grid, Container, Box, Divider } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { children, colorMode, setColorMode } = props;

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
        <Container maxWidth="header" disableGutters>
          <Header colorMode={colorMode} />
        </Container>
      </Grid>

      <Grid item sx={{ marginBottom: 0, paddingBottom: 0 }}>
        <Container
          maxWidth="header"
          disableGutters
          sx={{ marginBottom: 0, paddingBottom: 0 }}
        >
          <Grid
            item
            maxWidth="md"
            sx={{
              flexDirection: "column",
              paddingLeft: { md: "10px" },
              paddingRight: { md: "10px" },
              marginBottom: 0,
              paddingBottom: 0,
              width: "100vw",
            }}
          >
            {children}
          </Grid>
        </Container>
      </Grid>

      <Grid
        item
        sx={{
          position: "relative",
          width: "100%",
          background: theme.palette.background.dark,
          color: theme.palette.text.primary_dark,
          marginTop: 0,
          bottom: 0,
        }}
      >
        <Footer colorMode={colorMode} setColorMode={setColorMode} />
      </Grid>
    </Grid>
  );
}
