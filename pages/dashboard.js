import { Dashboard } from '../src/Dashboard/Dashboard'
import Layout from '../src/Dashboard/Layout'

export const Main = props => {
  return (
    <Dashboard {...props} />
  );
}

export default Main;

Main.getLayout = function getLayout(page, colorMode, setColorMode) {
  return (
    <Layout
      colorMode={colorMode}
      setColorMode={setColorMode}
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps() {

const buttons =
  [
    'KPIs',
    'Coord. Game',
    'Hiding Game',
    'Hiding Vaults',
    'Liquidity Pools'
  ];

const apiBaseRoute = "http://172.19.0.6/api/v1";

const routes = 
  [
    `${apiBaseRoute}/metrics/tvl`,
    `${apiBaseRoute}/vaults`,
    `${apiBaseRoute}/metrics/volume?`,
  ]

const properties =
  [
    {
      "TOTAL VALUE LOCKED": { route: routes[0], identifier: 'total_tvl', route2: routes[2], identifier2: "days", type: "Area", prefix: "$", size: 2 },
      "TREASURY": { prefix: "$", size: 1 },
      "DISTRIBUTED ROOK REWARDS": { prefix: "$", size: 1 },
      "ROOK SUPPLY": { prefix: "R", size: 1 },
      "ROOK VALUE": { prefix: "$", size: 1 }
    },
    {
      "NUMBER OF AUCTIONS": { size: 1 },
      "BID ROOK": { prefix: "R", size: 1 },
      "STAKED ROOK": { prefix: "R", size: 1 },
      "BURNED ROOK": { prefix: "R", size: 1 },
    },
    {
      "LIMIT ORDERS": { type: "Info", size: 2 },
      "HIDING GAME VOLUME": { route2: routes[2], identifier2: 'days', type: "Bar", optionsFilter: ["week", "month", "all"], selectionsFilter: ["dai", "eth"], prefix: "$", size: 2 },
      "UNIQUE ORDERS FILLED": { size: 1 },
      "HIDING GAME VOLUME TO DATE": { prefix: "Ξ ", optionsFilter: ["dai", "eth"], size: 1 },
      "DISTRIBUTED ROOK REWARDS": { prefix: "$", size: 1 },
    },
    {
      "HISTORICAL ROOK APY": { route2: routes[2], identifier2: 'days', type: "Bar", suffix: "% APY", size: 2 },
      "HISTORICAL SUPPLY/BORROW": { route2: routes[2], identifier2: "days", type: "Area", selectionsFilter: ["supply", "borrow"], prefix: "$", size: 2 },
      "CURRENT ROOK APY": { route: routes[1], identifier: 'avg_rook_apr', suffix: "% APY", size: 1 },
      "TOTAL NUMBER OF VAULTS": { route: routes[1], identifier: 'num_vaults', size: 1 },
      "DISTRIBUTED ROOK REWARDS": { prefix: "$", size: 1 },
      "SAVED FROM LIQUIDATION BY JITU": { prefix: "$", size: 1 },
      "TOTAL BORROW VOLUME": { route: routes[1], identifier: 'borrow_usd', prefix: "$", size: 1 },
      "TOTAL SUPPLY VOLUME": { route: routes[1], identifier: 'supply_usd', prefix: "$", size: 1 },
    },
    {
      "HISTORICAL APY": { route2: routes[2], identifier2: 'days', type: "Bar", selectionsFilter: ["dai pool", "eth pool"], suffix: "% APY", size: 2 },
      "TOTAL FEES COLLECTED": { prefix: "$", selectionsFilter: ["dai pool", "eth pool"], size: 1 },
      "ROOK REWARDS DISTRIBUTED": { prefix: "$", size: 1 },
    },
  ]

  let fallback = {}
  for (var i = 0; i < routes.length; i++){
    try {
      fallback[`${routes[i]}`] = await fetch(routes[i]).then(res => res.json());
    } catch(err) {/*tbd*/}
  }

  return {
    props: { 
      buttons, 
      properties, 
      fallback
    }
  }
}
