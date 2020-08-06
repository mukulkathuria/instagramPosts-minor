import React from "react";
import { ModalDiv } from "./modal.style";
import Backdrop from "./Backdrop/backdrop";

const Modal = ({ show, modalClose, ...props }) => {
  return (
    <React.Fragment>
      <Backdrop show={show} clicked={modalClose} />
      <ModalDiv show={show}>{props.children}</ModalDiv>
    </React.Fragment>
  );
};
export default Modal;
