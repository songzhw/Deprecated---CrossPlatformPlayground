import React from "react";
import { IProduct } from "./ProductsData";
import "../../index.css";
import { Tabs } from "./Tabs";

interface IProps {
  product: IProduct;
  isInBasket: boolean;
  onAddToBasket: () => void;
}

export const Product: React.FunctionComponent<IProps> = props => {
  const { product, isInBasket, onAddToBasket } = props;
  const price = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency"
  }).format(product.price);
  const addButton = !isInBasket && (
    <button onClick={onAddToBasket}>Add to basket</button>
  );
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <Tabs tabNames={["Description", "Reviews"]} />
      <p>{product.description}</p>
      <div>
        <ul className="product-reviews">
          {product.reviews.map(review => (
            <li key={review.reviewer} className="product-reviews-item">
              <i>"{review.comment}"</i> - {review.reviewer}
            </li>
          ))}
        </ul>
      </div>
      <p className="product-price"> {price} </p>
      {addButton}
    </React.Fragment>
  );
};