import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import AddCounter from "../fragment/AddCounter";
import "../../css/toastlottie.css";
import ModalPortal from "../fragment/ModalPortal";

const ToastLottie = () => {
  return (
    <div className="box__toaselottie">
      <div className="box__toastlottie-inner">
        <ModalPortal />
        <AddCounter isLottie={true}/>
      </div>
    </div>
  );
};
export default ToastLottie;
