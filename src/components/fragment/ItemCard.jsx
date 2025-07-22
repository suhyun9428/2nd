import classNames from "classnames";
import AddCounter from "./AddCounter";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const ImageSection = ({ data }) => {
  const [animationData, setAnimationData] = useState(null);
  
  useEffect(() => {
    fetch('https://script.gmarket.co.kr/starro/mobile/lottie/confetti.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  
  return(
    <div className="box__image">
      {data.rank == 1 && <Lottie animationData={animationData} loop={true} className="image__confetti" />}
      <img src={data.imageUrl} className="image" alt={`${data.goodsName} 사진`}/>
      {data.isEmart && data.tagLabels.length !== 0 && (
        <span className="text__label">{data.tagLabels[0].text}</span>
      )}
      {!data.isEmart && data.rank && (
        <span className="text__label">{data.rank}</span>
      )}
    </div>
  )
};

const InfoSection = ({ data, isMobile }) => {
  return(
    <div className="box__info">
      {data.isEmart && <AddCounter />}
      {!isMobile && <p className="text__title">{data.goodsName}</p>}
      {isMobile ? (
        <div className="box__price">
          {data.hasCoupon ? (
            <>
              <div className="box__coupon-discount">
                <span className="text__coupon">쿠폰적용가</span>
                <span className="text__coupon-price">
                  <span className="for-a11y">원가</span>
                  <del className="text__value" role="deletion">{data.price}</del>
                  <span className="text__unit">원</span>
                </span>
              </div>
              <div className="box__discount">
                <span className="for-a11y">할인율</span>
                <span className="text__discout-precent">
                  {data.discountRate}%
                </span>
                <span className="text__discount-price">
                  <span className="for-a11y">판매가</span>
                  <span className="text__selling-price" role="insertion">
                    {data.discountPrice}
                  </span>
                  <span className="text__unit">원</span>
                </span>
              </div>
            </>
          ) : data.discountRate >= 3 ? (
            <>
              <div className="box__discount">
                <span className="text__discount-price">
                  <span className="for-a11y">원가</span>
                  {data.isEmart ? (
                    <del className="text__original-price" role="deletion">{data.price}</del>
                  ) : (
                    <del className="text__original-price" role="deletion">
                      {data.discountPrice}
                    </del>
                  )}
                  <span className="text__unit">원</span>
                </span>
              </div>
              <span className="for-a11y">할인율</span>
              <span className="text__discout-precent">
                {data.discountRate}%
              </span>
              <div className="box__selling-price">
                <span className="for-a11y">판매가</span>
                {data.isEmart ? (
                  <span className="text__selling-price" role="insertion">
                    {data.itemPrice.toLocaleString()}
                  </span>
                ) : (
                  <span className="text__selling-price" role="insertion">
                    {data.discountPrice}
                  </span>
                )}
                <span className="text__unit">원</span>
              </div>
            </>
          ) : data.discountRate !== 0 ? (
            <>
              <div className="box__discount">
                <span className="text__discount-price">
                  <span className="for-a11y">원가</span>
                  <del className="text__original-price" role="deletion">
                    {data.discountPrice.toLocaleString()}
                  </del>
                  <span className="text__unit">원</span>
                </span>
              </div>
              <div className="box__selling-price">
                <span className="for-a11y">판매가</span>
                {data.isEmart ? (
                  <span className="text__selling-price" role="insertion">
                    {data.sellPrice}
                  </span>
                ) : (
                  <span className="text__selling-price">
                    {data.price}
                  </span>
                )}
                <span className="text__unit">원</span>
              </div>
            </>
          ) : (
            <div className="box__selling-price">
              <span className="for-a11y">판매가</span>
              {data.isEmart ? (
                <span className="text__selling-price">
                  {data.sellPrice.toLocaleString()}
                </span>
              ) : (
                <span className="text__selling-price">{data.price}</span>
              )}
              <span className="text__unit">원</span>
            </div>
          )}
        </div>
      ):(
        <div className="box__price">
          {data.hasCoupon ? (
            <>
              <div className="box__coupon-discount">
                <span className="text__coupon">쿠폰적용가</span>
                <span className="text__coupon-price">
                  <span className="for-a11y">원가</span>
                  <del className="text__value" role="deletion">{data.price}</del>
                  <span className="text__unit">원</span>
                </span>
              </div>
              <div className="box__discount">
                <span className="for-a11y">할인율</span>
                <span className="text__discout-precent">
                  {data.discountRate}%
                </span>
                <span className="text__discount-price">
                  <span className="for-a11y">판매가</span>
                  <span className="text__selling-price" role="insertion">
                    {data.discountPrice}
                  </span>
                  <span className="text__unit">원</span>
                </span>
              </div>
            </>
          ) : data.discountRate >= 3 ? (
            <>
              <div className="box__discount">
                <span className="for-a11y">할인율</span>
                <span className="text__discout-precent">
                  {data.discountRate}%
                </span>
                <span className="text__discount-price">
                  <span className="for-a11y">원가</span>
                  {data.isEmart ? (
                    <del className="text__original-price" role="deletion">{data.sellPrice}</del>
                  ) : (
                    <del className="text__original-price" role="deletion">
                      {data.discountPrice}
                    </del>
                  )}
                  <span className="text__unit">원</span>
                </span>
              </div>
              <div className="box__selling-price">
                <span className="for-a11y">판매가</span>
                {data.isEmart ? (
                  <span className="text__selling-price" role="insertion">
                    {data.itemPrice.toLocaleString()}
                  </span>
                ) : (
                  <span className="text__selling-price" role="insertion">
                    {data.discountPrice}
                  </span>
                )}
                <span className="text__unit">원</span>
              </div>
            </>
          ) : data.discountRate !== 0 ? (
            <>
              <div className="box__discount">
                <span className="text__discount-price">
                  <span className="for-a11y">원가</span>
                  <del className="text__original-price" role="deletion">
                    {data.discountPrice.toLocaleString()}
                  </del>
                  <span className="text__unit">원</span>
                </span>
              </div>
              <div className="box__selling-price">
                <span className="for-a11y">판매가</span>
                {data.isEmart ? (
                  <span className="text__selling-price" role="insertion">
                    {data.sellPrice}
                  </span>
                ) : (
                  <span className="text__selling-price" role="insertion">
                    {data.price}
                  </span>
                )}
                <span className="text__unit">원</span>
              </div>
            </>
          ) : (
            <div className="box__selling-price">
              <span className="for-a11y">판매가</span>
              {data.isEmart ? (
                <span className="text__selling-price">
                  {data.sellPrice.toLocaleString()}
                </span>
              ) : (
                <span className="text__selling-price">{data.price}</span>
              )}
              <span className="text__unit">원</span>
            </div>
          )}
        </div>)
      }      
      {isMobile &&  (
        <p className="text__title">{data.goodsName}</p>
      )}
      {((isMobile && data.rank !== 1) || (!isMobile)) && (
          <ul className="list__lmo">
            {(data.avgStarPoint || data.reviewPoint) && (<li className="list-item__lmo">
                <img
                  className="image"
                  src="../image__starrate.png"
                  alt="평점"
                />
                <span className="text text__star">
                  {data.avgStarPoint || data.reviewPoint.starPoint}
                </span>
                <span className="text text__rate-number">
                  ({data.reviewCount || data.reviewPoint.reviewCount})
                </span>
                <span className="for-a11y">건</span>
              </li>)}
            {data.buyCount && data.buyCount !== 0 && (
              <li className="list-item__lmo">
                <span className="text">구매</span>
                <span className="text">{data.buyCount.toLocaleString()}</span>
                <span className="for-a11y">건</span>
              </li>
            )}
          </ul>
        )            
      }
    </div>
  )
};

const MinishopInfo = ({ data }) => {
  return(
    <a href={data.miniShopInfo.url} className="link__minishop">
      <span className="text__minishop">{data.miniShopInfo.nickName}</span>
    </a>
  )
};

const FavoriteButton = () => {
  const [favorite, setFavorite] = useState(false);

  const handleFavotire = () => {
    setFavorite(!favorite);
  };

  return(
    <button
      type="button"
      className={classNames(
        "button__favorite",
        favorite && "button__favorite--active"
      )}
      onClick={handleFavotire}
    >
      <span className="for-a11y">관심상품 등록하기</span>
    </button>
  )
};


const ItemCard = ({ data, isMobile }) => {
  return (
    <>
      <a href={data.linkUrl} className="link__item">
        <ImageSection data={data} />
        <InfoSection data={data} isMobile={isMobile} />
      </a>
      {isMobile && data.rank == 1 && data.miniShopInfo !== undefined && <MinishopInfo data={data} />}
      {data.isEmart && data.hasFavorite && <FavoriteButton data={data} />}
    </>
  );
};
export default ItemCard;
