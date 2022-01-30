import React, { useMemo } from "react";
import { Grid, Fade } from "@material-ui/core";
import { Tile } from "./Tile";
import theme from "../theme";

function DashboardPanel(props) {
  const panelArray = useMemo(() => React.Children.map(props.buttons, (_, outerIndex) => (
    <>
      {React.Children.map(Object.keys(props.properties[outerIndex]), (tileTitleText, innerIndex) => (
        <Fade
          in={true}
          mountOnEnter
          unmountOnExit
          easing="ease-in-out"
          timeout={500}
        >
          <Grid
            variant="panel-grid-item"
            sm={props.properties[outerIndex][tileTitleText].size}
            xs={1}
            p={theme.spacing(0.5)}
            item
          >
            <Tile
              title={tileTitleText}
              {...props.properties[outerIndex][tileTitleText]}
            />
          </Grid>
        </Fade>
      ))
      }
    </>
  )), [props.properties]);
  return panelArray[props.activePanelIndex]
}

export { DashboardPanel };
