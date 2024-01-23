import { useState } from 'react';
import { useItem } from '../context/itemContext';
import items from '../data.jsx';
import './CollectionsComponent.css';
import Footer from './Footer.jsx';
const CollectionsComponent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { onBuyClick, selectedItem } = useItem();

  console.log(selectedItem);
  return (
    <section className='collections'>
      <h2 className='collections-primary'>NFT</h2>
      <div className='collections-grid-container'>
        {items.map((item) => (
          <div className='collection-item' key={item.id}>
            <div className='image-container'>
              <img
                src={item.imageSrc}
                alt={item.title}
                className='collection-img'
                style={{ height: '345px' }}
              />
              <div className='overlay-link-collections'>
                <button
                  href=''
                  className='link'
                  onClick={() => onBuyClick(item)}
                >
                  Buy ->
                </button>
              </div>
              <div className='collection-info'>
                <h2 className='collection-heading'>{item.title}</h2>
                <button
                  type='button'
                  className='collection-btn'
                  style={{
                    background: 'rgba(212, 211, 235, 1)',
                    color: 'rgba(35, 37, 43, 1)',
                  }}
                >
                  {item.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default CollectionsComponent;
