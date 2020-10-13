import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Aux";

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
  };

  render() {
    const disabledBtn = {
      ...this.state.ingredients,
    };

    for (let key in disabledBtn) {
      disabledBtn[key] = disabledBtn[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledBtn={disabledBtn}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
