import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import GlobalStyle from './variables/globalStyles'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { sepolia } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { ConnectKitProvider } from 'connectkit';

const { chains, provider, webSocketProvider } = configureChains(
  [sepolia],
  [infuraProvider({apiKey: process.env.REACT_APP_INFURAAPI! }), publicProvider()],
)

const client = createClient({
  autoConnect: true,
    connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})


function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((el) => observer.observe(el));
  },);


  return (
      <BrowserRouter>
        <WagmiConfig client={client}>
          <ConnectKitProvider mode='dark'>
            <GlobalStyle />
              <Routes>
                <Route path="/" element={<HomeView />} />
              </Routes>
            </ConnectKitProvider>
          </WagmiConfig>
      </BrowserRouter>
  );
}

export default App;
