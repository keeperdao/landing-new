import React, {useState, useMemo} from 'react';
import {AreaChart, Area, XAxis,ResponsiveContainer, Tooltip, BarChart, Bar, Label, Brush} from 'recharts';
import {Grid, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import themeDashboard from "./Theme"
// tbd
const gradient =
(
  <defs>
    <linearGradient
      id="gradient"
      x1="0"
      y1="0"
      x2="0"
      y2="100%"
      gradientUnits="userSpaceOnUse"
    >
      <stop
        offset="0.2"
        stopColor={themeDashboard.palette.text.dark_tertiary}
      />
      <stop
        offset="0.9"
        stopColor={themeDashboard.palette.background.dark_primary}
      />
    </linearGradient>
  </defs>
)

let tooltip = {
  cursor: false,
  position: {x: 0, y: -75},
}

let xaxis = {
  axisLine: true,
  tickSize: 0,
  tickMargin: 12,
}

let barFill = {
  type: "monotone",
  stroke: "url(#gradient)",
  strokeOpacity: 0.5,
  fill: "url(#gradient)",
  fillOpacity: 0.5,
}

let areaFill = {
  type: "monotone",
  stroke: `${themeDashboard.palette.text.dark_tertiary}`,
  strokeOpacity: 1,
  fill: "url(#gradient)",
  fillOpacity: 0.25,
  activeDot: {stroke: `${themeDashboard.palette.text.dark_tertiary}`},
}

function CustomTooltip({ active, payload, label, prefix, suffix, show}) {
  if (active && payload && payload.length && show) {
    return (
      <>
        <Typography
          variant="paragraphRegularLarge"
          display="block"
          color={themeDashboard.palette.text.dark_primary}
        >
          {prefix? prefix: ""}
          {payload[0].value}
          {suffix? suffix : ""}
        </Typography>
        <Typography
          variant="paragraphRegularLarge"
          color={themeDashboard.palette.text.dark_primary}
        >
          {`${label}`}
        </Typography>
      </>
    );
  }
  return null;
};


function Chart(props) {

  const [focusBar, setFocusBar] = useState(null);

  tooltip.content =
  (<CustomTooltip
      prefix={props.prefix}
      suffix={props.suffix}
      show={props.type == "Bar" ? focusBar : true}
  />)

  xaxis.dataKey = props?.data ? Object?.keys(props?.data[0])[0]: "";
  xaxis.interval = `${props.data?.length}` - 2;

  barFill.dataKey = props?.data ? Object.keys(props?.data[0])[1]: "";
  areaFill.dataKey = props?.data ? Object.keys(props?.data[0])[1]: "";

  return (
      <Grid
        variant="chart-container"
        item
      >
          <ResponsiveContainer>
            {props.type == "Bar"
            ?  <BarChart
                barCategoryGap={2}
                data={props.data}
              >
                {gradient}
                <Tooltip {...tooltip}/>
                <XAxis {...xaxis}/>
                <Bar
                  strokeWidth={2}
                  {...barFill}
                  onMouseEnter={()=>{setFocusBar(true)}}
                  onMouseLeave={()=>{setFocusBar(false)}}
                />
              </BarChart>

              :<AreaChart data={props.data}>
                {gradient}
                <Tooltip {...tooltip}/>
                <XAxis {...xaxis}/>
                <Area
                  strokeWidth={3}
                  {...areaFill}
                />
              </AreaChart>
            }
        </ResponsiveContainer>
      </Grid>
    );
}

export default Chart;
