import { useState } from 'react';

import './header.css';
import { useCartStore } from 'StoreEntry/Store';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useCartStore();

  const clickHandler = () => {
    setShowCart(!showCart);
  };
  const cartTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className='header'>
      <span className='cart' onClick={clickHandler}>
        🛒 ({cartTotalQuantity})
      </span>

      {showCart && (
        <ul className='cart-items'>
          {cart.map((cartItem) => {
            if(cartItem.quantity === 0) return null;
            return (
              <li key={cartItem.id}>
                {cartItem.caption} ({cartItem.quantity})
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Header;
