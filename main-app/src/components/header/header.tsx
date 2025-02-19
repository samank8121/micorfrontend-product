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
          {cart.some((item) => item.quantity > 0) ? (
            cart
              .filter((item) => item.quantity > 0)
              .map(({ id, caption, quantity }) => (
                <li key={id}>
                  {caption} ({quantity})
                </li>
              ))
          ) : (
            <li>Cart is empty</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Header;
