import { AreaChart, Area, XAxis,ResponsiveContainer, Tooltip, BarChart, Bar, Label, LabelList, Brush} from 'recharts';
import { Button, Grid } from '@mui/material';
import * as Ttip from '@mui/material/Tooltip';
import theme from '../theme'

const lg = {
  id: 'gradient',
  x1: '0',
  y1: '0',
  x2: '0',
  y2: '100%',
  gradientUnits: "userSpaceOnUse",
}

// tbd
const gradient =
(
  <defs>
    <linearGradient {...lg}>
      <stop offset="0.2" stopColor="#6C46D6" />
      <stop offset="0.9" stopColor="#6C46D60D" />
    </linearGradient>
  </defs>
)

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <>
      <div className={`${ToolTip1} ${tile_header}`}>
        <p className={label1}>{"$ " + `${payload[0].value}`}</p>
        <p className={label1}>{`${label}`}</p>
      </div>
      </>
    );
  }
  return null;
};

const tooltip = {
  cursor: false,
  position: {x: 'auto', y: -75},
  // content: <CustomTooltip />
}

const Chart = props => {

  // console.log(data)

  let xaxis ={
    dataKey: "updated",
    tickLine: "false",
    tickSize: 0,
    tickMargin: 10,
    interval: `${props.data?.length}` - 2,
    width: 1,
    fill: theme.palette.text_primary,
  }

  let aChart = {
    data: props.data
  }

  let bChart = {
    barCategoryGap: 2,
    data: props.data
  }

  let fill = {
    type: "monotone",
    dataKey: "daily_volume_usd",
    stroke: "url(#gradient)",
    fill: "url(#gradient)",
    fillOpacity: 0.5,
  }

  return (
      <Grid item style={{ maxWidth: "md", height: "50vh"}}>
          <ResponsiveContainer>
            {props.type == "Bar" ?

              <BarChart {...bChart}>
                {gradient}
                <XAxis {...xaxis}/>
                <Bar strokeWidth={2} {...fill} />
              </BarChart> :

              <AreaChart {...aChart}>
                {gradient}
                <XAxis {...xaxis}/>
                <Area strokeWidth={3} {...fill}/>
              </AreaChart>
            }
        </ResponsiveContainer>

      </Grid>
    );
}

// <Button>Arrow</Button>


// <Brush dataKey='daily_volume_usd' height={30} stroke="#8884d8"/>

export default Chart;
