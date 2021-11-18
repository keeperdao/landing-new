import React, {useState, useCallback, useMemo, useEffect} from 'react';
import { Grid, Button, Stack, Box, Chip, Link, Select, MenuItem, ButtonGroup, Tab, Tabs, RadioGroup, FormControlLabel, Radio} from "@material-ui/core";
import {SWRConfig} from 'swr'
import {Container, ButtonContainer, button_inactive, button_active} from './dev.module.css'
// import Chart from '../src/Dashboard/Chart'
// import {TileHeader, DataBlock} from '../src/Dashboard/Content'
import {Panel} from './Containers'
// import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Label, LabelList, Brush} from 'recharts';
// import {tvl, hgVolumeWeek, hgVolumeMonth, hgVolumeAll, kTokens, routes} from '../src/Dashboard/SampleData';

const fetcher = (...args) => fetch(...args).then(res => res.json())


export const Dashboard = props => {

  // console.log("rendering Metrics")

  const [activeTab, setActiveTab] = useState(() => 0);
  const handleChange = useCallback(event => {
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
    className: Container
  }

  let s2 = {
    className: ButtonContainer,
    direction: "row",
    spacing: 1
  }

  let buttonList = useMemo(() => React.Children.map(props.buttons,(item, i) =>
    <Button value={i} className={`${button_inactive} ${activeTab == i ? button_active : ""}`} {...b}>
        {item}
    </Button>
  ), [activeTab]);

  let panel = <Panel {...p} />

  return (
      <Stack {...s1}>
        <Stack {...s2}>
          {buttonList}
        </Stack>
        <SWRConfig value={{fetcher: fetcher}}>
        {panel}
        </SWRConfig>
      </Stack>
  );
}
