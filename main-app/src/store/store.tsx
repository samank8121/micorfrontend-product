import { ReactNode } from 'react';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

interface CartItem {
  id: string;
  caption: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItem>) => {
      const { payload } = action;
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity}
            : item
        );
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
    },
  },
});

const { setCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}

export function useStore() {
  const cart = useSelector((state: RootState) => state.cartReducer.cart);
  const dispatch = useDispatch<AppDispatch>();

  return {
    cart,
    setCart: (newItem: CartItem) => dispatch(setCart(newItem)),
  };
}
