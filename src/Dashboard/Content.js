import React, {useMemo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {styled} from '@mui/material/styles';
import useSWR from 'swr'
import {routes} from './SampleData';
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

  let filterList = React.Children.map(props.filter, (item, i) =>
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
          {props.filter && filterList}
        </FilterGrid>
      </Grid>
    </HeaderGrid>
  );
}


function DataRequest(props) {

  const args = new URLSearchParams(props.arguments).toString()
  const {data:response} =
    routes[props.title]
    ? useSWR(routes[props.title]?.route + args)
    : ""
  return (
    response
    ? response[routes[props.title]?.identifier]
    : ""
  )
}

function DataBlock(props) {

  const data = DataRequest({title : props.title})

  return (
    <Typography
      variant={props.variant}
      color={props.color}
    >
      {props.prefix}
      {" " + data.toLocaleString(undefined, {'maximumFractionDigits':2})}
    </Typography>
  );
}

export {TileHeader, DataBlock, DataRequest}

// use typography
// fontFamily: "Inter",
// fontStyle: "normal",
// fontWeight: "600",
// fontSize: "12px",
// lineHeight: "15px",
// letterSpacing: "0.02em",

// width: "100%",

//
// if (getLayout.name) return getLayout(<Component
//                                         {...pageProps}
//                                         colorMode={colorMode}
//                                         setColorMode={setColorMode}
//                                       />
                                    // )
