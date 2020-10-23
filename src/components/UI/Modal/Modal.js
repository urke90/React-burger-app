import React, { Component } from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.showModal !== nextProps.showModal ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const { showModal, closeModal, children } = this.props;

    return (
      <Aux>
        <Backdrop showModal={showModal} closeModalHandler={closeModal} />
        <div
          style={{
            transform: showModal ? "translateY(0)" : "translateY(-100vh)",
            opacity: showModal ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
