import React from 'react';
import BasketItem from './BasketItem';

export default function BasketList(props) {
  const {
    order = [],
    showBasket = Function.prototype,
    deleteItem,
    deleteOneItem,
    addOneItem,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <i onClick={showBasket} className="material-icons basket-close">
        close
      </i>
      <li className="collection-item active">Cart</li>
      {order.length ? (
        <>
          {order.map((item) => (
            <BasketItem
              addOneItem={addOneItem}
              deleteOneItem={deleteOneItem}
              deleteItem={deleteItem}
              key={item.id}
              {...item}
            />
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
