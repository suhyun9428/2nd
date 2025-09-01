import { useEffect } from "react";
import { selectedIndex } from "./atom/atom";
import { useAtom } from "jotai";
import classNames from "classnames";

const OptionsButtons = ({ data, index }) => {
  const itemList = data.itemList;
  const [isSelected, setIsSelected] = useAtom(selectedIndex);

  useEffect(() => {
    console.log(isSelected, "1");
  }, [isSelected]);

  return (
    <div className="box__options-wrap">
      {itemList.map((item, idx) => {
        return (
          <button
            type="button"
            className={classNames(
              "button__options button__options--active"
              // isSelected({ ...titleIdx }) === idx && "button__options--active"
            )}
            onClick={() =>
              // 여기 토글도 되야 함
              setIsSelected({ selectedItemIdx: index, titleIdx: idx })
            }
            key={`option-${idx}`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

const CategoryWrap = ({ data }) => {
  const newData = data.slice(0, 2);

  return (
    <div className="box__category-wrap">
      <ul className="list__options">
        {newData.map((item, idx) => {
          return (
            <li className="list-item" key={`item--${idx}`}>
              <span className="text__title">{item.title}</span>
              <OptionsButtons data={item} index={idx} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryWrap;
