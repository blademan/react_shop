import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasket: false,
  alert: '',
};

export function ContextProvider({ children }) {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.addBasket = (item) => {
    dispatch({ type: 'ADD_BASKET', payload: item });
  };

  value.deleteItem = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id: itemId } });
  };

  value.deleteOneItem = (itemId) => {
    dispatch({ type: 'DELETE_ONE_ITEM', payload: { id: itemId } });
  };

  value.addOneItem = (itemId) => {
    dispatch({ type: 'ADD_ONE_ITEM', payload: { id: itemId } });
  };

  value.showBasket = () => {
    dispatch({ type: 'SHOW_BASKET' });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
