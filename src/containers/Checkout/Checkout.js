import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      meet: 1,
      bacon: 1,
    },
  };

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary ingredients={ingredients} />
      </div>
    );
  }
}

export default Checkout;
