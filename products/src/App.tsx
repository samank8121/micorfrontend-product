import React, { Suspense } from 'react';
import ProductList from './components/product-list/product-list';
import { StoreProvider } from 'StoreEntry/Store';

// const StoreProvider = React.lazy(() =>
//   import('StoreEntry/Store').then((module) => ({
//     default: module.StoreProvider,
//   }))
// );

const App: React.FC = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
      <StoreProvider>
        <div className='app'>
          <ProductList />
        </div>
      </StoreProvider>
    // </Suspense>
  );
};

export default App;