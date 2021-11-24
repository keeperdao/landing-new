import React, {useCallback, useState, useMemo} from 'react';
import {TileHeader, DataBlock} from './Content'
import Chart from './Charts'
import {tvl, hgVolumeWeek, hgVolumeMonth, hgVolumeAll, kTokens, routes} from './SampleData';
import {Grid, Stack} from "@material-ui/core";
import {basic_tile, large_tile, info_data} from './dev.module.css'
import theme, {COLORS} from '../theme'

const Panel = ({titles, types}) => {

  console.log("rendering Panel")

  let tilesList = useMemo(() => React.Children.map(titles, (item, i) =>
    <Grid item xs={types[i]? 12 : 6} >
        <Tile key={titles[i]} title={titles[i]} type={types[i]}/>
    </Grid>
  ), [titles, types]);

  return (
      <Grid container spacing={0.5} maxWidth="100vw" minWidth={theme.breakpoints.values["min"]}>
        {tilesList}
      </Grid>
  );
}


const Tile = ({title, type}) => {

  // console.log("rendering Tile: " + title);

  const [activeData, setActiveData] = useState(() => 0);

  let data;

  const handleChange = event => {
    setActiveData(event?.target?.value);
  };

  const handleSource = useCallback(event => {
    setActiveData(event?.target?.value)
  }, [setActiveData])

  data = activeData == 0 | activeData == "RAI/DAI" ? hgVolumeWeek.days : activeData == 1 | activeData == "ETH" ? hgVolumeMonth.days : hgVolumeAll.days

  let isChart = type? type == "Area" | type == "Bar" : undefined;

  let th = {
    activeFilter: activeData,
    title: title,
    filter: isChart? ["DAY", "WEEK", "MONTH"] : "",
    source: isChart? ["RAI/DAI", "ETH", "OTHER"] : "",
    filterClick: handleChange,
    sourceClick: handleSource
  }

  let ch = {
    type: type,
    data: data
  }

  const text = <p className={info_data}>To date 5,375 users have saved Ξ302,5
                in gas and earned 5,166 ROOK by using the Hiding Game for limit orders</p>


  return (

    <div className={`${basic_tile} ${type ? large_tile : ""}`}>
        <Stack spacing={2}>
          <TileHeader {...th}/>
          {type == "Area" | !type ? <DataBlock title={title}/> : ""}
          {isChart ? <Chart {...ch} /> : ""}
          {type == "Info" ? text : ""}
        </Stack>
  </div>
  );
}


export {
  Tile,
  Panel,
}
