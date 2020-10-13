import React from "react";

import classes from "./BuildControl.module.css";

const buildControl = ({ label }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less}>-</button>
    <button className={classes.More}>+</button>
  </div>
);

export default buildControl;