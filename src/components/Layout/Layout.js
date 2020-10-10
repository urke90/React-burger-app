import React from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";

const layout = ({ children }) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default layout;
