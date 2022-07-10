import React from 'react';
import { useEffect } from 'react';

export default function Alert(props) {
  const { toastName = '', closeAlert } = props;
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => clearTimeout(timerId);
    //eslint-disable-next-line
  }, [toastName]);
  return (
    <div id="toast-container">
      <div className="toast">{toastName} added to basket</div>
    </div>
  );
}
