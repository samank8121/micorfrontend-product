import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/product-card/product-card';
import styles from './product-list.module.scss';
import { ProductType } from '@/types/product-type';
import { Products } from '@/data/products';

const ProductList = () => {
  //const { changeProduct, getProductCount } = useCart();
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(Products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const onChangeProduct = (productid: number, count: number) => {
    //changeProduct(productid, count);
  };
  const getProductCount = (productid: number) => {  
    //return getProductCount(productid);
    return 3;
  };
  return (
    <div className={styles.productList}>
      {products &&
        products.length > 0 &&
        products.map((p, index) => (
          <ProductCard
            key={index}
            product={p}
            value={getProductCount(p.id)}
            onChange={(value) => {
                onChangeProduct(p.id, value);
            }}
          />
        ))}
    </div>
  );
};

export default ProductList;
