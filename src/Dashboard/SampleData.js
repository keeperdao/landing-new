let baseRoute = "http://172.25.0.5/api/v1/";
let r1 = baseRoute + "metrics/tvl"
let r2 = baseRoute + "vaults"
let r3 = baseRoute + "metrics/volume?"

const routes = {
  "TOTAL VALUE LOCKED" : {route: r1, identifier: 'total_tvl'},
  "TOTAL NUMBER OF VAULTS" : {route: r2, identifier: 'num_vaults'},
  "CURRENT ROOK APY" : {route: r2, identifier: 'avg_rook_apr'},
  "TOTAL BORROW VOLUME" : {route: r2, identifier: 'borrow_usd'},
  "TOTAL SUPPLY VOLUME" : {route: r2, identifier: 'supply_usd'},
  "HIDING GAME VOLUME" : {route: r3, identifier: 'days'},
  "HISTORICAL ROOK APY" : {route: r3, identifier: 'days'},
  "HISTORICAL APY" : {route: r3, identifier: 'days'},
}

console.log(Object.keys(routes))

export {routes};
