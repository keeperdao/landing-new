import React, { useState, useMemo} from 'react';
import { Button, Grid } from "@material-ui/core";
import { SWRConfig } from 'swr'
import { styled } from '@mui/material/styles';
import { Panel } from './Containers'
import theme from '../theme'
import { ThemeProvider } from '@mui/material/styles';

const TabButton = styled(Button)((props) => ({
  width: '95%',
  whiteSpace: "noWrap",
  borderRadius: 8,
  textTransform: 'none',
  skipSx: true,
  padding: "8px",
  // use typography
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "1rem",
  lineHeight: "19px",
  //
  background: props.isselected? theme.palette.accent : 'none',
  color: props.isselected? theme.palette.text.primary_dark : theme.palette.text.tab,
  "&:hover": {
      background: props.isselected? theme.palette.text.accent : 'none',
  },
}));

const TabGrid = styled(Grid)({
  borderRadius: 16,
  alignItems: "center",
  backgroundColor: theme.palette.background.tab,
  textAlign: 'center',
  padding: 8,
  skipSx: true,
})

const PanelGrid = styled(Grid)({
  paddingTop: 32,
  skipSx: true,
})


const DashboardContainer = styled(Grid)({
  alignItems: "center",
  background: theme.palette.background.dark,
  minWidth: theme.breakpoints.values["tab"],
  maxWidth: "100%",
  width: '100%',
  skipSx: true,
})

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Dashboard = props => {

  const [tabValue, setTabValue] = useState(() => 0);
  const handleClick = event => {
    setTabValue(event?.target?.value);
  }

  const buttonList = useMemo(() => React.Children.map(props.buttons,(item1, i) =>
    <Grid item sm={1} tab={1} xs={1}>
      <TabButton value={i} onClick={handleClick} isselected={tabValue == i ? "true" : undefined}>
        {item1}
      </TabButton>
    </Grid>
  ), [tabValue]);

  const panelList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Panel titles={props.titles[i]} types={props.types[i]} />
  ), [props.titles, props.types]);

  return (
    <DashboardContainer container>
      <TabGrid item container columns={{sm: 5, tab: 2, xs: 1}}>
        {buttonList}
      </TabGrid>
      <PanelGrid item container columns={{sm: 2, tab: 2, xs: 1}}>
        <SWRConfig value={{fetcher: fetcher}}>
          {panelList? panelList[tabValue] : ""}
        </SWRConfig>
      </PanelGrid>
    </DashboardContainer>
  );
}

export { Dashboard };
