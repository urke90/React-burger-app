import React, { Component } from "react";
import classes from "./Layout.module.css";

import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    displaySideDrawer: false,
  };

  sideDrawerCloseHandler = () => this.setState({ displaySideDrawer: false });

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => ({
      displaySideDrawer: !prevState.displaySideDrawer,
    }));
  };

  render() {
    const { children } = this.props;
    const { displaySideDrawer } = this.state;
    return (
      <Aux>
        <Toolbar sideDrawerToggle={this.SideDrawerToggleHandler} />
        <SideDrawer
          openedSideDrawer={displaySideDrawer}
          closeSideDrawer={this.sideDrawerCloseHandler}
        />
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  }
}

export default Layout;
