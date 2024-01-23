import { createContext, useContext, useState } from 'react';

const itemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  const onBuyClick = (item) => {
    if (selectedItem.length === 0) {
      setSelectedItem([item]);
    } else {
      setSelectedItem([...selectedItem, item]);
    }
  };

  return (
    <itemContext.Provider value={{ onBuyClick, selectedItem }}>
      {children}
    </itemContext.Provider>
  );
};

export const useItem = () => {
  return useContext(itemContext);
};
