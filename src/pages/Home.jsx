import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Navbar, TimeSlider, Banner, Footer } from '../components';
import avatar from '../assets/avatar.svg';
import julian from '../assets/julian.jpg';
import maria from '../assets/maria.jpg';

import nightSky from '../assets/night-sky.jpg';
import future from '../assets/future.jpg';
import nature from '../assets/nature.jpg';
import { useWallet } from '../context/WalletContext';

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/collections');
  };
  const [isWallet, setIsWallet] = useState(false);
  const { selectedWallet, setWallet } = useWallet();
  const onWalletSelect = (wallet) => {
    console.log('Selected wallet:', wallet);
    setWallet(wallet);
    setIsWallet(false);
  };
  const onConnectWalletClick = () => {
    setIsWallet(true);
  };

  return (
    <>
      <div className='page-wrapper'>
        {/* start of navbar */}
        <Navbar onConnectWalletClick={onConnectWalletClick} />
        {/* end of navbar */}
        <main style={{ background: `${isWallet ? '#e6e9f2' : ' '}` }}>
          {/* If isWallet is true, render the overlay */}
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

          {/* If isWallet is false, render the rest of the content */}
          {!isWallet && (
            <>
              {/* start of time slider */}
              <TimeSlider />
              {/* end of time slider */}

              {/* start of banner */}
              <Banner />
              {/* end of banner */}

              {/* start of collections */}
              <section className='collections'>
                <h2 className='collections-primary'>collections</h2>
                <div className='collections-grid-container'>
                  <div className='collection-item'>
                    <div className='image-container'>
                      <img
                        src={nightSky}
                        alt='Night Sky'
                        className='collection-img'
                      />
                      <div className='overlay-link'>
                        <button className='link' onClick={handleButtonClick}>
                          Go to Collections
                        </button>
                      </div>
                    </div>
                    <div className='collection-info'>
                      <h2 className='collection-heading'>Night Sky</h2>
                      <button type='button' className='collection-btn'>
                        120 NFT
                      </button>
                    </div>
                    <div className='collection-details'>
                      <p className='collection-price'>
                        Price Range : 0.12BTC - 0.18BTC
                      </p>
                      <p className='collection-text'>
                        Lorem ipsum dolor sit amet, consectetur adicing elit,
                        sed do eiusmod tempor...
                      </p>
                      <div className='avatar-container'>
                        <img src={avatar} alt='avatar' className='avatar-img' />
                        <div className='avatar-info'>
                          <div>
                            <h2 className='avatar-status'>Artist</h2>
                            <p className='avatar-name'>Léa Jacquot</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='collection-item'>
                    <div className='image-container'>
                      <img
                        src={future}
                        alt='future'
                        className='collection-img'
                      />
                      <div className='overlay-link'>
                        <button className='link' onClick={handleButtonClick}>
                          Go to Collections
                        </button>
                      </div>
                    </div>
                    <div className='collection-info'>
                      <h2 className='collection-heading'>Future</h2>
                      <button type='button' className='collection-btn'>
                        120 NFT
                      </button>
                    </div>
                    <div className='collection-details'>
                      <p className='collection-price'>
                        Price Range : 0.12BTC - 0.18BTC
                      </p>
                      <p className='collection-text'>
                        Lorem ipsum dolor sit amet, consectetur adicing elit,
                        sed do eiusmod tempor...
                      </p>
                      <div className='avatar-container'>
                        <img src={julian} alt='avatar' className='avatar-img' />
                        <div className='avatar-info'>
                          <div>
                            <h2 className='avatar-status'>Artist</h2>
                            <p className='avatar-name'>julian</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='collection-item'>
                    <div className='image-container'>
                      <img
                        src={nature}
                        alt='future'
                        className='collection-img'
                      />
                      <div className='overlay-link'>
                        <button className='link' onClick={handleButtonClick}>
                          Go to Collections
                        </button>
                      </div>
                    </div>
                    <div className='collection-info'>
                      <h2 className='collection-heading'>Mother Nature</h2>
                      <button type='button' className='collection-btn'>
                        120 NFT
                      </button>
                    </div>
                    <div className='collection-details'>
                      <p className='collection-price'>
                        Price Range : 0.12BTC - 0.18BTC
                      </p>
                      <p className='collection-text'>
                        Lorem ipsum dolor sit amet, consectetur adicing elit,
                        sed do eiusmod tempor...
                      </p>
                      <div className='avatar-container'>
                        <img src={maria} alt='avatar' className='avatar-img' />
                        <div className='avatar-info'>
                          <div>
                            <h2 className='avatar-status'>Artist</h2>
                            <p className='avatar-name'>Léa Jacquot</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* end of collections */}
              <Footer />
              {/* Assuming you have a Footer component */}
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
