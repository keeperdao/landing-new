import React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function Custom404() {
  return (
    <div>
      <Grid container item justifyContent="center" alignItems="center">
        <Typography variant="h1">404 - Page Not Found</Typography>
      </Grid>
    </div>
  );
}
