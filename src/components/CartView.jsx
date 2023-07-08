import { useEffect, useState } from "react";
import { totalCalc } from "../services/productService";
import { useNavigate } from "react-router-dom";

// export const CartView = ({ items, handlerDelete, handlerDel1 }) => {
export const CartView = ({ items, handlerDelete }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(totalCalc(items));
    // sessionStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const onDelete = (id) => {
    handlerDelete(id);
  };

  const onDel1 = (product) => {
    // console.log(product);
    handlerDel1(product);
  };

  const navigate = useNavigate();
  const GoToCatalog = () => {
    navigate("/catalog");
  };
  return (
    <>
      <h3>ShopCart</h3>
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id} className="align-middle ">
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price * item.quantity}</td>
              <td>
                {/* <button
                  onClick={() => onDel1(item.product)}
                  className="btn btn-sm btn-warning mx-1"
                >
                  -1
                </button> */}
                <button
                  onClick={() => onDelete(item.product.id)}
                  className="btn btn-sm btn-danger"
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-end fw-bold">
              Total
            </td>
            <td colSpan={2} className="text-start fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>

      <button className="btn btn-success" onClick={GoToCatalog}>
        Go back to shop
      </button>
    </>
  );
};

