import React from 'react';
import Card from './Card';
import { useContext } from 'react';
import { ShopContext } from '../context';

export default function CardList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}
