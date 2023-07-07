import { useState } from "react";
import { CatalogoView } from "./CatalogoView";
import { CartView } from "./CartView";

const initial = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initial);

  const handlerAddItems = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1,
      //   },
      // ]);
      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity: 1,
        },
      ]);
    }
  };

  const handlerDeleteItem = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };

  const handlerDel1 = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem.quantity > 1) {
      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity - 1,
      //   },
      // ]);
      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity - 1;
          }
          return i;
        })
      );
    } else {
      handlerDeleteItem(product.id);
    }
  };
  return (
    <>
      <div className="container my-4">
        <h1>CartApp</h1>
        <CatalogoView handler={(product) => handlerAddItems(product)} />
        {cartItems?.length <= 0 || (
          <div className="my-4 w-70 ">
            <CartView
              items={cartItems}
              handlerDelete={handlerDeleteItem}
              handlerDel1={handlerDel1}
            />
          </div>
        )}
      </div>
    </>
  );
};

