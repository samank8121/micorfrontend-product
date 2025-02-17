import React from "react";
import styles from './App.module.scss';
import ProductList from "./components/product-list/product-list";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <ProductList />
    </div>
  );
};

export default App;