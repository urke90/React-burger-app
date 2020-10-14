import React from "react";

import classes from "./NavItem.module.css";

const navItem = ({ link, children, active }) => (
  <li className={classes.NavItem}>
    <a className={active ? classes.active : null} href={link}>
      {children}
    </a>
  </li>
);

export default navItem;
