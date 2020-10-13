import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = ({
  addIngredient,
  removeIngredient,
  disabledBtn,
  price,
}) => (
  <div className={classes.BuildControls}>
    <p>
      Total Price: <strong>{price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredient={() => addIngredient(ctrl.type)}
          removeIngredient={() => removeIngredient(ctrl.type)}
          disabledBtn={disabledBtn[ctrl.type]}
        />
      );
    })}
  </div>
);

export default buildControls;
