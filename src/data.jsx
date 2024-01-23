import stars from './assets/stars.jpg';
import summer from './assets/Summer.jpg';
import NightIsComing from './assets/Night is coming.jpg';
import Quiet from './assets/Quiet.jpg';
import Travel from './assets/Travel.jpg';
import rain from './assets/rain.jpg';
const items = [
  // Your list of items goes here, each item should have an id, imageSrc, title, and price
  {
    id: 1,
    imageSrc: NightIsComing,
    title: 'Night is coming',
    price: '0.12 BTC',
  },
  { id: 2, imageSrc: stars, title: 'With the stars', price: '0.12 BTC' },
  { id: 3, imageSrc: summer, title: 'Summer', price: '0.12 BTC' },
  { id: 4, imageSrc: Quiet, title: 'Quiet', price: '0.12 BTC' },
  { id: 5, imageSrc: Travel, title: 'Travel', price: '0.12 BTC' },
  { id: 6, imageSrc: rain, title: 'The rain', price: '0.12 BTC' },
];

export default items;
