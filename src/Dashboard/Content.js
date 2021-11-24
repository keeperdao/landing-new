import React, {useMemo} from 'react';
import {Grid, Button, Stack } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import useSWR, {useSWRConfig} from 'swr'
import {routes} from './SampleData';
import {mini_button, test_header, mini_button_selected, tile_header, tile_data, test} from './dev.module.css'
import theme, {COLORS} from '../theme'
import { styled } from '@mui/material/styles';

const FilterButton = styled(Button)((props) => ({
  // height: '10vh',
  // maxHeight: 50,
  width: "inherit",
  whiteSpace: "nowrap",
  borderRadius: 8,
  textTransform: 'uppercase',
  skipSx: true,
  // use typography
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "0.02em",
  textTransform: "capitalize",
  padding: 0,
  //
  background: "none",
  color: props.isselected? COLORS.text_accent : COLORS.text_primary,
  textDecoration: props.isselected? "underline" : "",
  "&:hover": {
      background: 'none',
  },
  [theme.breakpoints.between('sm', 'md')]: {
      // width: '50%',
      fontSize: "12px",
  },
}));

const HeaderGrid = styled(Grid)({
  // alignItems: "center",
  // backgroundColor: "green",
  // textAlign: 'center',
  textWrap: 'nowrap',
  padding: 0,
  // skipSx: true
})

const HeaderStack = styled(Stack)({
  // alignItems: "center",
  // backgroundColor: "green",
  // textAlign: 'center',
  textWrap: 'nowrap',
  padding: 0,
  // skipSx: true
})

const TileHeader = ({activeFilter, title, filter, source, filterClick, sourceClick}) => {

  // console.log("rendering Header" + title);

  let s1 = {
    className: test,
    direction: "row"
  }

  let s2 = {
    className: test,
    direction: "row",
    spacing: 1,
    justifyContent: "flex-end",
    alignItems: "top"
  }

  let filterList = React.Children.map(filter, (item1, i) =>
    <FilterButton value={i} onClick={filterClick} isselected={activeFilter == i ? "true" : undefined}>
      {item1}
    </FilterButton>
  );

  let sourceList = useMemo(() => React.Children.map(source, (item, i) =>
    <option value={item} className={mini_button}>{item}</option>
  ), [source]);

  return (
    <>
    <HeaderGrid container minWidth={theme.breakpoints.values["min"]} maxWidth={theme.breakpoints.values["md"]}>
    <Grid item xs={8} md={8}>
    <Typography variant="paragraphBoldLabel" noWrap>{title}</Typography>
    </Grid>
    <Grid item xs={4} md={4}>
    <HeaderStack direction="row">
    {filter && filterList}
    </HeaderStack>
    </Grid>
    </HeaderGrid>
    </>
  );
}

const DataBlock = ({type, title}) => {

  // console.log("rendering DataBlock: " + title);

  const { data : test } = useSWR(routes[title]?.route)
  let temp = test? test[routes[title]?.identifier] : ""

  // const { cache } = useSWRConfig()
  // console.log(cache)

  return (
    <Typography variant="headingTitle" color={COLORS.text_primary}>
      {!type ? "$ " + `${temp.toLocaleString()}` /* + data?.tickers[0]?.converted_last.usd?.toLocaleString()*/ : text}
    </Typography>
  );
}

export {
  TileHeader,
  DataBlock,
}
