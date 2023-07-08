import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogoView } from "../components/CatalogoView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({
  handlerAddItems,
  cartItems,
  handlerDeleteItem,
}) => {
  return (
    <Routes>
      <Route
        path="catalog"
        element={
          <CatalogoView handler={(product) => handlerAddItems(product)} />
        }
      />
      <Route
        path="cart"
        element={
          cartItems?.length <= 0 ? (
            <div className="alert alert-warning">
              No hay productos hasta el momento en el carro
            </div>
          ) : (
            <div className="my-4 w-70 ">
              <CartView
                items={cartItems}
                handlerDelete={handlerDeleteItem}
                // handlerDel1={handlerDel1}
              />
            </div>
          )
        }
      />
      <Route path="/" element={<Navigate to={"/catalog"} />} />
    </Routes>
  );
};

