import React from "react";
import { IProduct } from "./ProductsData";

interface IProps {
  product: IProduct;
  isInBasket: boolean;
  onAddToBasket: () => void;
}

export const Product: React.FunctionComponent<IProps> = props => {
  const { product, isInBasket, onAddToBasket } = props;
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="product-price">
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency"
        }).format(product.price)}
      </p>
      {!isInBasket && (
        <button onClick={onAddToBasket}>Add to basket</button>
      )}
    </React.Fragment>
  );
};