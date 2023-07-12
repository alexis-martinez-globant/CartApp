import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { CatalogoItem } from "./CatalogoItem";

export const CatalogoView = ({ handler }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getProductsAsync = async () => {
    const prods = await getProducts();
    setProducts(prods);
    setIsLoading(false);
  };
  useEffect(() => {
    getProductsAsync();
  }, []);

  return (
    <>
      {isLoading && <div className="alert alert-info">Loading</div>}
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

