import React, {useState, useMemo} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {TileHeader, DataBlock, DataRequest} from './Content'
import Chart from './Charts'
import themeDashboard from './Theme'

function Panel(props) {

  const titles = Object.keys(props)

  const tilesList = useMemo(() => React.Children.map(titles, (item, i) =>
    <Grid
      variant="tile-item"
      item
      sm={props[item].type? 2 : 1} xs={1}
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
            color={themeDashboard.palette.text.dark_primary}
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
            color={themeDashboard.palette.text.dark_primary}
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
        color={themeDashboard.palette.text.dark_primary}
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
      color={themeDashboard.palette.text.dark_primary}
      paragraph
    >
      {"To date, "}
      <DataBlock
        variant="headingDisplay"
        color={themeDashboard.palette.text.dark_tertiary}
        {...props}
      />
      {" users have saved "}
      <DataBlock
        variant="headingDisplay"
        color={themeDashboard.palette.text.dark_tertiary}
        prefix="Ξ "
        {...props}
      />
      {" in gas and earned "}
      <DataBlock
        variant="headingDisplay"
        color={themeDashboard.palette.text.dark_tertiary}
        {...props}
      />
      {" ROOK by using the Hiding Game for limit orders."}
    </Typography>
    </>
  )
}

export {Panel}
