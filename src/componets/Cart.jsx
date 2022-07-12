import { useContext } from 'react';
import { ShopContext } from '../context';

export default function Cart() {
  const { order, showBasket = Function.prototype } = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div onClick={showBasket} className="cart blue darken-4 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
