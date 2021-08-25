import React, { useEffect, useRef } from "react";
import { Container, Box, Grid } from "@material-ui/core";

import Header from "../src/Header";
import Home from "../src/Home";

import Image from "next/image";

export default function Index() {
  const containerRef = useRef(null);

  useEffect(() => {
    let instance, PSPDFKit;
    (async function () {
      PSPDFKit = await import("pspdfkit");
      instance = await PSPDFKit.load({
        container: containerRef.current,
        document: "/files/gov-beigepaper.pdf",
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Container maxWidth="md">
        <Header />
        <Box sx={{ my: 4 }}>
          <Home />
        </Box>
      </Container>
      <Grid
        container
        sx={{
          zIndex: 1,
          justifySelf: "flex-end",
          marginTop: { sm: "-300px", xs: "-140px" },
        }}
      >
        <Image
          width={695}
          height={391}
          quality={100}
          src={"/images/graphics/galaxy.png"}
        />
      </Grid>
    </div>
  );
}
