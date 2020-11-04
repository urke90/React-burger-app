import React from "react";

import NavItem from "./NavItem/NavItem";
import classes from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavItem exact link="/">
      Burger Builder
    </NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navigationItems;
