import React, {useState, useMemo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {styled} from '@mui/material/styles';
import {TileHeader, DataBlock, DataRequest} from './Content'
import Chart from './Charts'
import theme from '../theme'

const TileGrid = styled(Grid)({
  padding: 4,
  skipSx: true,
})

const TileContainer = styled(Grid)({
  background: theme.palette.background.tile,
})

function Panel(props) {

  const titles = Object.keys(props)

  const tilesList = useMemo(() => React.Children.map(titles, (item, i) =>

    <TileGrid item sm={props[item].type? 2 : 1} xs={1}>
      <TileContainer>
      {
        props[item].type == "Info"
        ? <InfoTile title={item}/>
        : ""
      }
      {
        !props[item].type
        ? <DataTile title= {item}
                    route= {props[item].route}
                    identifier={props[item].identifier}
                    prefix={props[item].prefix}
        />
        : ""
      }
      {
        props[item].type == "Bar" | props[item].type == "Area"
        ? <Tile
            title={item}
            type={props[item].type}
            filter1={props[item].filter1}
            filter2={props[item].filter2}
            prefix={props[item].prefix}
            route= {props[item].route}
            identifier={props[item].identifier}
            route2= {props[item].route2}
            identifier2={props[item].identifier2}
          />
        : ""
      }
      {
        props[item].type == "Table"
        ? <TableTile
            title={item}
            type={props[item].type}
          />
        : ""
      }
      </TileContainer>
    </TileGrid>
  ), [props.titles, props.types]);

  return <>{tilesList}</>
}

function Tile(props) {

  // console.log("rendering Tile: " + props.title);

  const [activeData, setActiveData] = useState(() => "week");
  const handleChange = event => {
    setActiveData(event?.target?.innerHTML);
  };

  let isChart = props.type == "Area" | props.type == "Bar"

  const data = DataRequest({route: props.route, identifier: props.identifier, arguments: {range: activeData}})

  const data2 = DataRequest({route: props.route2, identifier: props.identifier2, arguments: {range: activeData}})


  return (
    <>
      <TileHeader
        activeFilter={activeData}
        title={props.title}
        filter1={props.filter1}
        filter2={props.filter2}
        filterClick={handleChange}
      />
      {
        props.type == "Area" | !props.type
        ? <DataBlock
            title={props.title}
            route={props.route}
            identifier={props.identifier}
            variant="headingDisplay"
            color={theme.palette.text.primary_dark}
            prefix="$"
          />
        : ""
      }
      {
        isChart
        ? <Chart
            type={props.type}
            data={data2 ? data2 : data}
            prefix={props.prefix}
          />
        : ""
      }
    </>
  );
}

function DataTile (props) {

  // console.log(props.route)

  return (
    <>
      <TileHeader title={props.title} />
      <DataBlock
        title={props.title}
        route={props.route}
        identifier={props.identifier}
        variant="headingTitle"
        prefix={props.prefix}
        color={theme.palette.text.primary_dark}
      />
    </>
  )
}

function InfoTile(props) {

  //temp
  const users = 5374;
  const savings = "Ξ 3025";
  const rook = 5166;

  return(
    <>
    <TileHeader title={props.title} />
    <Typography
      variant="headingDisplay"
      color={theme.palette.text.primary_dark}
    >
      To date
      <Typography
        variant="headingDisplay"
        color={theme.palette.text.accent}
      >
        {" " + users.toLocaleString() + " "}
      </Typography>
      users have saved
      <Typography
        variant="headingDisplay"
        color={theme.palette.text.accent}
      >
        {" " + savings.toLocaleString() + " "}
      </Typography>
      in gas and earned
      <Typography
        variant="headingDisplay"
        color={theme.palette.text.accent}
      >
        {" " + rook.toLocaleString() + " "}
      </Typography>
      ROOK by using the Hiding Game for limit orders.
    </Typography>
    </>
  )
}

function TableTile(props) {
  return (
    <TileHeader title={props.title} />
  )
}

export {Tile, Panel}
