export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    case 'ADD_BASKET': {
      const itemIndexInBasket = state.order.findIndex((basketItem) => basketItem.id === payload.id);

      let newOrder = null;
      if (itemIndexInBasket < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((itemInBasket, index) => {
          if (index === itemIndexInBasket)
            return {
              ...itemInBasket,
              quantity: itemInBasket.quantity + 1,
            };
          else {
            return itemInBasket;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alert: payload.name,
      };
    }

    case 'DELETE_ONE_ITEM':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity - 1;
            return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
          } else {
            return item;
          }
        }),
      };

    case 'ADD_ONE_ITEM':
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity + 1;
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        }),
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alert: '',
      };

    case 'SHOW_BASKET':
      return {
        ...state,
        isBasket: !state.isBasket,
      };

    case 'DELETE_ITEM':
      return { ...state, order: state.order.filter((item) => item.id !== payload.id) };

    default:
      return state;
  }
}
