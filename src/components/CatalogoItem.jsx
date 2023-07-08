import { useNavigate } from "react-router-dom";

export const CatalogoItem = ({ handler, id, name, description, price }) => {
  const onAddItem = (product) => {
    // console.log(product);
    handler(product);
    navigate("/cart");
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between">
            <p className="card-text">${price}</p>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => onAddItem({ id, name, description, price })}
                className="btn btn-primary mx-1"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

