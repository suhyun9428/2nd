import ItemCard from "../fragment/ItemCard";
import { useAtom } from "jotai";
import { activeTabIndex } from "./atom/atom";

const ItemCardList = ({ data, isMobile }) => {
  const [activeIndex] = useAtom(activeTabIndex);

  const filteredData = data
    .filter((item) => item.categoryNumber === activeIndex)
    .map((item, idx) => ({
      ...item,
      rank: idx + 1,
    }));


  if (filteredData.length === 0) return (<strong className="text__noitmes">조건에 만족하는 상품이 없습니다</strong>);

  return (
    <div className="box__items-wrap">
      <ul className="list__items">
        {filteredData.map((item, idx) => (
          <li
            className={`list-item ${item.rank === 1 ? "list-item--rank1" : ""
              }`}
            key={idx}
          >
            <ItemCard data={item} isMobile={isMobile} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCardList;
