import React, { lazy, Suspense } from 'react';
import { StoreProvider } from './redux/provider';
import Header from './components/header/header';

const Input = lazy(() => import('ComponentsEntry/Input'));
const Button = lazy(() => import('ComponentsEntry/Button'));
const ProductList = lazy(() => import('ProductsEntry/ProductList'));

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <StoreProvider>      
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Input value={value} onChange={onChange} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Button variant="filled" size="m" onClick={() => alert(value)}><span>Click me!</span></Button>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList/>
      </Suspense>
    </StoreProvider>
  );
};

export default App;
