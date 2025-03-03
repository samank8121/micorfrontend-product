import React, { lazy, Suspense } from 'react';
import { StoreProvider } from 'StoreEntry/Store';
import Header from './components/header/header';

const ProductList = lazy(() => import('ProductsEntry/ProductList'));

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList />
      </Suspense>
    </StoreProvider>
  );
};

export default App;
