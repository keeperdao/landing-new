import {AreaChart, Area, XAxis,ResponsiveContainer, Tooltip, BarChart, Bar, Label, Brush} from 'recharts';
import {Grid, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import theme from '../theme'

const ChartGrid = styled(Grid)({
  marginTop: 96,
  height: "50vh",
})

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
        stopColor={theme.palette.text.accent}
      />
      <stop
        offset="0.9"
        stopColor={theme.palette.background.tile}
      />
    </linearGradient>
  </defs>
)

function CustomTooltip({ active, payload, label, prefix, suffix}) {
  if (active && payload && payload.length) {
    return (
      <>
        <Typography
          variant="paragraphRegularMedium"
          display="block"
          color={theme.palette.text.primary_dark}
        >
          {prefix? prefix: ""}
          {payload[0].value}
          {suffix? suffix : ""}
        </Typography>
        <Typography
          variant="paragraphRegularMedium"
          color={theme.palette.text.primary_dark}
        >
          {`${label}`}
        </Typography>
      </>
    );
  }
  return null;
};


function Chart(props) {

  let tooltip = {
    cursor: false,
    content: <CustomTooltip
                prefix={props.prefix}
                suffix={props.suffix}
              />,
    position: {x: 0, y: -75},
  }

  let xaxis = {
    dataKey: props?.data ? Object?.keys(props?.data[0])[0]: "",
    tickLine: "false",
    tickSize: 0,
    tickMargin: 10,
    interval: `${props.data?.length}` - 2,
    fill: theme.palette.text_primary,
  }

  let fill = {
    type: "monotone",
    dataKey: props?.data ? Object.keys(props?.data[0])[1]: "",
    stroke: "url(#gradient)",
    fill: "url(#gradient)",
    fillOpacity: 0.5,
  }

  return (
      <Grid
        variant="chart-container"
        item
      >
          <ResponsiveContainer>
            {props.type == "Bar" ?

              <BarChart
                barCategoryGap={2}
                data={props.data}
              >
                {gradient}
                <Tooltip {...tooltip}/>
                <XAxis {...xaxis}/>
                <Bar
                  strokeWidth={2}
                  {...fill}
                />
              </BarChart> :

              <AreaChart data={props.data}>
                {gradient}
                <Tooltip {...tooltip}/>
                <XAxis {...xaxis}/>
                <Area strokeWidth={3}
                      {...fill}
                />
              </AreaChart>
            }
        </ResponsiveContainer>
      </Grid>
    );
}

export default Chart;
