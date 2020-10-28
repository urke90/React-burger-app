import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const checkoutSummary = ({ ingredients }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={ingredients} />
        <Button clicked btnType="Danger">
          CANCEL
        </Button>
        <Button clicked btnType="Success">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
