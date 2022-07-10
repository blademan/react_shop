import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import Preloader from './Preloader';
import CardList from './CardList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasket, setIsBasket] = useState(false);
  const [alert, setAlert] = useState('');

  const deleteItem = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const deleteOneItem = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  };

  const addOneItem = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + 1;
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });

    setOrder(newOrder);
  };

  const showBasket = () => {
    setIsBasket(!isBasket);
  };

  const addBasket = (item) => {
    const itemIndexInBasket = order.findIndex((basketItem) => basketItem.id === item.id);

    if (itemIndexInBasket < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const updateQuantity = order.map((itemInBasket, index) => {
        if (index === itemIndexInBasket)
          return {
            ...itemInBasket,
            quantity: itemInBasket.quantity + 1,
          };
        else {
          return itemInBasket;
        }
      });
      setOrder(updateQuantity);
    }
    setAlert(item.name);
  };

  const closeAlert = () => {
    setAlert('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((res) => res.json())
      .then((data) => {
        setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} showBasket={showBasket} />
      {isBasket ? (
        <BasketList
          addOneItem={addOneItem}
          deleteOneItem={deleteOneItem}
          deleteItem={deleteItem}
          showBasket={showBasket}
          order={order}
        />
      ) : (
        <>
          {loading ? (
            <Preloader />
          ) : (
            <CardList addBasket={addBasket} goods={goods} setOrder={setOrder} />
          )}
        </>
      )}{' '}
      {alert && <Alert toastName={alert} closeAlert={closeAlert} />}
    </main>
  );
}
