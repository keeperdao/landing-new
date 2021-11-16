import React, {useState, useCallback, useMemo, useEffect} from 'react';
import { Grid, Button, Stack, Box, Chip, Link, Select, MenuItem, ButtonGroup, Tab, Tabs, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import useSWR from 'swr'
import style from '../src/dev.module.css'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Label, LabelList, Brush} from 'recharts';
import {tvl, hgVolumeWeek, hgVolumeMonth, hgVolumeAll, kTokens} from '../src/sampleData';

const fetcher = (...args) => fetch(...args).then(res => res.json())


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${style.ToolTip} ${style.tile_header}`}>
        <p className={style.label}>{"$ " + `${payload[0].value}`}</p>
        <p className={style.label}>{`${label}`}</p>
      </div>
    );
  }
  return null;
};

const AChart = props => {

  let lg = {
    id: 'gradient',
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '100%',
    gradientUnits: "userSpaceOnUse",
  }

  let xaxis ={
    dataKey: "updated",
    tickLine: "false",
    tickSize: 0,
    tickMargin: 10,
    interval: `${props.data?.length}` - 2,
    width: 1
  }

  let chart = {
    data: props.data
  }

  let fill = {
    type: "monotone",
    dataKey: "daily_volume_usd",
    stroke: "url(#gradient)",
    fill: "url(#gradient)",
    fillOpacity: 0.5,
    strokeWidth: 3
  }

  let tooltip = {
    cursor: false,
    position: {x: 'auto', y: -75},
    content: <CustomTooltip />
  }

  return (
    <>
      <div style={{ width: "100%", height: 300 }}>
      <div className={style.ToolTipSpace}></div>
        <ResponsiveContainer>
          <AreaChart {...chart}>
            <defs>
              <linearGradient {...lg}>
                <stop offset="0.2" stopColor="#6C46D6" />
                <stop offset="0.9" stopColor="#6C46D60D" />
              </linearGradient>
            </defs>
            <XAxis {...xaxis}/>
            <Tooltip {...tooltip} />
            <Area {...fill}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      </>
    );
}

// <Brush dataKey='daily_volume_usd' height={30} stroke="#8884d8"/>

const BChart = props => {

  let lg = {
    id: 'gradient',
    x1: '0',
    y1: '0',
    x2: '0',
    y2: '100%',
    gradientUnits: "userSpaceOnUse",
  }

  let xaxis ={
    dataKey: "updated",
    tickLine: "false",
    tickSize: 0,
    tickMargin: 10,
    interval: `${props.data?.length}` - 2,
    width: 1
  }

  let chart = {
    barCategoryGap: 2,
    data: props.data
  }

  let fill = {
    type: "monotone",
    dataKey: "daily_volume_usd",
    stroke: "url(#gradient)",
    fill: "url(#gradient)",
    fillOpacity: 0.5,
    strokeWidth: 2.5
  }

  let tooltip = {
    cursor: false,
    position: {x: 'auto', y: -75},
    content: <CustomTooltip />
  }

  return (
      <div style={{ width: "100%", height: 300}}>
      <div className={style.ToolTipSpace}></div>
        <ResponsiveContainer>
          <BarChart {...chart}>
            <defs>
              <linearGradient {...lg}>
                <stop offset="0.2" stopColor="#6C46D6" />
                <stop offset="0.9" stopColor="#6C46D60D" />
              </linearGradient>
            </defs>
            <Tooltip {...tooltip} />
            <XAxis {...xaxis}/>
            <Bar {...fill} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

const TileHeader = ({activeData, title, filter, source, filterClick, sourceClick}) => {

  // console.log("rendering Header" + title);

  let fl = {
    onClick: filterClick
  }

  let s = {
    defaultValue: source && source[0],
    className: style.mini_button,
    dense: "true"
  }

  let s1 = {
    className: style.test,
    direction: "row",
    spacing: 1,
    justifyContent: "flex-end",
    alignItems: "top"
  }

  let filterList = useMemo(() => React.Children.map(filter, (item, i) =>
    <span className={`${style.mini_button} ${activeData == item && style.mini_button_selected}`}{...fl}>{item}</span>
  ), [filter]);

  let sourceList = useMemo(() => React.Children.map(filter, (item, i) =>
    <option onClick={filterClick}>{item}</option>
  ), [source]);

  return (
    <Stack direction="row">
        <div className={style.tile_header}>{title}</div>
        {filter && <Stack {...s1}>
          {filterList}
        {source && <select {...s}>
          {sourceList}
        </select>}
        </Stack>}
    </Stack>
  );
}

const DataBlock = props => {

  // console.log("rendering DataBlock");

  let numberUsers = "5,375"
  const text = <p className={style.info_data}>To date {numberUsers} users have saved Ξ302,5
                in gas and earned 5,166 ROOK by using the Hiding Game for limit orders</p>


  // const { data } = useSWR('https://api.coingecko.com/api/v3/coins/rook/tickers?exchange_ids=uniswap_v2', fetcher)

  return (
    <>
    <div className={style.tile_data}>
      {!props?.type ? "$ " /* + data?.tickers[0]?.converted_last.usd?.toLocaleString()*/ : text}
    </div>
    </>
  );
}


const Tile = ({title, type}) => {

  // console.log("rendering Tile: " + title);

  const [activeData, setActiveData] = useState("DAY");

  let data;
  const handleChange = useCallback(event => {
    setActiveData(event?.target?.innerHTML)
  }, [setActiveData])

  data = activeData == "DAY" ? hgVolumeWeek.days : activeData == "WEEK" ? hgVolumeMonth.days : hgVolumeAll.days

  let isChart = type == "Area" | type == "Bar"

  let th = {
    activeData: activeData,
    title: title,
    filter: isChart? ["DAY", "WEEK", "MONTH"] : "",
    source: isChart? "RAI/DAI" : "",
    filterClick: handleChange,
    sourceClick: handleChange
  }

  let ch = {
    type: type,
    data: data
  }

  return (

    <div className={`${style.basic_tile} ${type && style.large_tile}`}>
        <Stack spacing={2}>
          <TileHeader {...th}/>
          {type == "Area" | !type ? <DataBlock /> : ""}
          {type == "Area"  && <AChart {...ch} />}
          {type == "Bar" && <BChart {...ch} />}
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


export const Metrics = props => {

  // console.log("rendering Metrics")

  const [activeTab, setActiveTab] = useState(() => 0);
  const handleChange = useCallback((event, newValue) => {
    setActiveTab(event?.target?.value);
  }, [setActiveTab]);

  let b = {
    onClick: handleChange,
  }

  let bg = {
     disableRipple: true,
  }

  let p = {
    titles: props.titles[activeTab],
    types: props.types[activeTab]
  }

  let s1 = {
    spacing: 4,
    className: style.Container
  }

  let s2 = {
    className: style.ButtonContainer,
    direction: "row",
    spacing: 1
  }

  let buttonList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Button value={i} className={`${style.button_inactive} ${activeTab == i && style.button_active}`} {...b}>
        {item}
    </Button>
  ), [activeTab]);

  let panel = <Panel {...p} />

  return (
      <Stack {...s1}>
        <Stack {...s2}>
          {buttonList}
        </Stack>
        {panel}
      </Stack>
  );
}

export async function getStaticProps() {

  //temp
  let buttons = ['KPIs', 'Coord. Game', 'Hiding Game', 'Hiding Vaults', 'Liquidity Pools'];
  let titles = [['TOTAL VALUE LOCKED', 'TREASURY', 'DISTRIBUTED ROOK REWARDS', 'ROOK SUPPLY', 'ROOK VALUE'],
                ['NUMBER OF AUCTIONS', 'BID ROOK', 'STAKED ROOK', 'BURNED ROOK', 'ACTIVE KEEPERS', 'ACTIVE AUCTIONS'],
                ['LIMIT ORDERS', 'HIDING GAME', 'UNIQUE ORDERS', 'HIDING GAME VOLUME', 'DISTRIBUTED ROOK REWARDS'],
                ['HISTORICAL ROOK APY', 'HISTORICAL SUPPLY/BORROW', 'CURRENT ROOK APY', 'TOTAL NUMBER OF VAULTS',
                'DISTRIBUTED ROOK REWARDS', 'SAVED FROM LIQUIDATION BY JITU', 'TOTAL BORROW VOLUME', 'TOTAL SUPPLY VOLUME'],
                ['HISTORICAL APY', 'TOTAL FEES COLLECTED', 'ROOK REWARDS DISTRIBUTED']];
  let types = [["Area",,,,], [,,,,"Temp","Temp"], ["Info","Bar",,], ["Bar","Area",,,,,], ["Bar",,]];

  return {
    props: {buttons,titles, types}
  }
}

export default Metrics;
