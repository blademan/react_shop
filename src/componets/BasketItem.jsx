import React from 'react';

export default function BasketItem(props) {
  const { id, name, price, quantity, deleteItem, deleteOneItem, addOneItem } = props;

  return (
    <li className=" collection-item">
      {name}{' '}
      <i className="material-icons" onClick={() => deleteOneItem(id)}>
        remove
      </i>{' '}
      x{quantity}{' '}
      <i className="material-icons" onClick={() => addOneItem(id)}>
        add
      </i>{' '}
      ={price}
      <span className="secondary-content">
        <i onClick={() => deleteItem(id)} className="basket-delete material-icons">
          close
        </i>
      </span>
    </li>
  );
}
