import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const CartLottie = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('https://script.gmarket.co.kr/starro/mobile/lottie/add_cart.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  
  return <Lottie animationData={animationData} className="box__cart-lottie" loop={false} onComplete={()=>console.log('로띠 종료!')} />;
};

export default CartLottie;