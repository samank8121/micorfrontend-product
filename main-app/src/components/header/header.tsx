import { useState } from "react";
import { useStore } from "../../store/store";
import './header.css';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const { cart } = useStore();

    const clickHandler = () => {
        setShowCart(!showCart);
    }
    const cartTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    return (    
    <div className="header">
        <span className="cart" onClick={clickHandler}>🛒 ({cartTotalQuantity})</span>

        {showCart &&  <ul className="cart-items">
            {cart.map(cartItem => {
                return <li key={cartItem.id}>{cartItem.caption} ({cartItem.quantity})</li>
            })}
        </ul>}
    </div>
    )
}

export default Header;
