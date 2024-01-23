import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import { ItemProvider } from './context/itemContext';
import { Home, Collections } from './pages';

const App = () => {
  return (
    <>
      <WalletProvider>
        <ItemProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/collections' element={<Collections />} />
            </Routes>
          </Router>
        </ItemProvider>
      </WalletProvider>
    </>
  );
};

export default App;
