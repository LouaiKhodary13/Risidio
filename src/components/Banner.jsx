import avatar from '../assets/avatar.svg';
import stars from '../assets/stars.jpg';
import './Banner.css';
import { useNavigate } from 'react-router';

const Banner = ({ backgroundColor, collectionDetails }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/collections');
  };
  // Default content for the banner
  const defaultContent = (
    <div className='banner-item-1'>
      <div className='banner-main-heading'>
        <button href='#' className='banner-item-1'>
          <span className=' primary-heading'> Trending Now</span>
        </button>
      </div>
      <div className='banner-collections-container'>
        <h2 className='banner-collections-heading'>Night Sky Collection</h2>
        <h2 className='banner-collections-text'>With the Stars</h2>
        <div className='avatar-container'>
          <img src={avatar} alt='avatar' className='avatar' />
          <div className='avatar-info'>
            <div>
              <h2 className='avatar-status'>Artist</h2>
              <p className='avatar-name'>Léa Jacquot</p>
            </div>
          </div>
        </div>
        <div className='banner-btn-container'>
          <button type='button' className='banner-buy-btn'>
            Buy
          </button>
          <button
            type='button'
            className='banner-collection-btn'
            onClick={handleButtonClick}
          >
            See Collection
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className='banner'
      style={{ backgroundColor: backgroundColor || 'rgba(230, 233, 242, 1)' }}
    >
      {collectionDetails ? (
        // If collectionDetails is provided, use dynamic content
        <div className='banner-item-1'>
          <div className='banner-main-heading'>
            <button className='banner-item-1'>
              <span className=' primary-heading'> Trending Now</span>
            </button>
          </div>
          <div className='banner-collections-container'>
            <h2 className='banner-collections-heading'>
              {collectionDetails.title}
            </h2>
            <h2 className='banner-collections-text'>
              {collectionDetails.subtitle}
            </h2>
            <p className='banner-collections-info'>{collectionDetails.info}</p>
            <div className='avatar-container'>
              <img src={avatar} alt='avatar' className='avatar' />
              <div className='avatar-info'>
                <div>
                  <h2 className='avatar-status'>Artist</h2>
                  <p className='avatar-name'>Léa Jacquot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Otherwise, use the default content
        defaultContent
      )}

      <div className='banner-item-2'>
        <img src={stars} alt='stars' className='stars-img' />
      </div>
    </section>
  );
};

export default Banner;
