import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = ({ ingredients }) => {
  const ingredientsSummary = Object.keys(ingredients).map((ing) => (
    <li key={ing}>
      <span style={{ textTransform: "capitalize" }}>{ing}</span>:{" "}
      {ingredients[ing]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
