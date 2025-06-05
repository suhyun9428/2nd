const ItemCard = () => {
  return (
    <a>
      <div className="box__image">
        <img src="" alt="" />
      </div>
      <div className="box__info">
        <p className="text__title"></p>
        <div className="box__price">
          {discountRate && discountPrice && (
            <div className="box__discount">
              <span className="text__discount">쿠폰적용가</span>
              <span className="text__discount-price">
                <del className="text__value">{discountPrice}</del>
                <span className="text__unit">원</span>
              </span>
            </div>
          )}
          {/* {discountRate && } */}
        </div>
      </div>
    </a>
  );
};
export default ItemCard;
