import ItemCard from "../fragment/ItemCard";

const ItemCardList = ({ data, isMobile }) => {
  return (
    <div className="box__items-wrap">
      <ul className="list__items">
        {data.map((item, idx) => {
          return (
            <li className={`list-item ${item.rank === 1 ? 'list-item--rank1':''}`} key={idx}>
              <ItemCard data={item} isMobile={isMobile} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ItemCardList;
