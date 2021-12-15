import React, { useState, useMemo, useCallback } from "react";
import { Button, Grid, Fade, Container, Grow} from "@material-ui/core";
import { SWRConfig } from "swr"
import { Panel } from "./Containers"
import theme from '../theme'

async function fetcher(...args) {
  const res = await fetch(...args);
  return await res.json();
}

function Dashboard(props) {

  const [activePanelIndex, setActivePanelIndex] = useState(() => 0);
  const changeActivePanelIndex = event => {
    setActivePanelIndex(event?.target?.value);
  }

  const panelArray = useMemo(() => React.Children.map(props.buttons,(_, index) =>
    <Panel {...props.properties[index]}/>
  ),[props.properties]);

  return (
    <Grid
      variant="dashboard-container"
      container
    >
      <Grid
        variant="navigation-bar-container"
        columns={{ sm: 5, min: 2, xs: 1 }}
        py={theme.spacing(1)}
        container
        item
      >
        {useMemo(() => React.Children.map(props.buttons, (buttonText, index) =>
          <Grid
            sm={1} min={1} xs={1}
            px={theme.spacing(1)}
            item
          >
            <Button
              variant="navigation-bar-button"
              active={index == activePanelIndex? 1 : 0}
              onClick={changeActivePanelIndex}
              value={index}
            >
              {buttonText}
            </Button>
          </Grid>
        ), [activePanelIndex])}
      </Grid>
      <Grid
        variant="panel-container"
        columns={{ sm: 2, min: 2, xs: 1 }}
        container
        item
      >
        <SWRConfig value={{ fetcher: fetcher }}>
          {panelArray[activePanelIndex]}
        </SWRConfig>
      </Grid>
    </Grid>
  );
}

export { Dashboard };
