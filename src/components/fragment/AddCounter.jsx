import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { handleLayer } from "../Emart/atom/atom";
import Lottie from "lottie-react";
import { createPortal } from "react-dom";

const CartLottie = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://script.gmarket.co.kr/starro/mobile/lottie/add_cart.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  
  return <Lottie animationData={animationData} className="box__cart-lottie"/>;
};

const AddCounter = ({isLottie}) => {
  const [counter, setCounter] = useState(0);
  const [showLottie, setShowLottie] = useState(false);
  const [openLayer, setOpenLayer] = useAtom(handleLayer);
  const handleMinus = () => {
    setCounter(Math.max(counter - 1, 0));
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLottie(false);
    }, 3000);
  }, [showLottie]);

  return (
    <>
      <div className="box__add-counter">
        {isLottie ? <button
            type="button"
            className="button__cart"
            onClick={()=>setShowLottie(true)}
          >
            <span className="for-a11y">장바구니 담기</span>
          </button> : <>
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
            onClick={() => setOpenLayer(true)}>
            <span className="for-a11y">장바구니 담기</span>
          </button>
        </>
        }
        {showLottie &&  createPortal(<CartLottie />, document.body)}
      </div>
    </>
  );
};
export default AddCounter;
