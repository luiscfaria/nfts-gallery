import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { NftType } from "../types/types";

function useMoralis() {
  const getUserNfts = async (
    address: string
  ): Promise<NftType[]> => {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY || "error",
      });
    }
    const chain = EvmChain.GOERLI;

    try {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
        normalizeMetadata: true
      });

      const result = response.toJSON().result;
      if (result) {
        return result;
      } else {
        console.log('error')
        return [];
      }
    } catch (error) {
      console.log("🚀 ~ getUserNfts ~ error", error);
      return [];
    }
  };

  const getTotalNfts = async (
    address: string,
  ): Promise<number> => {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY || "error",
      });
    }
    const chain = EvmChain.GOERLI;

    try {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
      });

      const result = response.toJSON().total;
      if (result) {
        return result;
      } else {
        return 0;
      }
    } catch (error) {
      console.log("🚀 ~ useMoralis ~ error", error);
      return 0;
    }
  };
  return { getUserNfts, getTotalNfts };
}

export default useMoralis;
