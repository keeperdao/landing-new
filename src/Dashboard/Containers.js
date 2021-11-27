import React, { useState, useMemo } from 'react';
import { TileHeader, DataBlock, DataRequest } from './Content'
import Chart from './Charts'
import { routes } from './SampleData';
import { Grid } from "@material-ui/core";
import theme from '../theme'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const TileGrid = styled(Grid)({
  padding: 4,
  skipSx: true,
})

const TileContainer = styled(Grid)({
  background: theme.palette.background.tile,
})

const DataTile = props => {

  return (
    <>
      <TileHeader title={props.title} />
      <DataBlock title={props.title} variant="headingTitle" prefix="$" color={theme.palette.text_accent} />
    </>

  )
}

const Panel = props => {

  console.log("rendering Panel")

  let tilesList = useMemo(() => React.Children.map(props.titles, (item, i) =>
    <TileGrid item tab={props.types[i]? 2 : 1} xs={1} >
      <TileContainer>
        {props.types[i] ? <Tile title={props.titles[i]} type={props.types[i]}/> :
        <DataTile title={props.titles[i]} type={props.types[i]} />}
      </TileContainer>
    </TileGrid>
  ), [props.titles, props.types]);

  return <>{tilesList}</>
}


const Tile = props => {

  // console.log("rendering Tile: " + props.title);

  const [activeData, setActiveData] = useState(() => "week");

  const handleChange = event => {
    console.log(event?.target?.innerHTML);
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
      <TileHeader {...th}/>
      {props.type == "Area" | !props.type ? <DataBlock title={props.title} variant="headingDisplay" color={theme.palette.text_primary} prefix="$" /> : ""}
      {isChart ? <Chart type={props.type} data={data} /> : ""}
    </>
  );
}


export { Tile, Panel }
