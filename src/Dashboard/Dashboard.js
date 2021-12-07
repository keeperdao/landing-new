import React, {useState, useMemo} from 'react';
import {Button, Grid} from "@material-ui/core";
import {styled, ThemeProvider} from '@mui/material/styles';
import {SWRConfig} from 'swr'
import {Panel} from './Containers'
import theme from '../theme'

const DashboardContainer = styled((props) => (
  <Grid
    container
    {...props}
  />
))(() => ({
  background: theme.palette.background.dark,
  minWidth: theme.breakpoints.values["tab"],
  maxWidth: theme.breakpoints.values["md"],
  alignItems: "center",
}));

const ControlContainer = styled((props) => (
  <Grid
    item
    container
    columns={{sm: 5, tab: 2, xs: 1}}
    {...props}
  />
))(() => ({
  background: theme.palette.background.tab,
  alignItems: "center",
  textAlign: "center",
  borderRadius: 16,
  padding: 8,
}));

const ControlItem = styled((props) => (
  <Grid
    item
    sm={1}
    tab={1}
    xs={1}
    {...props}
  />
))(() => ({}))

const ControlButton = styled((props) => (
  <Button
    {...props}
  />
))( props => ({
  background:
    props.isselected
    ? theme.palette.accent
    : "none",
  color:
    props.isselected
    ? theme.palette.text.primary_dark
    : theme.palette.text.tab,
  width: '95%',
  borderRadius: 8,
  padding: 8,
  // use typography
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "19px",
  whiteSpace: "noWrap",
  textTransform: "none",
  //
  "&:hover": {
      background:
        props.isselected
        ? theme.palette.text.accent
        : "none",
  },
}));

const PanelContainer = styled((props) => (
  <Grid
    item
    container
    columns={{sm: 2, tab: 2, xs: 1}}
    {...props}
  />
))(() => ({
  paddingTop: 32,
}));


function fetcher(...args) {
  return fetch(...args).then(res => res.json())
}

function Dashboard(props) {

  const [activePanel, setActivePanel] = useState(() => 0);
  const handleClick = event => {
    setActivePanel(event?.target?.value);
  }

  const buttonList = useMemo(() => React.Children.map(props.buttons,(item1, i) =>
    <ControlItem>
      <ControlButton
        value={i}
        onClick={handleClick}
        isselected = {activePanel == i ? 1 : 0}
      >
        {item1}
      </ControlButton>
    </ControlItem>
  ), [activePanel]);


  const panelList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Panel {...props.properties[i]}/>
  ), [props.buttons]);

  return (
    <DashboardContainer>
      <ControlContainer>
        {buttonList}
      </ControlContainer>
      <PanelContainer>
        <SWRConfig value={{fetcher: fetcher}}>
          {panelList
            ? panelList[activePanel]
            : ""
          }
        </SWRConfig>
      </PanelContainer>
    </DashboardContainer>
  );
}

export {Dashboard};
