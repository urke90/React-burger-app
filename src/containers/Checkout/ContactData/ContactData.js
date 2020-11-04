import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    spinnerLoading: false,
  };

  orderSubmitHandler = (evt) => {
    evt.preventDefault();
    const { price, ingredients, history } = this.props;
    this.setState({ spinnerLoading: true });
    const order = {
      ingredients,
      price,
      customer: {
        name: "uros bijelic",
        address: {
          street: "random street",
          zipCode: "11000",
          country: "Serbia",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
      error: false,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ spinnerLoading: false });
        console.log("order submited successfully", response);
        history.push("/");
      })
      .catch((error) => console.log("error posting order", error));
  };

  render() {
    const { spinnerLoading } = this.state;

    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal code"
        />
        <Button clicked={this.orderSubmitHandler} btnType="Success">
          Order
        </Button>
      </form>
    );

    if (spinnerLoading) form = <Spinner />;

    return (
      <div className={classes.ContactData}>
        <h4>Please enter your data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
