import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import GlobalStyle from './variables/globalStyles'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { sepolia } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { infuraAPI } from 'config/secrets';

const { chains, provider, webSocketProvider } = configureChains(
  [sepolia],
  [infuraProvider({apiKey: infuraAPI }), publicProvider()],
)

const client = createClient({
  autoConnect: true,
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
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
        </WagmiConfig>
      </BrowserRouter>
  );
}

export default App;
