import React, { useState, useMemo, useCallback} from 'react';
import { Button, Grid } from "@material-ui/core";
import { SWRConfig } from 'swr'
import { styled } from '@mui/material/styles';
import { Panel } from './Containers'
import theme, {COLORS} from '../theme'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const TabButton = styled(Button)((props) => ({
  width: '95%',
  // height: '10vh',
  // maxHeight: 50,
  whiteSpace: "nowrap",
  borderRadius: 8,
  textTransform: 'none',
  skipSx: true,
  // use typography
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "16px",
  lineHeight: "19px",
  //
  background: props.isselected? COLORS.text_accent : 'none',
  color: props.isselected? COLORS.text_primary : COLORS.text_tabs,
  "&:hover": {
      background: props.isselected? COLORS.text_accent : 'none',
  },
  [theme.breakpoints.between('sm', 'md')]: {
      // width: '50%',
      fontSize: "12px",
  },
}));

const TabGrid = styled(Grid)({
  maxWidth: "md",
  borderRadius: 16,
  alignItems: "center",
  backgroundColor: COLORS.background_tabs,
  textAlign: 'center',
  padding: 8,
  // skipSx: true
})

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const Dashboard = props => {

  const [tabValue, setTabValue] = useState(() => 0);

  const handleClick = useCallback(event => {
    setTabValue(event?.target?.value);
  },[setTabValue])

  const buttonList = useMemo(() => React.Children.map(props.buttons,(item1, i) =>
    <Grid item  xs={1} md={1}>
      <TabButton value={i} onClick={handleClick} isselected={tabValue == i ? "true" : undefined}>
      {item1}
      </TabButton>
    </Grid>
  ), [tabValue]);

  const panelList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Panel titles={props.titles[i]} types={props.types[i]} />
  ), [props.titles, props.types]);

  return (
    <>
      <TabGrid container columns={{ xs: 5, md: 5 }} >
        {buttonList}
      </TabGrid>
      <SWRConfig value={{fetcher: fetcher}}>
        {panelList? panelList[tabValue] : ""}
      </SWRConfig>
    </>
  );
}
