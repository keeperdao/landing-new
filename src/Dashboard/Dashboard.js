import React, {useState, useMemo} from 'react';
import {Button, Grid} from "@material-ui/core";
import {styled, ThemeProvider} from '@mui/material/styles';
import {SWRConfig} from 'swr'
import {Panel} from './Containers'
import theme from '../theme'

const DashboardContainer = styled(Grid)({
  background: theme.palette.background.dark,
  minWidth: theme.breakpoints.values["tab"],
  maxWidth: theme.breakpoints.values["md"],
  alignItems: "center",
  skipSx: true,
})

const TabGrid = styled(Grid)({
  background: theme.palette.background.tab,
  alignItems: "center",
  textAlign: "center",
  borderRadius: 16,
  padding: 8,
  skipSx: true,
})

const TabButton = styled(Button)((props) => ({
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
  skipSx: true,
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

const PanelGrid = styled(Grid)({
  paddingTop: 32,
  skipSx: true,
})

function fetcher(...args) {
  return fetch(...args).then(res => res.json())
}

function Dashboard(props) {

  const [tabValue, setTabValue] = useState(() => 0);
  const handleClick = event => {
    setTabValue(event?.target?.value);
  }

  const buttonList = useMemo(() => React.Children.map(props.buttons,(item1, i) =>
    <Grid item sm={1} tab={1} xs={1}>
      <TabButton
        value={i}
        onClick={handleClick}
        isselected = {tabValue == i ? 1 : 0}
      >
        {item1}
      </TabButton>
    </Grid>
  ), [tabValue]);


  const panelList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Panel {...props.properties[i]}/>
  ), [props.buttons]);

  return (
    <DashboardContainer container>
      <TabGrid
        item
        container
        columns={{sm: 5, tab: 2, xs: 1}}
      >
        {buttonList}
      </TabGrid>
      <PanelGrid
        item
        container
        columns={{sm: 2, tab: 2, xs: 1}}
      >
        <SWRConfig value={{fetcher: fetcher}}>
          {panelList
            ? panelList[tabValue]
            : ""
          }
        </SWRConfig>
      </PanelGrid>
    </DashboardContainer>
  );
}

export {Dashboard};

// const panelList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
//   <Panel
//     titles={props.titles[i]}
//     types={props.types[i]}
//   />
// ), [props.buttons]);
