import { useState, useEffect } from 'react';
import '../components/Navbar.css';
import { useItem } from '../context/itemContext';
import signIn from '../assets/Sign_in.svg';

export const CartItem = () => {
  const { selectedItem } = useItem();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Set the initial state after the component has mounted
    setIsOpen(
      (selectedItem && selectedItem.length > 0) || selectedItem.length === 0
    );
  }, [selectedItem]);

  const handleCloseOverlay = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className='overlay-cart'>
          <div className='profile-container'>
            <div className='profile'></div>
            <p className='code'>STV6Q...4Z7WD</p>
            <img src={signIn} alt='' onClick={handleCloseOverlay} />
          </div>
          <div className='wallet-container'>
            <p className='wallet-title'>In your wallet</p>
            <p className='wallet-price'>{selectedItem && selectedItem.price}</p>
            <h2 className='wallet-heading'>Your NFTs</h2>
          </div>

          <div className='popup'>
            {selectedItem &&
              selectedItem.map((item, index) => (
                <article key={index}>
                  <p className='wallet-price'>{item.price}</p>
                  <div className='wallet-img-container'>
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className='wallet-img'
                    />
                  </div>
                </article>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
