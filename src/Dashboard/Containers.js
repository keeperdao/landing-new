import React,{ useState, useMemo } from 'react';
import { Grid, Typography, Fade } from "@material-ui/core";
import { TileHeader, DataBlock, DataRequest } from './Content'
import Chart from './Charts'
import theme from '../theme'

function Panel(props) {

  const titles = Object.keys(props)

  const tilesList = useMemo(() => React.Children.map(titles, (item, i) =>
  <Fade 
    in={true} 
    mountOnEnter 
    unmountOnExit
    easing="ease-in-out"
    timeout={500}
  >
    <Grid
      variant="tile-item"
      sm={props[item].size} xs={1}
      item
    >
      <Grid
        variant="tile-inner-container"
      >
      {
        !props[item].type && !props[item].filter1 && !props[item].filter2
        ? <DataTile title= {item} {...props[item]}/>
        : props[item].type == "Info"
          ? <InformationTile title={item}/>
          : <DynamicTile title={item} {...props[item]} />
      }
      </Grid>
    </Grid>
    </Fade>
  ), [props.titles, props.types]);

  return tilesList
}

function DynamicTile(props) {

  // console.log("rendering Tile: " + props.title);

  const [activeData, setActiveData] = useState(() => props.filter1? props.filter1[0] : "week");
  const handleChange = event => {
    event.preventDefault();
    setActiveData(event?.target?.innerHTML);
  };

  const [activeData2, setActiveData2] = useState(() => props.filter2? props.filter2[0] : "");
  const handleChange2 = event => {
    setActiveData2(event?.target?.value);
  };

  const data = DataRequest({route: props.route, identifier: props.identifier})

  const data2 = DataRequest({route: props.route2, identifier: props.identifier2, arguments: {range: activeData}})

  return (
    <>
      <TileHeader
        activeFilter={activeData}
        filterClick={handleChange}
        activeFilter2={activeData2}
        filterClick2={handleChange2}
        {...props}
      />
      {
        props.type == "Area"
        ? <DataBlock
            variant="headingDisplay"
            color={theme.palette.text.primary_dark}
            {...props}
          />
        : ""
      }
      {
        props.type == "Area" | props.type == "Bar"
        ? <Chart
            data={data2}
            {...props}
          />
        : <DataBlock
            variant="headingTitle"
            color={theme.palette.text.primary_dark}
            {...props}
          />
      }

    </>
  );
}

function DataTile (props) {

  return (
    <>
      <TileHeader title={props.title} {...props} />
      <DataBlock
        variant="headingTitle"
        color={theme.palette.text.primary_dark}
        {...props}
      />
    </>
  )
}

function InformationTile(props) {

  return(
    <>
    <TileHeader title={props.title} />
    <Typography
      variant="headingDisplay"
      color={theme.palette.text.primary_darks}
      paragraph
    >
      {"To date, "}
      <DataBlock
        variant="headingDisplay"
        color={theme.palette.accent}
        {...props}
      />
      {" users have saved "}
      <DataBlock
        variant="headingDisplay"
        color={theme.palette.accent}
        prefix="Ξ "
        {...props}
      />
      {" in gas and earned "}
      <DataBlock
        variant="headingDisplay"
        color={theme.palette.accent}
        {...props}
      />
      {" ROOK by using the Hiding Game for limit orders."}
    </Typography>
    </>
  )
}

export {Panel}
