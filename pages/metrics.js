import React, {useState} from 'react';
import { Grid, Button, Stack } from "@material-ui/core";
import useSWR from 'swr'
import style from '../src/dev.module.css'


const fetcher = (...args) => fetch(...args).then(res => res.json())

const Tile = props => {

  const {data} = useSWR('https://api.coingecko.com/api/v3/coins/rook/tickers?exchange_ids=uniswap_v2', fetcher)

  return (
      <div className={`${style.basic_tile} ${props.size? style.large_tile : ""}`}>
        <Stack spacing={1}>
            <div className={style.tile_header}>{props.title}</div>
            <div className={style.tile_data}>${data?.tickers[0].converted_last.usd.toLocaleString()}</div>
        </Stack>
      </div>
  );
}

const Panel = props => {

  let tilesList = [];

  props.titles.forEach((item, i) => {
    tilesList.push(
    <Grid item key={i} xs={props.sizes[i]? 12 : 6} >
        <Tile title={props.titles[i]} size={props.sizes[i]} />
    </Grid>);
  });

  return (
      <Grid container spacing={0.5}>
        {tilesList}
      </Grid>
  );
}

export const Metrics = props => {

  let buttonsList = [];
  let panel;

  //tbd approach
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  props.buttons.forEach((item, i) => {
    panel = activeTab == i ? <Panel key={i} titles={props.titles[i]} sizes={props.sizes[i]} /> : panel;
    buttonsList.push(
      <Button
        key={i}
        className={`${style.button_inactive} ${activeTab == i && style.button_active}`}
        onClick={() => setActiveTab(i)}>
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
  let sizes = [[1,,,,], [,,,,1,1], [1,1,,], [1,1,,,,,,], [1,,]];

  return {
    props: {buttons,titles,sizes}
  }
}

export default Metrics
