import React, { Component } from "react";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

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

  componentDidMount() {
    const { search } = this.props.location;
    const query = new URLSearchParams(search);
    const ingredients = {};
    for (let param of query) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients });
  }

  checkoutContinuedHandler = () =>
    this.props.history.replace("/checkout/contact-data");

  checkoutCancelledHandler = () => this.props.history.goBack();

  render() {
    const { url } = this.props.match;
    const { ingredients } = this.state;
    return (
      <div>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={ingredients}
        />
        <Route path={`${url}/contact-data`} component={ContactData} />
      </div>
    );
  }
}

export default Checkout;
