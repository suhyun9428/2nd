import classNames from "classnames";
import AddCounter from "./AddCounter";
import { useState } from "react";

const ItemCard = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  const handleFavotire = () => {
    setFavorite(!favorite);
  };
  return (
    <>
      <a href={data.linkUrl} className="link__item">
        <div className="box__image">
          <img src={data.imageUrl} className="image" />
          {data.isEmart && data.tagLabels.length !== 0 && (
            <span className="text__label">{data.tagLabels[0].text}</span>
          )}
          {!data.isEmart && data.rank && (
            <span className="text__label">{data.rank}</span>
          )}
        </div>
        <div className="box__info">
          {data.isEmart && <AddCounter />}
          {data.isEmart ? (
            <p className="text__title">{data.itemName}</p>
          ) : (
            <p className="text__title">{data.goodsName} </p>
          )}
          <div className="box__price">
            {data.hasCoupon ? (
              <>
                <div className="box__coupon-discount">
                  <span className="text__coupon">쿠폰적용가</span>
                  <span className="text__coupon-price">
                    <del className="text__value">{data.price}</del>
                    <span className="text__unit">원</span>
                  </span>
                </div>
                <div className="box__discount">
                  <span className="text__discout-precent">
                    {data.discountRate}%
                  </span>
                  <span className="text__discount-price">
                    <del className="text__original-price">
                      {data.discountPrice}
                    </del>
                    <span className="text__unit">원</span>
                  </span>
                </div>
              </>
            ) : data.discountRate >= 3 ? (
              <>
                <div className="box__discount">
                  <span className="text__discout-precent">
                    {data.discountRate}%
                  </span>
                  <span className="text__discount-price">
                    {data.isEmart ? (
                      <del className="text__original-price">{data.price}</del>
                    ) : (
                      <del className="text__original-price">
                        {data.discountPrice}
                      </del>
                    )}
                    <span className="text__unit">원</span>
                  </span>
                </div>
                <div className="box__selling-price">
                  {data.isEmart ? (
                    <span className="text__selling-price">
                      {data.itemPrice.toLocaleString()}
                    </span>
                  ) : (
                    <span className="text__selling-price">
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
                    <del className="text__original-price">
                      {data.discountPrice.toLocaleString()}
                    </del>
                    <span className="text__unit">원</span>
                  </span>
                </div>
                <div className="box__selling-price">
                  {data.isEmart ? <span className="text__selling-price">
                    {data.sellPrice}
                  </span> : <span className="text__selling-price">
                    {data.itemPrice}
                  </span>}
                  <span className="text__unit">원??</span>
                </div>
              </>
            ) : (
              <div className="box__selling-price">
                {data.isEmart ? <span className="text__selling-price">
                  {data.sellPrice.toLocaleString()}
                </span> : <span className="text__selling-price">
                  {data.itemPrice}
                </span>}
                <span className="text__unit">원?</span>
              </div>
            )}
          </div>
          <ul className="list__lmo">
            {data.avgStarPoint ||
              (data.reviewPoint && (
                <li className="list-item__lmo">
                  <img
                    className="image"
                    src="../../../public/image__starrate.png"
                    alt="평점"
                  />
                  <span className="text text__star">
                    {data.avgStarPoint || data.reviewPoint.starPoint}
                  </span>
                  <span className="text text__rate-number">
                    ({data.reviewCount || data.reviewPoint.reviewCount})
                  </span>
                  <span className="for-a11y">건</span>
                </li>
              ))}
            {data.buyCount && data.buyCount !== 0 && (
              <li className="list-item__lmo">
                <span className="text">구매</span>
                <span className="text">{data.buyCount.toLocaleString()}</span>
                <span className="for-a11y">건</span>
              </li>
            )}
          </ul>
        </div>
      </a>
      {data.isEmart && data.hasFavorite && (
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
      )}
    </>
  );
};
export default ItemCard;
