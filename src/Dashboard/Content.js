import React, {useMemo} from 'react';
import {Grid, Typography, MenuItem, Select} from "@material-ui/core";
import {styled} from '@mui/material/styles';
import useSWR from 'swr'
import theme from '../theme'

const HeaderContainer = styled((props) => (
  <Grid
    container
    {...props}
  />
))(() => ({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const FilterContainer = styled((props) => (
  <Grid
    container
    {...props}
  />
))(() => ({
  justifyContent: "flex-end",
  textTransform: 'uppercase',
  textWrap: 'noWrap',
  alignItems: "center",
  direction: "column",

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
  },
}));

const HeaderTypography = styled((props) => (
  <Typography
    variant="paragraphBoldLabel"
    noWrap
    {...props}
  />
))( props => ({
  background: "none",
  color:
    props.isselected
    ? theme.palette.accent
    : theme.palette.text.primary_dark,
  whiteSpace: "noWrap",
  borderBottom :
    props.isselected
    && props.value
    && "2px solid" + `${theme.palette.accent}`,
  marginRight:
    isNaN(props.isselected)
    ? 0
    : 2,
  marginLeft:
    isNaN(props.isselected)
    ? 0
    : 2,
  "&:hover": {
    background: "none",
    cursor:
      isNaN(props.isselected)
      ? "auto"
      : "pointer",
  },
}));

const Filter2Select = styled((props) => (
  <Select
    MenuProps={{
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      padding: 0,
      margin: 0,
      PaperProps: {
        elevation: 0,
        sx: {
          background: "none",
          justifyContent: "center",
          "& li:hover": {
            backgroundColor: "#303039",
            background: "none",
          }},
        },
    }}
    {...props}
  />
))(() => ({
  "& .MuiSelect-outlined": {
    color: theme.palette.text.primary_dark,
    background: "none",
    padding: 0,
    marginLeft: 10,
  },

  "& .MuiSelect-iconOutlined" : {
    color: theme.palette.text.primary_dark,
  },
}));

const SelectItem = styled((props) => (
  <MenuItem
    readOnly
    {...props}
  />
))(() => ({
  alignItems: "center",
  background: "none",
  padding: 0,
  margin: 0,
}));


function TileHeader(props) {

  // console.log("rendering Header" + title);

  let filterList = React.Children.map(props.filter1, (item, i) =>
  <Grid item>
    <HeaderTypography
      value={item}
      onClick={props.filterClick}
      isselected=
      {
        props.activeFilter == item
        ? 1
        : 0
      }
    >
      {item}
    </HeaderTypography>
  </Grid>
  );

  let index = props.filter2? props.filter2.indexOf(props.activeFilter2) : ""

  let filter2List = React.Children.map(props.filter2, (item, i) =>
      <SelectItem value={item}>
        <HeaderTypography>
          {item}
        </HeaderTypography>
      </SelectItem>
);


  return (
    <HeaderContainer>
      <Grid item>
        <HeaderTypography isselected={1}>
          {props.title}
        </HeaderTypography>
      </Grid>
      <Grid item>
        <FilterContainer>
          {
            props.filter1
            && filterList
          }
          {
            props.filter2
            && <Grid item>
                <Filter2Select
                  value={props.activeFilter2}
                  onChange={props.filterClick2}
                >
                  {filter2List}
                </Filter2Select>
              </Grid>
          }
        </FilterContainer>
        </Grid>
    </HeaderContainer>
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
