import React from "react";
import classes from "./Order.module.css";

const order = ({ ingredients, price }) => {
  const convertedIngredients = Object.keys(ingredients).map((key) => {
    return `${key}: (${ingredients[key]}), `;
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {convertedIngredients}</p>
      <p>
        Price: <strong>USD {parseFloat(price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
