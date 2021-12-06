import React, {useMemo} from 'react';
import {Grid, Typography, TextField, Popover, MenuItem, Menu, Select} from "@material-ui/core";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {styled} from '@mui/material/styles';
import useSWR from 'swr'
import theme from '../theme'

const HeaderGrid = styled(Grid)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "top",
})

const FilterGrid = styled(Grid)({
  justifyContent: "flex-end",
  textTransform: 'uppercase',
  textWrap: 'noWrap',
  alignItems: "center",
  direction: "column",

  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none"
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none"
  },
})

const FilterTypography = styled(Typography)((props) => ({
  background: "none",
  color:
    props.isselected
    ? theme.palette.accent
    : theme.palette.text.primary_dark,
  whiteSpace: "noWrap",
  textTransform: "uppercase",
  // textDecoration:
  //   props.isselected && "underline",
  borderBottom :
    props.isselected && "2px solid" + `${theme.palette.accent}`,
  marginRight: 2,
  marginLeft: 2,
  "&:hover": {
    background: "none",
    cursor: "pointer",
  },
}));

const SelectTypography = styled(Typography)({
  background: "none",
  whiteSpace: "noWrap",
  textTransform: "uppercase",
  "&:hover": {
    background: "none",
    cursor: "pointer",
  },
})

const SelectorField = styled(Select)({
  "& .MuiSelect-outlined": {
    color: theme.palette.text.primary_dark,
    background: "none",
    padding: 0,
    marginLeft: 10,
  },

  "& .MuiSelect-iconOutlined" : {
    color: theme.palette.text.primary_dark,
  },

})

const SelectorMenuItem = styled(MenuItem)({
  alignItems: "center",
  background: "none",
  padding: 0,
  margin: 0,
})


function TileHeader(props) {

  // console.log("rendering Header" + title);

  let filterList = React.Children.map(props.filter1, (item, i) =>
  <Grid item>
    <FilterTypography
      variant="paragraphBoldLabel"
      // color={theme.palette.text.primary_dark}
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

  let index = props.filter2? props.filter2.indexOf(props.activeFilter2) : ""

  let filter2List = React.Children.map(props.filter2, (item, i) =>
      <SelectorMenuItem value={item} readOnly>
      <SelectTypography
        variant="paragraphBoldLabel"
        color={theme.palette.text.primary_dark}
        noWrap
      >
        {item}
        </SelectTypography>
      </SelectorMenuItem>
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
          {
            props.filter2 &&
            <Grid item>
            <SelectorField
              value={props.activeFilter2}
              onChange={props.filterClick2}
              MenuProps={{
                // getContentAnchorEl: null,
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
                        justifyContent: "center", "& li:hover": {
                        backgroundColor: "#303039"
                      }},
                },
              }}
            >
              {filter2List}
            </SelectorField>
            </Grid>
          }
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
