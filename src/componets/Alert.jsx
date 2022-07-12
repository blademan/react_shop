import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context';

export default function Alert() {
  const { alert = '', closeAlert } = useContext(ShopContext);
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => clearTimeout(timerId);
    //eslint-disable-next-line
  }, [alert]);
  return (
    <div id="toast-container">
      <div className="toast">{alert} added to basket</div>
    </div>
  );
}
