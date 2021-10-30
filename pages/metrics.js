import React from 'react';
import { Grid, Button, Container } from "@material-ui/core";
import useSWR from 'swr'
import style from './metrics.module.css'


const fetcher = (...args) => fetch(...args).then(res => res.json())

//TODO : Dynamic API routing / repositioning of SWR
const Tile = props => {

  const { title } = props
  const { data } = useSWR('https://api.coingecko.com/api/v3/coins/rook/tickers?exchange_ids=uniswap_v2', fetcher)
  // const { data } = useSWR('/api/test', fetcher)
  // {data?.name}

  return (
    <>
    {title}
    <Container className={style.bottom}>
      { data?.tickers[0].converted_last.usd }
    </ Container>
    </>
  );
}


//TODO : Tile sizing logic
const Panel = props => {

  const {titles} = props
  let tilesList = [];

  titles.forEach((item, i) => {
    tilesList.push(
    <Grid item key={i} xs={i==0? 12 : 6} className={style.panel}>
      <Tile key={i} title={titles[i]} />
    </Grid>);
  });


  return (
    <>
      {tilesList}
    </>
  );
}

//TODO : Use Tab/TabPanel?
const Metrics = () => {

  let titles = ['TOTAL VALUE LOCKED', 'TREASURY', 'DISTRIBUTED ROOK REWARDS', 'ROOK SUPPLY', 'ROOK VALUE']
  let buttons = ['KPIs'];

  let buttonsList = [];
  let panelsList = [];


  buttons.forEach((item, i) => {
    panelsList.push(<Panel name={item} key={i} titles={titles}/>);
    buttonsList.push(
      <Grid item key={i}>
        <Button key={i} variant="tab-button">{item}</Button>
      </Grid>
    );
  });


  return (
    <>
      <Container className={style.container}>
        <Grid container spacing={3}>
          {buttonsList}
        </Grid>
        <Grid container spacing={3}>
          {panelsList}
        </Grid>
      </Container>
    </>
  );
}

// "&:focus, &:active:focus": {
//   backgroundColor: COLORS.selected,
//   borderColor: COLORS.selected,
//   color: COLORS.text_primary,
// }


export default Metrics
