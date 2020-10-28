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

  checkoutContinuedHandler = () =>
    this.props.history.replace("/checkout/contact-data");

  checkoutCancelledHandler = () => this.props.history.goBack();

  render() {
    const { ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
