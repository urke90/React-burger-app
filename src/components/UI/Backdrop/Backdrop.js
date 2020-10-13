import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = ({ showModal, closeModalHandler }) =>
  showModal ? (
    <div onClick={closeModalHandler} className={classes.Backdrop}></div>
  ) : null;
export default backdrop;
