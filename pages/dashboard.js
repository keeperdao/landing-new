import { Dashboard } from '../src/Dashboard/Dashboard'

export const Main = props => {
  return (
      <Dashboard {...props} />
    );
  }

  export default Main;

  export async function getStaticProps() {

  //temp
  let buttons = ['KPIs', 'Coord. Game', 'Hiding Game', 'Hiding Vaults', 'Liquidity Pools'];
  let titles = [['TOTAL VALUE LOCKED', 'TREASURY', 'DISTRIBUTED ROOK REWARDS', 'ROOK SUPPLY', 'ROOK VALUE'],
                ['NUMBER OF AUCTIONS', 'BID ROOK', 'STAKED ROOK', 'BURNED ROOK', 'ACTIVE KEEPERS', 'ACTIVE AUCTIONS'],
                ['LIMIT ORDERS', 'HIDING GAME', 'UNIQUE ORDERS', 'HIDING GAME VOLUME', 'DISTRIBUTED ROOK REWARDS'],
                ['HISTORICAL ROOK APY', 'HISTORICAL SUPPLY/BORROW', 'CURRENT ROOK APY', 'TOTAL NUMBER OF VAULTS',
                'DISTRIBUTED ROOK REWARDS', 'SAVED FROM LIQUIDATION BY JITU', 'TOTAL BORROW VOLUME', 'TOTAL SUPPLY VOLUME'],
                ['HISTORICAL APY', 'TOTAL FEES COLLECTED', 'ROOK REWARDS DISTRIBUTED']];

  // let routesList = useMemo(() => React.Children.map(titles ,(item, i) => ), [titles]);
  let types = [["Area",,,,], [,,,,"Temp","Temp"], ["Info","Bar",,], ["Bar","Area",,,,,], ["Bar",,]];

  return {
    props: {buttons,titles, types}
  }
}
