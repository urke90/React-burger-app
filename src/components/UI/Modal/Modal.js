import React from "react";

import classes from "./Modal.module.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = ({ children, showModal, closeModal }) => (
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

export default modal;
