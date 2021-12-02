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
            direction="row"
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
                  sx={{
                    height: { xs: "31px", sm: "32px" },
                    width: "auto",
                  }}
                />
              </IconButton>
            </Grid>

            <Grid item justifyContent="flex-end">
              <Button
                href="../about"
                rel="noopener noreferrer"
                variant={`text-${colorMode}`}
                sx={{
                  display: { xs: "none", sm: "inline" },
                  minWidth: 0,
                  fontWeight: 400,
                }}
              >
                About
              </Button>
              <Button
                href="https://blog.keeperdao.com/"
                rel="noopener noreferrer"
                variant={`text-${colorMode}`}
                sx={{
                  display: { xs: "none", sm: "inline" },
                  minWidth: 0,
                  fontWeight: 400,
                }}
              >
                Blog
              </Button>
              <Button
                href="https://app.keeperdao.com/"
                rel="noopener noreferrer"
                variant={`outlined-${colorMode}`}
                sx={{
                  marginLeft: { xs: "0", sm: "16px" },
                  height: "40px",
                  width: { xs: "auto", sm: "128px" },
                  borderRadius: "8px",
                  fontWeight: 400,
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
