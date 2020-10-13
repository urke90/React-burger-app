import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "./Burger.module.css";

const burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((ing) => {
      return [...Array(ingredients[ing]).fill(ing)].map((_, i) => (
        <BurgerIngredient key={ing + i} type={ing} />
      ));
    })
    .reduce((acc, el) => acc.concat(el), []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!!!</p>;
  }

  // const transformedIngredients = Object.keys(ingredients).map((ing) => {
  //   return [...Array(ingredients[ing])].map((_, i) => (
  //     <BurgerIngredient key={ing + i} type={ing} />
  //   ));
  // });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
