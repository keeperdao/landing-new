import * as React from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  Button,
  IconButton,
  SvgIcon,
} from "@material-ui/core";

import Logo from "../public/images/logos/KeeperDAO_Logo_Inline_White.svg";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ marginTop: "16px", marginBottom: "100px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            background: "background.default",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Grid item justifyContent="flex-start">
              <IconButton
                sx={{
                  paddingLeft: 0,
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

            <Grid item justifyContent="flex-end">
              <Button href="#products" variant="text" sx={{ minWidth: 0 }}>
                Products
              </Button>
              <Button href="#partners" variant="text" sx={{ minWidth: 0 }}>
                Partners
              </Button>
              <Button href="#auditors" variant="text" sx={{ minWidth: 0 }}>
                Audits
              </Button>
              <Button
                target="_blank"
                href="https://blog.keeperdao.com/"
                rel="noopener noreferrer"
                variant="text"
                sx={{ minWidth: 0 }}
              >
                Blog
              </Button>
              <Button
                variant="outlined"
                sx={{
                  marginLeft: "8px",
                  height: "32px",
                  width: "64px",
                  borderRadius: "8px",
                }}
                target="_blank"
                href="https://app.keeperdao.com/"
                rel="noopener noreferrer"
              >
                App
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
