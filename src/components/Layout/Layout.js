import React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = ({ children }) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default layout;
