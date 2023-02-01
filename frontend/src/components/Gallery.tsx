import { Button, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import useMoralis from "../helpers/useMoralis";
import { SimpleNFT } from "../types/types";
import Nftcard from "./Nftcard";

function Gallery() {
  const { address } = useAccount();
  const { getUserNfts, getTotalNfts } = useMoralis();
  const [visible, setVisible] = useState<number>(9);
  const [total, setTotal] = useState<number>(100);
  const [Nfts, setNfts] = useState<SimpleNFT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fallBackDescription = "No description available.";

  const initTotal = async () => {
    const total = await getTotalNfts(address as string);
    if (total) {
      setTotal(total);
    }
  };
  

  const initNFTs = async () => {
    setLoading(true);
    const data = await getUserNfts(address as string);
    if (data) {
      const nfts: SimpleNFT[] = [];
      for (let i = 0; i < data.length; i++) {
        const elMetadata = JSON.parse(data[i].metadata as string);
        const element: SimpleNFT = {
          name: data[i].name,
          symbol: data[i].symbol,
          tokenId: data[i].token_id,
          token_address: data[i].token_address,
          imageUrl: elMetadata
            ? elMetadata.image.replace(
                "ipfs://",
                "https://gateway.pinata.cloud/ipfs/"
              )
            : null,
          description: elMetadata && elMetadata.description ? elMetadata.description : fallBackDescription,
        };
        nfts.push(element);
      }
      setNfts(nfts);
    }
    setLoading(false);
  };

  useEffect(() => {
    initNFTs();
    initTotal();
  }, [address]);

  const handleLoadMore = () => {
    setVisible((visible) => visible + 6);
  };

  return (
    <div className="gallery">
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <h1>Your NFTs Gallery</h1>
          <div className="nft-grid">
            {Nfts.length > 0 ? (
              Nfts.slice(0, visible).map((el, index) => (
                <Nftcard key={index} nft={el} />
              ))
            ) : (
              <h1
                className="info-h1"
                style={{ fontWeight: "500", marginTop: "1rem" }}
              >
                No NFTs were found for this wallet.
              </h1>
            )}
          </div>
          {visible < total ? (
            <Button colorScheme="purple" my={6} onClick={handleLoadMore}>
              Load more NFTs
            </Button>
          ) : null}
        </>
      )}
    </div>
  );
}

export default Gallery;
