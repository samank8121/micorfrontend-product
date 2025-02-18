import { CartItem, setCart } from '../slices/cart-slice';
import { useAppDispatch, useAppSelector } from './hooks';

export function useCartStore() {
  const cart = useAppSelector((state) => state.cartReducer.cart);
  const dispatch = useAppDispatch();
  return {
    cart,
    setCart: (newItem: CartItem) => dispatch(setCart(newItem)),
  };
}
