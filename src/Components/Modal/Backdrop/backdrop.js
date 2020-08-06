import React from "react";
import { BackdropDiv } from "./backdrop.style";

const Backdrop = ({ show, clicked }) => {
  return show ? <BackdropDiv onClick={clicked} /> : null;
};
export default Backdrop;
