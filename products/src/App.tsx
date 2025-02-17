import React from 'react';
import styles from './App.module.scss';
import ProductList from './components/product-list/product-list';

import { StoreProvider } from 'MainEntry/Store';
console.log('StoreProvider', StoreProvider);
const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <ProductList />
      </div>
    </StoreProvider>
  );
};

export default App;
