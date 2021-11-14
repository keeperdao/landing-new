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

// <p className="label">{`${label} ${payload[0].value}`}</p>


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
    stroke: "#6C46D6",
    fill: "url(#gradient)",
    fillOpacity: 1,
    strokeWidth: 2
  }

  let tooltip = {
    cursor: false,
    position: {x: 'auto', y: -75},
    content: <CustomTooltip />
  }

  return (
    <>
      <div style={{ width: "100%", height: 300 }}>
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
    strokeWidth: 2
  }

  let tooltip = {
    cursor: false,
    position: {x: 'auto', y: -75},
    content: <CustomTooltip />
  }

  return (
      <div style={{ width: "100%", height: 300}}>
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


const testingState = state => {
    console.log(state);
}

// ticks={[props.data[1].updated, props.data[props.data.length-1].updated]}

const Tile = props => {

  console.log("rendering Tile: " + props?.title)


  // let data;
  const {data} = useSWR('https://api.coingecko.com/api/v3/coins/rook/tickers?exchange_ids=uniswap_v2', fetcher)

  const [activeTab, setActiveTab] = useState(() => hgVolumeWeek.days);
  const handleChange = useCallback(event => {
    setActiveTab(hgVolumeMonth.days)
  }, [setActiveTab])



  let numberUsers = "5,375"
  const text = <p className={style.info_data}>To date {numberUsers} users have saved Ξ302,5 in gas and earned 5,166 ROOK by using the Hiding Game for limit orders</p>

  let test = props.type ? props.type == "Area" ? <><div className={style.ToolTipSpace}></div><AChart type={props.type} data={activeTab} /> </>: props.type == "Bar" ? <><div className={style.ToolTipSpace}></div><BChart type={props.type} data={activeTab} /></> : props.type == "Info" ? text :  ""
 : ""
  let filter = props.type == "Bar" | props.type == "Area" ? <Stack direction="row" className={style.outer_stack}><div className={style.tile_header}>{props.title}</div><Stack direction="row" spacing={1} justifyContent="flex-end" className={style.test}> <span className={style.mini_button} onClick={() => setActiveTab(hgVolumeWeek.days)}>WEEK</span><span className={style.mini_button} onClick={() => setActiveTab(hgVolumeMonth.days)}>MONTH</span><span className={style.mini_button} onClick={() => setActiveTab(hgVolumeAll.days)}>ALL</span> </Stack></Stack> : <div className={style.tile_header}>{props.title}</div>

  let reqPrice = props.type == "Bar" | props.type == "Info" | props.type == "Temp"? "" : <div className={style.tile_data}>${data?.tickers[0]?.converted_last.usd?.toLocaleString()}</div>

  return (

    <div className={`${style.basic_tile} ${props.type && style.large_tile}`}>
        <Stack spacing={1} justifyContent="space-evenly">
            <Box>{filter}</Box>
            {reqPrice}
            {test}
        </Stack>
  </div>
  );
}

const Panel = props => {

  // console.log("rendering Panel")

  let tilesList = React.Children.map(props.titles ,(item, i) =>
    <Grid item key={i} xs={props.types[i]? 12 : 6} >
        <Tile title={props.titles[i]} type={props.types[i]} />
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
    spacing: 4
  }

  let s2 = {
    className: style.ButtonContainer,
    direction: "row",
    spacing: 1
  }

  let buttonList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Button key={i} value={i} className={`${style.button_inactive} ${activeTab == i && style.button_active}`} {...b}>
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
