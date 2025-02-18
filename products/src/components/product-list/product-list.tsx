import { useEffect, useState } from 'react';
import ProductCard from '@/components/product-card/product-card';
import styles from './product-list.module.scss';
import { ProductType } from '@/types/product-type';
import { Products } from '@/data/products';
import { useCartStore } from 'MainEntry/Store';

const ProductList = () => {
  const { setCart, cart } = useCartStore();
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
  const onChangeProduct = (
    productid: number,
    caption: string,
    count: number
  ) => {
    console.log('productid', productid, count);
    setCart({ id: productid.toString(), caption: caption, quantity: count });
  };
  const getProductCount = (productid: number) => {
    return (
      cart.filter((item) => item.id === productid.toString())[0]?.quantity || 0
    );
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
              onChangeProduct(p.id, p.caption, value);
            }}
          />
        ))}
    </div>
  );
};

export default ProductList;
