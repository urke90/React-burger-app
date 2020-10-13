import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = ({
  label,
  addIngredient,
  removeIngredient,
  disabledBtn,
}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
      disabled={disabledBtn}
      onClick={removeIngredient}
      className={classes.Less}
    >
      -
    </button>
    <button onClick={addIngredient} className={classes.More}>
      +
    </button>
  </div>
);

export default buildControl;
