import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Badge,
} from "@chakra-ui/react";
import { formatString, openNFTInNewTab } from "../helpers/general";
import { SimpleNFT } from "../types/types";

function Nftcard({ nft }: { nft: SimpleNFT }) {
  return (
    <Card maxW="sm" h={480} w={300} m={2} className="nft-card">
      <CardBody>
        <Image
          src={nft.imageUrl}
          alt="nft-image"
          borderRadius="lg"
          fallbackSrc="https://i0.wp.com/thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png?ssl=1"
        />
        <Stack mt="6" spacing="2">
          <Badge colorScheme="purple" borderRadius={6}>
            TokenId: {formatString(nft.tokenId, 12)}
          </Badge>
          <div
            className="d-flex justify-space-between"
            style={{ width: "100%" }}
          >
            <Heading size="sm" textColor="white">
              Name: {formatString(nft.name, 16)}
            </Heading>
            <Button
              colorScheme="purple"
              size="xs"
              onClick={() => openNFTInNewTab(nft.token_address, nft.tokenId)}
            >
              OpenSea
            </Button>
          </div>
          <Heading size="xs" textColor="white">
            Symbol: {formatString(nft.symbol, 16)}
          </Heading>
          <Text pt="2" fontSize="sm" textColor="white" fontFamily="Montserrat">
            {formatString(nft.description, 60)}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Nftcard;
