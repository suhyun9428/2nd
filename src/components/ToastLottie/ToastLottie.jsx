import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import AddCounter from "../fragment/AddCounter";
import "../../css/toastlottie.css";
import ModalPortal from "../fragment/ModalPortal";

const ToastLottie = () => {
  const toastRef = useRef(null);
  //   const [toast, setToast] = useState(false);
  const handleToast = () => {
    toastRef.current.classList.add("box__toast--active");
    setTimeout(() => {
      toastRef.current.classList.remove("box__toast--active");
    }, 3000);
  };

  return (
    <div className="box__toaselottie">
      <div>
        <button type="button" className="button__toast" onClick={handleToast}>
          토스트 뿅
        </button>
        {/* <ModalPortal> */}
          <div className="box__toast" ref={toastRef}>
            <span className="text">토스트 팝업입니다.</span>
          </div>
        {/* </ModalPortal> */}
        <AddCounter />
        {/* lottie 용인지 props로 넘기고 */}
      </div>
    </div>
  );
};
export default ToastLottie;
