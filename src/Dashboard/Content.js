import React, {useMemo} from 'react';
import {Stack} from "@material-ui/core";
import useSWR, {useSWRConfig} from 'swr'
import {routes} from './SampleData';
import {mini_button, test_header, mini_button_selected, tile_header, info_data, tile_data, test} from './dev.module.css'

const TileHeader = ({activeData, title, filter, source, filterClick, sourceClick}) => {

  // console.log("rendering Header" + title);

  let fl = {
    onClick: filterClick
  }

  let s = {
    defaultValue: source && source[0],
    className: mini_button,
    dense: "true",
    onChange: sourceClick
  }

  let s1 = {
    className: test,
    direction: "row"
  }

  let s2 = {
    className: test,
    direction: "row",
    spacing: 1,
    justifyContent: "flex-end",
    alignItems: "top"
  }

  let filterList = useMemo(() => React.Children.map(filter, (item, i) =>
    <span className={`${mini_button} ${activeData == item ? mini_button_selected : ""}`}{...fl}>{item}</span>
  ), [filter]);

  let sourceList = useMemo(() => React.Children.map(filter, (item, i) =>
    <option value={item} className={mini_button}>{item}</option>
  ), [source]);

  return (
    <Stack {...s1}>
        <div className={tile_header}>{title}</div>
        {filter && <Stack {...s2}>
          {filterList}
        {source && <select {...s}>
          {sourceList}
        </select>}
        </Stack>}
    </Stack>
  );
}

const DataBlock = ({type, title}) => {

  // console.log("rendering DataBlock: " + title);

  let numberUsers = "5,375"
  const text = <p className={info_data}>To date {numberUsers} users have saved Ξ302,5
                in gas and earned 5,166 ROOK by using the Hiding Game for limit orders</p>

  const { data : test } = useSWR(routes[title]?.route)
  let temp = test? test[routes[title]?.identifier] : ""

  // const { cache } = useSWRConfig()
  // console.log(cache)

  return (
    <>
    <div className={tile_data}>
      {!type ? "$ " + `${temp.toLocaleString()}` /* + data?.tickers[0]?.converted_last.usd?.toLocaleString()*/ : text}
    </div>
    </>
  );
}

export {
  TileHeader,
  DataBlock,
}
