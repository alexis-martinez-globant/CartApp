import { useItemsCart } from "../hooks/useItemsCart";
import { Navbar } from "./Navbar";
import { CartRoutes } from "../routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddItems, handlerDeleteItem } = useItemsCart();
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <h1>CartApp</h1>
        <CartRoutes
          cartItems={cartItems}
          handlerAddItems={handlerAddItems}
          handlerDeleteItem={handlerDeleteItem}
        />
      </div>
    </>
  );
};

