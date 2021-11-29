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

  let buttons =
  [
    'KPIs',
    'Coord. Game',
    'Hiding Game',
    'Hiding Vaults',
    'Liquidity Pools'
  ];

  let baseRoute = "http://172.25.0.5/api/v1/";
  let r1 = baseRoute + "metrics/tvl"
  let r2 = baseRoute + "vaults"
  let r3 = baseRoute + "metrics/volume?"

  const properties =
  [
    {
      "TOTAL VALUE LOCKED" : {route: r1, identifier: 'total_tvl', route2: r3, identifier2: "days", type: "Area"},
      "TREASURY" : {prefix: "$"},
      "DISTRIBUTED ROOK REWARDS" : {prefix: "$"},
      "ROOK SUPPLY" : {prefix: "R"},
      "ROOK VALUE" : {prefix: "$"}
    },
    {
      "NUMBER OF AUCTIONS" : {},
      "BID ROOK" : {},
      "STAKED ROOK" : {},
      "BURNED ROOK" : {},
      "ACTIVE KEEPERS" : {type: "Table"},
      "ACTIVE AUCTIONS" : {type: "Table"}
    },
    {
      "LIMIT ORDERS" : {type: "Info"},
      "HIDING GAME VOLUME" : {route: r3, identifier: 'days', type: "Bar", filter1: ["week", "month", "all"], filter2: ["dai", "eth"]},
      "UNIQUE ORDERS FILLED" : {},
      "HIDING GAME VOLUME TO DATE" : {prefix: "Ξ", filter1: ["dai", "eth"]},
      "DISTRIBUTED ROOK REWARDS" : {prefix: "$"},
    },
    {
      "HISTORICAL ROOK APY" : {route: r3, identifier: 'days', type: "Bar"},
      "HISTORICAL SUPPLY/BORROW" : {route2: r3, identifier2: "days", type: "Area", filter2: ["dai", "eth"]},
      "CURRENT ROOK APY" : {route: r2, identifier: 'avg_rook_apr'},
      "TOTAL NUMBER OF VAULTS" : {route: r2, identifier: 'num_vaults'},
      "DISTRIBUTED ROOK REWARDS" : {prefix: "$"},
      "SAVED FROM LIQUIDATION BY JITU" : {prefix: "$"},
      "TOTAL BORROW VOLUME" : {route: r2, identifier: 'borrow_usd', prefix: "$"},
      "TOTAL SUPPLY VOLUME" : {route: r2, identifier: 'supply_usd', prefix: "$"},
    },
    {
      "HISTORICAL APY" : {route: r3, identifier: 'days', type: "Bar", filter2: ["dai", "eth"]},
      "TOTAL FEES COLLECTED" : {prefix: "$", filter2: ["dai", "eth"]},
      "ROOK REWARDS DISTRIBUTED" : {prefix: "$"},
    },
  ]

  return {
    props: {buttons,properties}
  }
}
