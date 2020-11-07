import React from "react";

import classes from "./Input.module.css";

const input = ({ elementType, label, elementConfig, value, changed }) => {
  let inputElement;
  switch (elementType) {
    case "input":
      inputElement = (
        <input
          onChange={changed}
          className={classes.Input}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          onChange={changed}
          className={classes.Input}
          {...elementConfig}
          value={value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select onChange={changed} className={classes.Input}>
          {elementConfig.options.map((option) => {
            const { value, displayValue } = option;
            return (
              <option key={value} value={value}>
                {displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={changed}
          className={classes.Input}
          {...elementConfig}
          value={value}
        />
      );
  }

  return (
    <div>
      <label className={classes.Label}>{label}</label>
      {inputElement}
    </div>
  );
};

export default input;
