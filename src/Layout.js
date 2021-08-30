import React from "react";

import { Grid, Container, Box, Divider } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";

import Image from "next/image";

export default function Layout(props) {
  const { children } = props;
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={{ minHeight: "100vh", padding: 0, margin: 0 }}
    >
      {/* Page container */}
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          sx={{
            margin: 0,
            padding: 0,
            minHeight: "calc(100vh - 95px)",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Header />
          </Grid>

          <Grid
            item
            direction="column"
            sx={{
              padding: "10px",
            }}
          >
            {children}
          </Grid>

          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Container>

      {/* Bottom graphic */}
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
  );
}
