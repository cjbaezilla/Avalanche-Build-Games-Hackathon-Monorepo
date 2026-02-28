import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  avalancheFuji,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Vibe2Wizard',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  chains: [
    avalancheFuji,
  ],
  ssr: true,
});
