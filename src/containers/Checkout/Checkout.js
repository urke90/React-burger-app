import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  UNSAFE_componentWillMount() {
    const { search } = this.props.location;
    const query = new URLSearchParams(search);
    const ingredients = {};
    for (let param of query) {
      if (param[0] === "price") {
        this.setState({ totalPrice: param[1] });
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients });
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  checkoutCancelledHandler = () => this.props.history.goBack();

  render() {
    const { url } = this.props.match;
    const { ingredients, totalPrice } = this.state;

    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={ingredients}
        />
        <Route
          path={`${url}/contact-data`}
          render={(props) => (
            <ContactData
              {...props}
              ingredients={ingredients}
              price={totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
