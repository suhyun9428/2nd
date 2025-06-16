const ItemCard = ({ data }) => {
  return (
    <li className="list-item">
      <a href={data.linkUrl} className="link__item">
        <div className="box__image">
          <img src={data.imageUrl} className="image" />
          {data.rank && <span className="text__rank">{data.rank}</span>}
        </div>
        <div className="box__info">
          <p className="text__title">{data.goodsName}</p>
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
                    <del className="text__original-price">
                      {data.discountPrice || data.sellPrice}
                    </del>
                    <span className="text__unit">원</span>
                  </span>
                </div>
                <div className="box__selling-price">
                  <span className="text__selling-price">
                    {data.sellPrice || data.itemPrice}
                  </span>
                  <span className="text__unit">원?</span>
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
                  <span className="text__selling-price">
                    {data.sellPrice || data.itemPrice}
                  </span>
                  <span className="text__unit">원</span>
                </div>
              </>
            ) : (
              <div className="box__selling-price">
                <span className="text__selling-price">
                  {data.sellPrice || data.itemPrice}
                </span>
                <span className="text__unit">원</span>
              </div>
            )}
          </div>
          <ul className="list__lmo">
            {data.avgStarPoint && (
              <li className="list-item__lmo">
                <img
                  className="image"
                  src="../../../public/image__starrate.png"
                  alt="평점"
                />
                <span className="text text__star">{data.avgStarPoint}</span>
                <span className="text text__rate-number">
                  ({data.reviewCount})
                </span>
                <span className="for-a11y">건</span>
              </li>
            )}
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
    </li>
  );
};
export default ItemCard;
