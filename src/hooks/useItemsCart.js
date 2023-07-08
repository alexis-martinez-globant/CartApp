import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";

const initial = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initial);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddItems = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      dispatch({ type: "update", payload: product });
    } else {
      dispatch({ type: "add", payload: product });
    }
  };

  const handlerDeleteItem = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  //   const handlerDel1 = (product) => {
  //     const hasItem = cartItemsS.find((i) => i.product.id === product.id);
  //     if (hasItem.quantity > 1) {
  //       setCartItemsS(
  //         cartItemsS.map((i) => {
  //           if (i.product.id === product.id) {
  //             i.quantity = i.quantity - 1;
  //           }
  //           return i;
  //         })
  //       );
  //     } else {
  //       handlerDeleteItem(product.id);
  //     }
  //   };
  return {
    cartItems,
    handlerAddItems,
    handlerDeleteItem,
  };
};

