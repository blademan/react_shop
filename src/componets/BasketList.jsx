import React from 'react';
import BasketItem from './BasketItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

export default function BasketList() {
  const { order = [], showBasket = Function.prototype } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <i className="material-icons basket-close" onClick={showBasket}>
        close
      </i>
      <li className="collection-item active">Cart</li>
      {order.length ? (
        <>
          {order.map((item) => (
            <BasketItem key={item.id} {...item} />
          ))}
        </>
      ) : (
        <li className="collection-item active">Basket Empty</li>
      )}

      <li className="collection-item active">Total: ${totalPrice}</li>
      <button className=" blue accent-3  right btn">BUY</button>
    </ul>
  );
}
