import { useState } from "react";
import { useAtom } from 'jotai';
// import { activeLayer } from "../Emart/atom/atom";
import Layer from "./Layer";

const AddCounter = () => {
  const [counter, setCounter] = useState(0);
  // const [layer, setLayer] = useAtom(activeLayer);
  const [layer, setLayer] = useState(false);

  const handleMinus = () => {
    setCounter(Math.max(counter - 1, 0));
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleLayer = () => {
    setLayer(prev => !prev);
  };
  return (
    <div className="box__add-counter">
      <div className="box__counter-inner">
        <button
          type="button"
          className="button__counter button__minus"
          onClick={handleMinus}
        >
          <span className="for-a11y">수량 1 감소</span>
        </button>
        <span className="text__counter">
          <span className="for-a11y">선택한 수량</span>
          {counter}
        </span>
        <button
          type="button"
          className="button__counter button__plus"
          onClick={handlePlus}
        >
          <span className="for-a11y">수량 1 증가</span>
        </button>
      </div>
      <button type="button" className="button__cart" onClick={handleLayer}>
        <span className="for-a11y">장바구니 담기</span>
      </button>
    </div>
  );
};
export default AddCounter;
