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
      "TOTAL VALUE LOCKED" : {route: r1, identifier: 'total_tvl', type: "Area"},
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
      "HIDING GAME VOLUME TO DATE" : {prefix: "E", filter1: ["dai", "eth"]},
      "DISTRIBUTED ROOK REWARDS" : {prefix: "$"},
    },
    {
      "HISTORICAL ROOK APY" : {route: r3, identifier: 'days', type: "Bar"},
      "HISTORICAL SUPPLY/BORROW" : {route: r3, identifier: 'days', type: "Area", filter2: ["dai", "eth"]},
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

  console.log(Object.keys(routes))

  //temp
  let titles = [['TOTAL VALUE LOCKED', 'TREASURY', 'DISTRIBUTED ROOK REWARDS', 'ROOK SUPPLY', 'ROOK VALUE'],
                ['NUMBER OF AUCTIONS', 'BID ROOK', 'STAKED ROOK', 'BURNED ROOK', 'ACTIVE KEEPERS', 'ACTIVE AUCTIONS'],
                ['LIMIT ORDERS', 'HIDING GAME VOLUME', 'UNIQUE ORDERS', 'HIDING GAME VOLUME TO DATE', 'DISTRIBUTED ROOK REWARDS'],
                ['HISTORICAL ROOK APY', 'HISTORICAL SUPPLY/BORROW', 'CURRENT ROOK APY', 'TOTAL NUMBER OF VAULTS',
                'DISTRIBUTED ROOK REWARDS', 'SAVED FROM LIQUIDATION BY JITU', 'TOTAL BORROW VOLUME', 'TOTAL SUPPLY VOLUME'],
                ['HISTORICAL APY', 'TOTAL FEES COLLECTED', 'ROOK REWARDS DISTRIBUTED']];

  // let routesList = useMemo(() => React.Children.map(titles ,(item, i) => ), [titles]);
  let types = [["Area",,,,], [,,,,"Table","Table"], ["Info","Bar",,], ["Bar","Area",,,,,], ["Bar",,]];

  return {
    props: {buttons,titles, types}
  }
}
