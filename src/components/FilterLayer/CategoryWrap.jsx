import { selectedIndex } from "./atom/atom";
import { useAtom } from "jotai";

const CategoryWrap = () => {
  //   const [isSelected, setIsSelected] = useAtom(selectedIndex);
  //   console.log(isSelected, "?");
  const dummyData = [
    {
      title: "브랜드",
      items: ["코카콜라", "코카콜라 제로", "코카콜라 라이트"],
    },
    {
      title: "포장형태",
      items: ["페트병", "유리병", "캔"],
    },
  ];

  return (
    <div className="box__category-wrap">
      <ul className="list__options">
        {dummyData.map((item, idx) => {
          return (
            <li className="list-item" key={`item--${idx}`}>
              <span className="text__title">{item.title}</span>
              <div className="box__options-wrap">
                {item.items.map((goods, index) => {
                  return (
                    <button
                      type="button"
                      className="button__options"
                      key={`button--${index}`}
                      //   onClick={(e) => console.log(e.target)}
                    >
                      {goods}
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryWrap;
