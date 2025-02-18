import { StoreProvider } from './redux/provider';
const App = () => {
  return (
    <StoreProvider>
      <div>Store</div>
    </StoreProvider>
  );
};

export default App;
