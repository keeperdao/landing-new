import * as React from "react";

import {
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
} from "@material-ui/core";

import Github from "../public/images/logos/GitHub.svg";
import Discord from "../public/images/logos/Discord.svg";
import Twitter from "../public/images/logos/Twitter.svg";

export default function Footer() {
  return (
    <div>
      <Divider sx={{ marginTop: "100px", marginBottom: "30px" }} />
      <Grid
        container
        item
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Grid
          container
          item
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
          sx={{ zIndex: 2 }}
        >
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              KeeperDAO, 2021
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
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
        </Grid>
      </Grid>
    </div>
  );
}
