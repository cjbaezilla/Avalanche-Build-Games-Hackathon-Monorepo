import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { avalancheFuji } from 'wagmi/chains';

import { config } from '../wagmi';
import { I18nProvider, useI18n } from '@/i18n';
import { Navbar } from '@/components/ui/navbar';

const client = new QueryClient();

function AppContent({ Component, pageProps }: AppProps) {
  const { language } = useI18n();

  return (
    <RainbowKitProvider 
      theme={darkTheme({
        accentColor: '#ef4444',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
      })}
      initialChain={avalancheFuji}
      locale={language}
    >
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </RainbowKitProvider>
  );
}

function MyApp(props: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <I18nProvider>
          <AppContent {...props} />
        </I18nProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
