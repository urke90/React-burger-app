import React from "react";

import NavItem from "./NavItem/NavItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navigationItems;
