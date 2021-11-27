let baseRoute = "http://172.25.0.5/api/v1/";

const routes = {
  "TOTAL VALUE LOCKED" : {route: baseRoute + "metrics/tvl", identifier: 'total_tvl'},
  "TOTAL NUMBER OF VAULTS" : {route: baseRoute + "vaults", identifier: 'num_vaults'},
  "CURRENT ROOK APY" : {route: baseRoute + "vaults", identifier: 'avg_rook_apr'},
  "TOTAL BORROW VOLUME" : {route: baseRoute + "vaults", identifier: 'borrow_usd'},
  "TOTAL SUPPLY VOLUME" : {route: baseRoute + "vaults", identifier: 'supply_usd'},
  "HIDING GAME VOLUME" : {route: baseRoute + "metrics/volume?", identifier: 'days'},
}

export {routes};
