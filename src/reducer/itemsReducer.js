export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          product: action.payload,
          quantity: 1,
        },
      ];
    case "update":
      return state.map((i) => {
        if (i.product.id === action.payload.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      });
    case "remove":
      return [...state.filter((i) => i.product.id !== action.payload)];
    case "del1":
      return;

    default:
      return state;
  }
};

