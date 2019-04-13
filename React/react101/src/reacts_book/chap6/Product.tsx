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

      <Tabs>
        <Tabs.Tab name="Description" initialActive={true} heading={() => <b>Description</b>}>
          <p>{product.description}</p>
        </Tabs.Tab>

        <Tabs.Tab name="Reviews" heading={() => "Reviews"}>
          <ul className="product-reviews">
            {product.reviews.map(review => (
              <li key={review.reviewer}>
                <i>"{review.comment}"</i> - {review.reviewer}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>

      <p className="product-price"> {price} </p>
      {addButton}
    </React.Fragment>
  );
};