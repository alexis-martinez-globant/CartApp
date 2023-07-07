import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { CatalogoItem } from "./CatalogoItem";

export const CatalogoView = ({ handler }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, [products]);

  return (
    <>
      <div className="row">
        {products.map((prod) => (
          <div className="col-4 my-3" key={prod.id}>
            <CatalogoItem
              id={prod.id}
              name={prod.name}
              description={prod.description}
              price={prod.price}
              handler={handler}
            />
          </div>
        ))}
      </div>
    </>
  );
};

