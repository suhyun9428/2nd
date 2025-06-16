import ItemCard from "../fragment/ItemCard";

const ItemCardList = ({ data }) => {
  return (
    <div className="box__items-wrap">
      <ul className="list__items">
        {data.map((item, idx) => {
          return <ItemCard data={item} key={idx} />;
        })}
      </ul>
    </div>
  );
};
export default ItemCardList;
