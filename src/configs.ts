import { zeroAddress } from "@defi.org/web3-candies";

export interface TokenData {
  address: string;
  decimals: number;
  symbol: string;
  logoUrl?: string;
}

export interface Config {
  partner: string;
  chainId: number;
  twapAddress: string;
  lensAddress: string;
  exchangeAddress: string;
  bidDelaySeconds: number;
  minChunkSizeUsd: number;
  wToken: TokenData;
}

const ChainConfigs = {
  // eth: {
  //   chainId: 1,
  //   twapAddress: "0x85253417E9BF576980318E7882147618C4980969",
  //   lensAddress: "0x1c4b5371dfDF424a162974C2361a6405b1F772cf",
  //   bidDelaySeconds: 60,
  //   minChunkSizeUsd: 100,
  //   wToken: {
  //     address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  //     decimals: 18,
  //     symbol: "WETH",
  //     logoUrl: "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
  //   },
  // },
  ftm: {
    chainId: 250,
    twapAddress: "0xf77Ad005aBF7e31f669ce89a6568B2f39Ca92cDe",
    lensAddress: "0x715181517a576eA382E4351F10EAE693Cfe4471a",
    bidDelaySeconds: 60,
    minChunkSizeUsd: 10,
    wToken: {
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      decimals: 18,
      symbol: "WFTM",
      logoUrl: "https://tokens.1inch.io/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83.png",
    },
  },
  poly: {
    chainId: 137,
    twapAddress: "0x48423e62acbfEF7779b5b4a5E7d6Fbd39E623d78",
    lensAddress: "0xe84CaEc86eCF3f0AB4267dC6130D9a5510e73DFb",
    bidDelaySeconds: 60,
    minChunkSizeUsd: 10,
    wToken: {
      address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
      decimals: 18,
      symbol: "WMATIC",
      logoUrl: "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    },
  },
};

// export const UniswapV2Config: Config = {
//   ...ChainConfigs.eth,
//   partner: "UniswapV2",
//   exchangeAddress: "0xE83df5BfA9F14a84e550c38c4ec505cB22C6A0d7",
// };
//
// export const SushiSwapConfig: Config = {
//   ...ChainConfigs.eth,
//   partner: "SushiSwap",
//   exchangeAddress: "0x72a18A408e329E7052d08aA0746243Dc30Ad2530",
// };

export const QuickSwapConfig: Config = {
  ...ChainConfigs.poly,
  partner: "QuickSwap",
  exchangeAddress: "0xeFE1B6096838949156e5130604434A2a13c68C68",
};

export const SpiritSwapConfig: Config = {
  ...ChainConfigs.ftm,
  partner: "SpiritSwap",
  exchangeAddress: "0xAd19179201be5A51D1cBd3bB2fC651BB05822404",
};

export const SpookySwapConfig: Config = {
  ...ChainConfigs.ftm,
  partner: "SpookySwap",
  exchangeAddress: "0x37F427DA0D12Fe2C80aCa09EE08e7e92A1B2B114",
};

export const nativeTokenAddresses = [
  zeroAddress,
  "0x0000000000000000000000000000000000001010",
  "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
];
