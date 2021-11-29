import React, {useMemo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {styled} from '@mui/material/styles';
import useSWR from 'swr'
import theme from '../theme'

const HeaderGrid = styled(Grid)({
  justifyContent: "space-between",
  alignItems: "center",
})

const FilterGrid = styled(Grid)({
  justifyContent: "flex-end",
  textTransform: 'uppercase',
  textWrap: 'noWrap',
  alignItems: "center",
})

const FilterTypography = styled(Typography)((props) => ({
  background: "none",
  color:
    props.isselected
    ? theme.palette.accent
    : theme.palette.text_primary,
  whiteSpace: "noWrap",
  textTransform: "uppercase",
  textDecoration:
    props.isselected && "underline",
  marginRight: 2,
  marginLeft: 2,
  "&:hover": {
    background: "none",
    cursor: "pointer",
  },
}));

function TileHeader(props) {

  // console.log("rendering Header" + title);

  let filterList = React.Children.map(props.filter1, (item, i) =>
  <Grid item>
    <FilterTypography
      variant="paragraphBoldLabel"
      color={theme.palette.text.primary_dark}
      value={item}
      onClick={props.filterClick}
      isselected={props.activeFilter == item
                    ? "true"
                    : undefined}
    >
      {item}
    </FilterTypography>
  </Grid>
  );

  return (
    <HeaderGrid container>
      <Grid item>
        <Typography
          variant="paragraphBoldLabel"
          color={theme.palette.accent}
          noWrap
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <FilterGrid container>
          {props.filter1 && filterList}
        </FilterGrid>
      </Grid>
    </HeaderGrid>
  );
}


function DataRequest(props) {

  const args = new URLSearchParams(props.arguments).toString()
  const {data:response} =
    props.route
    ? useSWR(props.route + args)
    : ""

  return (
    response
    ? response[props.identifier]
    : ""
  )
}

function DataBlock(props) {

  // console.log(props.route)

  const data = DataRequest({route: props.route, identifier: props.identifier})

  return (
    <Typography
      variant={props.variant}
      color={props.color}
    >
      {props.prefix}
      {data.toLocaleString(undefined, {'maximumFractionDigits':2})}
      {" " + props.suffix
             ? props.suffix
             : ""}
    </Typography>
  );
}

export {TileHeader, DataBlock, DataRequest}
