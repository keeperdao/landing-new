import React, {useState} from 'react';
import { Grid, Button, Stack } from "@material-ui/core";
import useSWR from 'swr'
import style from '../src/dev.module.css'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar} from 'recharts';
import {tvl, hgVolumeWeek, hgVolumeMonth, hgVolumeAll, kTokens} from '../src/sampleData'


//major refactor req
const fetcher = (...args) => fetch(...args).then(res => res.json())

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log(payload)
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const AChart = props => {

  const ChartType = props.type;

  const dataSet = props.data == "Week" ? hgVolumeWeek.days: props.data == "Month" ? hgVolumeMonth.days : hgVolumeAll.days


  return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={dataSet} >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#6C46D6" stopOpacity={0.5}/>
                <stop offset="85%" stopColor="#6C46D60D" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <Tooltip  />
            <Area type="monotone" dataKey="daily_volume_usd" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
}

const BChart = props => {

  const ChartType = props.type;

  const dataSet = props.data == "Week" ? hgVolumeWeek.days: props.data == "Month" ? hgVolumeMonth.days : hgVolumeAll.days

  return (
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dataSet} >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#6C46D6" stopOpacity={0.5}/>
                <stop offset="85%" stopColor="#6C46D60D" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <Tooltip  />
            <Bar type="monotone" dataKey="daily_volume_usd" stroke="#8884d8" fillOpacity={1} fill="url(#colorPv)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

const Tile = props => {

  const {data} = useSWR('https://api.coingecko.com/api/v3/coins/rook/tickers?exchange_ids=uniswap_v2', fetcher)

  const [activeTab, setActiveTab] = useState("Week");
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  let numberUsers = "5,375"
  const text = <p className={style.info_data}>To date {numberUsers} users have saved Ξ302,5 in gas and earned 5,166 ROOK by using the Hiding Game for limit orders</p>

  let test = props.type ? props.type == "Area" ? <AChart type={props.type} data={activeTab}/> : props.type == "Bar" ? <BChart type={props.type} data={activeTab} /> : props.type == "Info" ? text : "" : ""
  let filter = props.type == "Area" | props.type == "Bar"? <Stack direction="row" spacing={1} justify-content="flex-end"> <div className={style.tile_header}>{props.title}</div> <Button className={style.button_inactive} onClick={() => setActiveTab("Week")} >Week</Button><Button className={style.button_inactive} onClick={() => setActiveTab("Month")}>Month</Button><Button className={style.button_inactive} onClick={() => setActiveTab("All")}>All</Button> </Stack> : <div className={style.tile_header}>{props.title}</div>

  let reqPrice = props.type == "Bar" | props.type == "Info" | props.type == "Temp"? "" : <div className={style.tile_data}>${data?.tickers[0].converted_last.usd.toLocaleString()}</div>

  return (
    <div className={`${style.basic_tile} ${props.type? style.large_tile : ""}`}>
        <Stack spacing={1} justifyContent="space-evenly">
            {filter}
            {reqPrice}
            {test}
        </Stack>
  </div>
  );
}

const Panel = props => {

  let tilesList = [];

  props.titles.forEach((item, i) => {
    tilesList.push(
    <Grid item key={i} xs={props.types[i]? 12 : 6} >
        <Tile title={props.titles[i]} type={props.types[i]} />
    </Grid>);
  });

  return (
      <Grid container spacing={0.5}>
        {tilesList}
      </Grid>
  );
}

const Temp = props => {
  return null;
}

export const Metrics = props => {

  let buttonsList = [];
  let panel;

  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  props.buttons.forEach((item, i) => {
    panel = activeTab == i ? <Panel key={i} titles={props.titles[i]} types={props.types[i]} /> : panel;
    buttonsList.push(
      <Button
        key={i}
        className={`${style.button_inactive} ${activeTab == i && style.button_active}`}
        onClick={() => setActiveTab(i)} target="_blank" rel="noopener">
        {item}
      </Button>
    );
  });


  return (
      <Stack className={style.stack} spacing={4}>
        <Stack className={style.group} direction="row" spacing={1}>
          {buttonsList}
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
  let types = [["Area",,,,], [,,,,"Temp","Temp"], ["Info","Bar",,], ["Bar","Area",,,,,,], ["Bar",,]];

  return {
    props: {buttons,titles,types}
  }
}

export default Metrics;
