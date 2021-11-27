import React, {useMemo} from 'react';
import { Grid } from "@material-ui/core";
import Typography from '@mui/material/Typography';
import useSWR from 'swr'
import {routes} from './SampleData';
import theme, {COLORS} from '../theme'
import { styled } from '@mui/material/styles';

const FilterTypography = styled(Typography)((props) => ({
  whiteSpace: "noWrap",
  textTransform: 'uppercase',
  // use typography
  fontFamily: "Inter",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "15px",
  letterSpacing: "0.02em",
  //
  background: "none",
  // padding: 0,
  marginRight: 2,
  marginLeft: 2,
  color: props.isselected? theme.palette.accent : theme.palette.text_primary,
  textDecoration: props.isselected && "underline",
  "&:hover": {
    background: "none",
  },
}));

const HeaderGrid = styled(Grid)({
  alignItems: "center",
  padding: 0,
  justifyContent: "space-between"
})

const FilterGrid = styled(Grid)({
  textWrap: 'noWrap',
  alignItems: "center",
  width: "100%",
  justifyContent: "flex-start",
  textTransform: 'uppercase',
})

const TileHeader = props => {

  // console.log("rendering Header" + title);

  let filterList = React.Children.map(props.filter, (item, i) =>
  <Grid item>
    <FilterTypography value={item} onClick={props.filterClick} isselected={props.activeFilter == item ? "true" : undefined}>
      {item}
    </FilterTypography>
  </Grid>
  );

  return (
    <HeaderGrid container minWidth={theme.breakpoints.values["min"]} maxWidth={theme.breakpoints.values["md"]}>
      <Grid item>
        <Typography variant="paragraphBoldLabel" color={theme.palette.accent}>{props.title}</Typography>
      </Grid>
      <Grid item>
        <FilterGrid container>
          {props.filter && filterList}
        </FilterGrid>
      </Grid>
    </HeaderGrid>
  );
}


const DataRequest = props => {

  const args = new URLSearchParams(props.arguments).toString()
  const { data : response} = routes[props.title] ? useSWR(routes[props.title]?.route + args) : ""
  return response? response[routes[props.title]?.identifier] : ""

}

const DataBlock = props => {

  const data  = DataRequest({title : props.title})

  return (
    <Typography variant={props.variant} color={props.color}>
      {props.prefix} {data.toLocaleString(undefined, {'maximumFractionDigits':2})}
    </Typography>
  );
}

export { TileHeader, DataBlock, DataRequest }
