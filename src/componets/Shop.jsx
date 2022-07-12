import React from 'react';
import { useEffect, useContext } from 'react';
import { API_URL, API_KEY } from '../config';
import Preloader from './Preloader';
import CardList from './CardList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

import { ShopContext } from '../context';

export default function Shop() {
  const { setGoods, loading, order, isBasket, alert } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.featured);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {isBasket ? <BasketList /> : <>{loading ? <Preloader /> : <CardList />}</>}{' '}
      {alert && <Alert />}
    </main>
  );
}
