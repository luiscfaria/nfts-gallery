export const openNFTInNewTab = (tokenAddress: string, tokenId: string) => {
  const baseUrl = "https://testnets.opensea.io/assets/";
  const chain = "goerli";

  const url = `${baseUrl}${chain}/${tokenAddress}/${tokenId}`;
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

export const formatString = (string: string, size: number): string => {
  const newString =
    string && string.length > size ? string.slice(0, size) + "..." : string;
  return newString;
};
