declare module 'ComponentsEntry/Button' {
  const Button: React.ComponentType<any>;
  export default Button;
}

declare module 'ComponentsEntry/Input' {
  const Input: React.ComponentType<any>;
  export default Input;
}
declare module 'ProductsEntry/ProductList' {
  const ProductList: React.ComponentType<any>;
  export default ProductList;
}
declare module 'StoreEntry/Store' {
  import { ReactNode } from 'react';

  export const StoreProvider: React.FC<{ children: ReactNode }>;
  export function useCartStore(): {
    cart: { id: string; caption: string; quantity: number }[];
    setCart: (newItem: { id: string; caption: string; quantity: number }) => void;
  };
}
