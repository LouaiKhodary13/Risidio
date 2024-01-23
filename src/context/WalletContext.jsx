import { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const setWallet = (wallet) => {
    setSelectedWallet(wallet);
  };

  return (
    <WalletContext.Provider value={{ selectedWallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(WalletContext);
};
