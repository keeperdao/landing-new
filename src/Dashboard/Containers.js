import React, {useCallback, useState} from 'react';
import {TileHeader, DataBlock} from './Content'
import Chart from './Charts'
import {tvl, hgVolumeWeek, hgVolumeMonth, hgVolumeAll, kTokens, routes} from './SampleData';
import {Grid, Stack} from "@material-ui/core";
import {basic_tile, large_tile} from './dev.module.css'


const Tile = ({title, type}) => {

  // console.log("rendering Tile: " + title);

  const [activeData, setActiveData] = useState("DAY");

  let data;
  const handleFilter = useCallback(event => {
    setActiveData(event?.target?.innerHTML)
  }, [setActiveData])

  const handleSource = useCallback(event => {
    setActiveData(event?.target?.value)
  }, [setActiveData])

  data = activeData == "DAY" ? hgVolumeWeek.days : activeData == "WEEK" ? hgVolumeMonth.days : hgVolumeAll.days

  let isChart = type == "Area" | type == "Bar"

  let th = {
    activeData: activeData,
    title: title,
    filter: isChart? ["DAY", "WEEK", "MONTH"] : "",
    source: isChart? "RAI/DAI" : "",
    filterClick: handleFilter,
    sourceClick: handleSource
  }

  let ch = {
    type: type,
    data: data
  }

  return (

    <div className={`${basic_tile} ${type ? large_tile : ""}`}>
        <Stack spacing={2}>
          <TileHeader {...th}/>
          {type == "Area" | !type ? <DataBlock title={title}/> : ""}
          {isChart ? <Chart {...ch} /> : ""}
          {type == "Info" && <DataBlock type={"info"} />}
        </Stack>
  </div>
  );
}


const Panel = ({titles, types}) => {

  // console.log("rendering Panel")

  let tilesList = React.Children.map(titles, (item, i) =>
    <Grid item xs={types[i]? 12 : 6} >
        <Tile key={titles[i]} title={titles[i]} type={types[i]}/>
    </Grid>
  );

  return (
      <Grid container spacing={0.5}>
        {tilesList}
      </Grid>
  );
}

export {
  Tile,
  Panel,
}

// const handleFilter = event => {
//   setActiveData(event?.target?.innerHTML)
// }

// const handleSource = event => {
//   // console.log(event?.target?.value)
//   setActiveData(event?.target?.value)
// }
