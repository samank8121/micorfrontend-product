import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/cart-slice';

export const store = configureStore({
  reducer: {
    cartReducer: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
