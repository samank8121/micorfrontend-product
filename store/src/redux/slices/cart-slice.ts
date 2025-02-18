import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
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

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
