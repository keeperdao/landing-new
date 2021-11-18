import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Label, LabelList, Brush} from 'recharts';
import {ToolTip, tile_header, label1, ToolTipSpace} from './dev.module.css'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${ToolTip} ${tile_header}`}>
        <p className={label1}>{"$ " + `${payload[0].value}`}</p>
        <p className={label1}>{`${label}`}</p>
      </div>
    );
  }
  return null;
};

const Chart = ({type, data}) => {

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
    interval: `${data?.length}` - 2,
    width: 1
  }

  let aChart = {
    data: data
  }

  let bChart = {
    barCategoryGap: 2,
    data: data
  }

  let fill = {
    type: "monotone",
    dataKey: "daily_volume_usd",
    stroke: "url(#gradient)",
    fill: "url(#gradient)",
    fillOpacity: 0.5,
  }

  let tooltip = {
    cursor: false,
    position: {x: 'auto', y: -75},
    content: <CustomTooltip />
  }

  let gradient =
  (
    <defs>
      <linearGradient {...lg}>
        <stop offset="0.2" stopColor="#6C46D6" />
        <stop offset="0.9" stopColor="#6C46D60D" />
      </linearGradient>
    </defs>
  )

  return (
      <div style={{ width: "100%", height: 300}}>
        <div className={ToolTipSpace}></div>
          <ResponsiveContainer>
            {type == "Bar" ?

              <BarChart {...bChart}>
                {gradient}
                <Tooltip {...tooltip} />
                <XAxis {...xaxis}/>
                <Bar strokeWidth={2} {...fill} />
              </BarChart> :

              <AreaChart {...aChart}>
                {gradient}
                <XAxis {...xaxis}/>
                <Tooltip {...tooltip} />
                <Area strokeWidth={3} {...fill}/>
              </AreaChart>
            }
        </ResponsiveContainer>
      </div>
    );
}

// <Brush dataKey='daily_volume_usd' height={30} stroke="#8884d8"/>

export default Chart;
