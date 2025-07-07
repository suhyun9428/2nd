import classNames from "classnames";
import { useAtom } from "jotai";
import { handleLayer } from "../atom/atom";

const CartLayer = ({ isActive }) => {
  const [, setOpenLayer] = useAtom(handleLayer);
  const handleClose = () => {
    setOpenLayer(false);
  };
  return (
    <div className={classNames("box__layer", isActive && "box__layer--active")}>
      <div className="box__layer-content">
        <div className="box__layer-header">
          <p className="text__header">
            <span className="for-a11y">장바구니 레이어</span>
          </p>
          <button type="button" className="button__close" onClick={handleClose}>
            x
          </button>
        </div>
        <div className="box__layer-body">
          <span className="text">장바구니에 담겼습니다 🌟</span>
          <button
            type="button"
            className="button__confirm"
            onClick={handleClose}
          >
            확인
          </button>
        </div>
      </div>
      <div className="box__dimmed"></div>
    </div>
  );
};

export default CartLayer;
