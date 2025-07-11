import { useState } from "react";
import { useAtom } from "jotai";
import { handleLayer } from "../Emart/atom/atom";

const AddCounter = ({}) => {
  // lottie 용인지 props로 받고 lottie 용 버튼 렌더링하는게 깔끔할거 같은데..
  const [counter, setCounter] = useState(0);
  const [openLayer, setOpenLayer] = useAtom(handleLayer);
  const handleMinus = () => {
    setCounter(Math.max(counter - 1, 0));
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };

  return (
    <>
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
        <button
          type="button"
          className="button__cart"
          // onClick={() => setOpenLayer(true)}
          onClick={() => {
            console.log("forLottie");
          }}
        >
          <span className="for-a11y">장바구니 담기</span>
        </button>
      </div>
    </>
  );
};
export default AddCounter;
