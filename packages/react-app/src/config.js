import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xCcb023170b096da50Ff12353D010AB0F1b81B44c"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "",
  },
};