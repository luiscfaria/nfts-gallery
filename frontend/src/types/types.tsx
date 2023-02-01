export type NftType = {
  amount?: string | undefined;
  block_number: string;
  block_number_minted: string;
  contract_type: string;
  last_metadata_sync: string;
  last_token_uri_sync: string;
  metadata?: string | undefined;
  minter_address?: string | undefined;
  name: string;
  owner_of: string;
  symbol: string;
  token_address: string;
  token_hash: string;
  token_id: string;
  token_uri?: string | undefined;
  normalized_metadata?: object  | undefined
};

export type SimpleNFT = {
  name: string;
  symbol: string;
  tokenId: string;
  imageUrl: string;
  description: string
  token_address: string
};
