import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";
import { CHAIN } from "../../helpers/chains";

const adapter = univ2Adapter({
  [CHAIN.ARBITRUM]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-arbitrum",
  [CHAIN.AVAX]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-avax",
  [CHAIN.BSC]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-bsc",
  [CHAIN.FANTOM]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-ftm",
  [CHAIN.POLYGON]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-matic",
  // [CHAIN.HECO]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-heco"
  [CHAIN.XDAI]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-xdai",
  // [CHAIN.MOONRIVER]: "https://moonriver-graph.elk.finance/subgraphs/name/elkfinance/elkdex-moonriver",
  [CHAIN.ELASTOS]: "https://elastos-graph.elk.finance/subgraphs/name/elkfinance/elkdex-elastos",
  [CHAIN.OKEXCHAIN]: "https://okex-graph.elk.finance/subgraphs/name/elkfinance/elkdex-okex",
  [CHAIN.KCC]: "https://kcc-graph.elk.finance/subgraphs/name/elkfinance/elkdex-kcc",
  [CHAIN.ETHEREUM]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-eth",
  [CHAIN.OPTIMISM]: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-optimism",
  // [CHAIN.CRONOS]: "https://cronos-graph.elk.finance/subgraphs/name/elkfinance/elkdex-cronos",
  [CHAIN.FUSE]: "https://fuse-graph.elk.finance/subgraphs/name/elkfinance/elkdex-fuse",
  [CHAIN.IOTEX]: "https://iotex-graph.elk.finance/subgraphs/name/elkfinance/elkdex-iotex",
  // [CHAIN.TELOS]: "https://telos-graph.elk.finance/subgraphs/name/elkfinance/elkdex-telos"
}, {
  factoriesName: "elkFactories",
  dayData: "elkDayData",
});

adapter.adapter.arbitrum.start = async () => 1648950817;
adapter.adapter.avax.start = async () => 1616118817;
adapter.adapter.bsc.start = async () => 1629251617;
adapter.adapter.fantom.start = async () => 1621562017;
adapter.adapter.polygon.start = async () => 1618019617;
adapter.adapter.xdai.start = async () => 1629251617;
adapter.adapter.elastos.start = async () => 1634954017;
adapter.adapter.okexchain.start = async () => 1649555617;
adapter.adapter.kcc.start = async () => 1634954017;
adapter.adapter.ethereum.start = async () => 1619747617;
adapter.adapter.optimism.start = async () => 1651542817;
adapter.adapter.fuse.start = async () => 1639187617;
adapter.adapter.iotex.start = async () => 1639792417;

export default adapter;
