import React, {useState, useMemo} from "react";
import {Button, Grid} from "@material-ui/core";
import {SWRConfig} from "swr"
import {Panel} from "./Containers"

function fetcher(...args) {
  return fetch(...args).then(res => res.json())
}

function Dashboard(props) {

  const [activePanel, setActivePanel] = useState(() => 0);
  const handleClick = event => {
    setActivePanel(event?.target?.value);
  }

  const buttonList = useMemo(() => React.Children.map(props.buttons,(item1, i) =>
    <Grid
      item
      sm={1} min={1} xs={1}
    >
      <Button
        variant=
        {
          activePanel == i
          ? "control-active"
          : "control-inactive"
        }
        value={i}
        onClick={handleClick}
      >
        {item1}
      </Button>
    </Grid>
  ), [activePanel]);


  const panelList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Panel {...props.properties[i]}/>
  ), [props.buttons]);

  return (
    <Grid
      variant="dashboard-container"
      container
    >
      <Grid
        variant="control-container"
        container
        item
        columns={{sm: 5, min: 2, xs: 1}}
      >
        {buttonList}
      </Grid>
      <Grid
        variant="panel-container"
        container
        item
        columns={{sm: 2, min: 2, xs: 1}}
      >
        <SWRConfig value={{fetcher: fetcher}}>
            {panelList
              ? panelList[activePanel]
              : ""
            }
        </SWRConfig>
      </Grid>
    </Grid>
  );
}

export {Dashboard};
