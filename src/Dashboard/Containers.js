import React, {useState, useMemo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {styled} from '@mui/material/styles';
import {TileHeader, DataBlock, DataRequest} from './Content'
import Chart from './Charts'
import {routes} from './SampleData';
import theme from '../theme'

const TileGrid = styled(Grid)({
  padding: 4,
  skipSx: true,
})

const TileContainer = styled(Grid)({
  background: theme.palette.background.tile,
})

function Panel(props) {
  // console.log("rendering Panel")

  const tilesList = useMemo(() => React.Children.map(props.titles, (item, i) =>
    <TileGrid item sm={props.types[i]? 2 : 1} xs={1}>
      <TileContainer>
      {
        props.types[i] == "Info"
        ? <InfoTile title={props.titles[i]}/>
        : ""
      }
      {
        !props.types[i]
        ? <DataTile
          title={props.titles[i]}
          type={props.types[i]}
          prefix="$"
          />
        : ""
      }
      {
        props.types[i] == "Bar" | props.types[i] == "Area"
        ? <Tile
            title={props.titles[i]}
            type={props.types[i]}
          />
        : ""
      }
      {
        props.types[i] == "Table"
        ? <TableTile
            title={props.titles[i]}
            type={props.types[i]}
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

  let th = {
    activeFilter: activeData,
    title: props.title,
    filter: isChart? ["week", "month", "all"] : "",
    filterClick: handleChange,
  }

  const data = DataRequest({title : props.title, arguments: {range: activeData}})

  return (
    <>
      <TileHeader
        activeFilter={activeData}
        title={props.title}
        filter={isChart
                ? ["week", "month", "all"]
                : ""}
        filterClick={handleChange}
      />
      {
        props.type == "Area" | !props.type
        ? <DataBlock
            title={props.title}
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
            data={data}
            prefix="$"
          />
        : ""
      }
    </>
  );
}

function DataTile (props) {
  return (
    <>
      <TileHeader title={props.title} />
      <DataBlock
        title={props.title}
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

// <Tile title={props.titles[i]} type={props.types[i]}/> :
// <DataTile title={props.titles[i]} type={props.types[i]} />}

// console.log(event?.target?.innerHTML);
