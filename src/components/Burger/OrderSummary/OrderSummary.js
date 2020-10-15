import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const {
      ingredients,
      purchaseContinued,
      purchaseCancelled,
      price,
    } = this.props;

    const ingredientsSummary = Object.keys(ingredients).map((ing) => (
      <li key={ing}>
        <span style={{ textTransform: "capitalize" }}>{ing}</span>:{" "}
        {ingredients[ing]}
      </li>
    ));

    return (
      <Aux>
        <h3>Your Order costs: {price.toFixed(2)}</h3>
        <p>Burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button clicked={purchaseCancelled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={purchaseContinued} btnType="Success">
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
