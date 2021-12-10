import React, {useMemo} from 'react';
import {Grid, Typography, MenuItem, Select} from "@material-ui/core";
import useSWR from 'swr'
import themeDashboard from './Theme'

function TileHeader(props) {

  // console.log("rendering Header" + title);

  let filter1List = React.Children.map(props.filter1, (item, i) =>
  <Grid item>
    <Typography
      variant="paragraphBoldLabelLink"
      value={item}
      onClick={props.filterClick}
      color={props.activeFilter == item
              ? themeDashboard.palette.text.dark_tertiary
              : themeDashboard.palette.text.dark_primary
      }
      noWrap
    >
      {item}
    </Typography>
  </Grid>
  );

  let filter2List = React.Children.map(props.filter2, (item, i) =>
      <MenuItem value={item}>
        <Typography
          variant="paragraphBoldLabelLink"
          color={themeDashboard.palette.text.dark_primary}
          noWrap
        >
          {item}
        </Typography>
      </MenuItem>
  );


  return (
    <Grid
      variant="header-container"
      container
    >
      <Grid item>
        <Typography
          variant="paragraphBoldLabel"
          color={themeDashboard.palette.text.dark_tertiary}
          noWrap
          >
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          variant="filter-container"
          container
          spacing={0.75}
        >
          {
            props.filter1
            && filter1List
          }
          {
            props.filter2
            && <Grid item>
                <Select
                  value={props.activeFilter2}
                  onChange={props.filterClick2}
                >
                  {filter2List}
                </Select>
              </Grid>
          }
        </Grid>
        </Grid>
    </Grid>
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

  let data = DataRequest({route: props.route, identifier: props.identifier})
  // temp random values
  data = data? data: Math.random() * 10000;

  return (
    <Typography
      variant={props.variant}
      color={props.color}
      noWrap
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
