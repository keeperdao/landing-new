import * as React from "react";

import theme from "./theme";

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

export default function Header(props) {
  const { colorMode } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          marginTop: "20px",
          marginBottom: "68px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            padding: "0 18px",
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
          <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingLeft: 0, paddingRight: 0, color: "inherit" }}
          >
            <Grid item justifyContent="flex-start" sx={{ color: "inherit" }}>
              <IconButton
                variant={`${colorMode}`}
                sx={{
                  padding: "8px 0",
                  minHeight: 0,
                  minWidth: 0,
                }}
                href="/"
              >
                <SvgIcon
                  color="inherit"
                  component={Logo}
                  viewBox={"0 0 1000 169.32"}
                  sx={{ height: "32px", width: "auto" }}
                />
              </IconButton>
            </Grid>

            <Grid
              item
              justifyContent="flex-end"
              marginTop={{ xs: "20px", sm: "0" }}
            >
              <Button
                href="../about"
                rel="noopener noreferrer"
                variant={`text-${colorMode}`}
                sx={{
                  minWidth: 0,
                  fontWeight: 600,
                }}
              >
                About
              </Button>
              <Button
                href="https://blog.keeperdao.com/"
                rel="noopener noreferrer"
                variant={`text-${colorMode}`}
                sx={{
                  minWidth: 0,
                  fontWeight: 600,
                }}
              >
                Blog
              </Button>
              <Button
                href="https://app.keeperdao.com/"
                rel="noopener noreferrer"
                variant={`outlined-${colorMode}`}
                sx={{
                  marginLeft: "16px",
                  height: "38px",
                  width: "auto",
                  borderRadius: "8px",
                }}
              >
                Enter App
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
