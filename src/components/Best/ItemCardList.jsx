import ItemCard from "../fragment/ItemCard";

const ItemCardList = ({ data }) => {
  return (
    <div className="box__items-wrap">
      <ul className="list__items">
        {data.map((item, idx) => {
          return (
            <li className="list-item" key={idx}>
              <ItemCard data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ItemCardList;
