import { useState } from 'react';
import { useWallet } from '../context/WalletContext';
import { CartItem } from './CartItem'; // Import the CartItem component
import './Navbar.css';

const Navbar = ({ onConnectWalletClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedWallet } = useWallet();

  return (
    <nav>
      <h2 className='logo'>MARKETPLACE.</h2>
      <div className='btn-container'>
        <div className='btn-container-header'>
          {selectedWallet ? (
            <>
              <button
                type='button'
                className='btn-header'
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                Account
              </button>
              {/* Conditionally render CartItem when isOpen is true */}
              {isOpen && <CartItem />}
            </>
          ) : (
            <button
              type='button'
              className='btn-header'
              onClick={onConnectWalletClick}
            >
              {'Connect Wallet'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
