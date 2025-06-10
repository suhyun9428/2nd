const ItemCard = ({ data }) => {
  return (
    <div className="box__items-wrap">
      <ul className="list__items">
        {data.map((item, idx) => {
          return (
            <li className="list-item">
              <a key={idx} href={item.linkUrl} className="link__item">
                <div className="box__image">
                  <img src={item.imageUrl} className="image" />
                </div>
                <div className="box__info">
                  <p className="text__title">{item.goodsName}</p>
                  <div className="box__price">
                    {item.discountPrice && (
                      <div className="box__discount">
                        <span className="text__discount">쿠폰적용가</span>
                        <span className="text__discount-price">
                          <del className="text__value">{item.discountPrice}</del>
                          <span className="text__unit">원</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
};
export default ItemCard;
