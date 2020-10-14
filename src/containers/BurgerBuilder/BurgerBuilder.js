import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Aux";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 4,
    purchasable: false,
    isPurchased: false,
  };

  purchaseHandler = () => {
    this.setState({ isPurchased: true });
  };

  cancelPurchaseHandler = () => this.setState({ isPurchased: false });

  purchaseContinueHandler = () => {
    alert("you continued");
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

  render() {
    const { purchasable, totalPrice, ingredients, isPurchased } = this.state;

    const disabledBtn = {
      ...this.state.ingredients,
    };

    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }
    return (
      <Aux>
        <Modal showModal={isPurchased} closeModal={this.cancelPurchaseHandler}>
          <OrderSummary
            purchaseCancelled={this.cancelPurchaseHandler}
            purchaseContinued={this.purchaseContinueHandler}
            ingredients={ingredients}
            price={totalPrice}
          />
        </Modal>
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
}

export default BurgerBuilder;
