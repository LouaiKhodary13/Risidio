import { useState, useEffect } from 'react';
import { Banner, Navbar, CollectionsComponent } from '../components';
import { useWallet } from '../context/WalletContext';

const Collections = () => {
  const { selectedWallet, setWallet } = useWallet();
  const [isWallet, setIsWallet] = useState(false);

  const onConnectWalletClick = () => {
    setIsWallet(true);
  };
  const onWalletSelect = (wallet) => {
    console.log('Selected wallet:', wallet);
    setWallet(wallet);
    setIsWallet(false);
  };
  useEffect(() => {
    if (!selectedWallet) {
      setWallet('DefaultWallet');
    }
  }, [selectedWallet, setWallet]);
  const [collectionDetails, setcollectionDetails] = useState({
    title: 'Collection',
    subtitle: 'Night Sky',
    info: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',
  });
  return (
    <>
      {isWallet && (
        <div className='overlay' style={{ background: '#e6e9f2' }}>
          <h2>Choose A wallet to connect</h2>
          <div className='overlay-items-container'>
            <div
              className='overlay-item-1'
              onClick={() => onWalletSelect('Wallet1')}
            ></div>
            <div
              className='overlay-item-1'
              onClick={() => onWalletSelect('Wallet1')}
            ></div>
            <div
              className='overlay-item-1'
              onClick={() => onWalletSelect('Wallet1')}
            ></div>
          </div>
        </div>
      )}
      {!isWallet && (
        <main>
          <Navbar onConnectWalletClick={onConnectWalletClick} />
          <Banner
            backgroundColor='transparent'
            collectionDetails={collectionDetails}
          />
          <CollectionsComponent />
        </main>
      )}
    </>
  );
};

export default Collections;
