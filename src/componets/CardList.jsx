import React from 'react';
import Card from './Card';
export default function CardList(props) {
  const { goods = [], addBasket } = props;

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <Card addBasket={addBasket} key={item.id} {...item} />
      ))}
    </div>
  );
}
