declare module 'ComponentsEntry/Button' {
  const Button: React.ComponentType<any>;
  export default Button;
}

declare module 'ComponentsEntry/Input' {
  const Input: React.ComponentType<any>;
  export default Input;
}
declare module 'ComponentsEntry/IncreaseDecrease' {
  const IncreaseDecrease: React.ComponentType<any>;
  export default IncreaseDecrease;
}
declare module 'MainEntry/Store' {
  import { ReactNode } from 'react';

  export const StoreProvider: ({ children }: { children: ReactNode }) => JSX.Element;
  export function useCartStore(): {
    cart: { id: string; caption: string; quantity: number }[];
    setCart: (newItem: { id: string; caption: string; quantity: number }) => void;
  };
}