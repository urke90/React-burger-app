import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const navItem = ({ link, children, exact }) => (
  <li className={classes.NavItem}>
    <NavLink activeClassName={classes.active} exact={exact} to={link}>
      {children}
    </NavLink>
  </li>
);

export default navItem;
