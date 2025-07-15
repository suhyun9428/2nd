import ModalPortal from "../fragment/ModalPortal";
import AddCounter from "../fragment/AddCounter";
import "../../css/toastlottie.css";

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
