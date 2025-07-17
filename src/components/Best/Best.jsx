import { useEffect, useState } from "react";
import dummyData from "./dummyData/dummyData";
import Category from "./Category";
import ItemCardList from "./ItemCardList";
import MobileSoritng from "./MobileSoritng";

import "../../css/best.css";
import "../../css/info.css";

const Best = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    if(typeof window !== undefined){
      const handleResize = () => {
        if(window.innerWidth < 1200){
          setIsMobile(true);
          console.log('mo', window.innerWidth)
        }else{
          setIsMobile(false);
          console.log('pc', window.innerWidth)
        }
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }else{
      return()=>window.removeEventListener('resize', () => {
        return null
      })
    }
  }, []);

  return (
    <div className={`box__contents-best ${isMobile ? 'page__mobile' : ''}`}>
      {isMobile ? 
        <div className="box__header-inner">
          <div className="box__header-content">
            <button type="button" className="button__back">
              <span className="for-a11y">뒤로 가기</span>
            </button>
            <div className="box__header-title">
              <h2 className="box__title">
                <span className="text">베스트</span>
              </h2>
            </div>
            <div className="box__header-menu">
              <a href="//cart.gmarket.co.kr/ko/m/cart" className="link__cart">
                <span className="for-a11y">장바구니</span>
                <span className="box__cart-count">
                  <span className="for-a11y">담은 상품 갯수</span>
                  <em className="text">2</em>
                </span>
              </a>
            </div>
          </div>
        </div> : 
        <h2 className="text__title">G마켓 베스트</h2>
      }
      <Category data={dummyData.categoryData} />
      {isMobile && <MobileSoritng />}
      <ItemCardList data={dummyData.items} isMobile={isMobile} />
    </div>
  );
};

export default Best;
