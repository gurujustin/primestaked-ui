import { http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// export const config = createConfig({
//   chains: [mainnet],
//   transports: {
//     [mainnet.id]: http()
//   }
// })

export const config = getDefaultConfig({
  appName: "OEigen",
  projectId: "b6187205b37dc9d704772f16dca5b71e",
  chains: [mainnet],

  // transports: {
  //   [mainnet.id]: http('http://localhost:8545'),
  // },
});