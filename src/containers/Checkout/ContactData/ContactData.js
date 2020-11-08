import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import { orderFormData } from "../../../helpers/helpers";

class ContactData extends Component {
  state = {
    orderForm: {
      name: orderFormData("input", "text", "Your Name", "", false),
      email: orderFormData("input", "email", "Your Email", "", false),
      street: orderFormData("input", "text", "Street", "", false),
      postalCode: orderFormData("input", "text", "ZIP code", "", false),
      country: orderFormData("input", "text", "Country", "", false),
      deliveryMethod: orderFormData("select", "", "", "fastest", true),
    },
    spinnerLoading: false,
  };

  inputChangedHandler = (evt, indetifier) => {
    const clonedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...clonedOrderForm[indetifier],
    };
    updatedFormElement.value = evt.target.value;
    clonedOrderForm[indetifier] = updatedFormElement;
    this.setState({ orderForm: clonedOrderForm });
  };

  orderSubmitHandler = async (evt) => {
    evt.preventDefault();
    const { price, ingredients, history } = this.props;
    const { orderForm } = this.state;
    const customerData = {};

    for (let indentifier in orderForm) {
      customerData[indentifier] = orderForm[indentifier].value;
    }
    const order = {
      ingredients,
      price,
      customerData,
    };

    try {
      this.setState({ spinnerLoading: true });
      const response = await axios.post("/orders.json", order);
      console.log("response", response.data);
      this.setState({ spinnerLoading: false });
      history.push("/");
    } catch (error) {
      this.setState({ spinnerLoading: false });
      console.log("error posting order", error);
    }
  };

  render() {
    const { spinnerLoading, orderForm } = this.state;
    const formElements = [];

    for (let key in orderForm) {
      formElements.push({
        id: key,
        config: orderForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderSubmitHandler}>
        {formElements.map((el) => {
          const { elementType, elementConfig, value } = el.config;
          return (
            <Input
              key={el.id}
              elementType={elementType}
              elementConfig={elementConfig}
              value={value}
              changed={(event) => this.inputChangedHandler(event, el.id)}
            />
          );
        })}
        <Button btnType="Success">Order</Button>
      </form>
    );

    if (spinnerLoading) form = <Spinner />;
    console.log("this.state CONTACT DATA", this.state);
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
