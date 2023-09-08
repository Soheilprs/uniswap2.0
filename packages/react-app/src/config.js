import { Goerli } from "@usedapp/core";

// export const ROUTER_ADDRESS = "0xCcb023170b096da50Ff12353D010AB0F1b81B44c"; 
export const ROUTER_ADDRESS = "0xCcb023170b096da50Ff12353D010AB0F1b81B44c"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/lENQQ9Ydzlkd6OCHLaR_urix7H4VPfzm",
  },
};