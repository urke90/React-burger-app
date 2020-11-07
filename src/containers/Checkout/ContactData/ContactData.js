import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your e-mail",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP code",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
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

    try {
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
      <form>
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
        <Button clicked={this.orderSubmitHandler} btnType="Success">
          Order
        </Button>
      </form>
    );

    if (spinnerLoading) form = <Spinner />;
    console.log("this.state", this.state);
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
