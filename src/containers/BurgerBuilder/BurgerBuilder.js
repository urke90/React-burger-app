import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    isPurchased: false,
    spinnerLoading: false,
  };

  purchaseHandler = () => {
    this.setState({ isPurchased: true });
  };

  cancelPurchaseHandler = () => this.setState({ isPurchased: false });

  purchaseContinueHandler = () => {
    let queryString = [];
    const { ingredients, totalPrice } = this.state;
    for (let ing in ingredients) {
      queryString.push(
        `${encodeURIComponent(ing)}=${decodeURIComponent(ingredients[ing])}`
      );
    }
    queryString.push(`price=${totalPrice}`);
    queryString = queryString.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: `?${queryString}`,
    });
  };

  updatePurchaseState = (ingredients) => {
    const totalIngredients = Object.keys(ingredients)
      .map((ing) => {
        return ingredients[ing];
      })
      .reduce((acc, curVal) => acc + curVal, 0);
    this.setState({ purchasable: totalIngredients > 0 });
  };

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedInredients = {
      ...this.state.ingredients,
    };
    updatedInredients[type] = updatedCount;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedInredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedInredients);
  };

  removeIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] - 1;

    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const updatedInredients = {
      ...this.state.ingredients,
    };
    updatedInredients[type] = updatedCount;

    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedInredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseState(updatedInredients);
  };

  componentDidMount() {
    axios
      .get("ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data, spinnerLoading: false });
      })
      .catch((error) => this.setState({ error: true }));
  }

  render() {
    const {
      purchasable,
      totalPrice,
      ingredients,
      isPurchased,
      spinnerLoading,
      error,
    } = this.state;

    const disabledBtn = {
      ...this.state.ingredients,
    };

    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }

    let orderSummary = null;
    let burger = error ? (
      <p>Ingrediants can't be loaded due to network error!</p>
    ) : (
      <Spinner />
    );

    if (ingredients) {
      orderSummary = (
        <OrderSummary
          purchaseCancelled={this.cancelPurchaseHandler}
          purchaseContinued={this.purchaseContinueHandler}
          ingredients={ingredients}
          price={totalPrice}
        />
      );
      burger = (
        <Aux>
          <Burger ingredients={ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabledBtn={disabledBtn}
            price={totalPrice}
            purchasable={purchasable}
            purchaseHandler={this.purchaseHandler}
          />
        </Aux>
      );
    }
    if (spinnerLoading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal showModal={isPurchased} closeModal={this.cancelPurchaseHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
