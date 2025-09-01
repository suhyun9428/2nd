import { useEffect } from "react";
import { filterChecked } from "./atom/atom";
import { useAtom } from "jotai";
import classNames from "classnames";

const OptionsButtons = ({ data, index }) => {
  const itemList = data.itemList;
  const [checked, setChecked] = useAtom(filterChecked);

  const handleToggle = (idx) => {
    const isActive = checked[data.id]?.[idx] || false;

    setChecked((prev) => ({
      ...prev,
      [data.id]: {
        ...prev[data.id],
        [idx]: !isActive, // 해당 그룹 안에서만 토글
      },
    }));
  };

  useEffect(() => {
    console.log(checked, "1");
  }, [checked]);

  return (
    <div className="box__options-wrap">
      {itemList.map((item, idx) => {
        const isActive = checked[data.id]?.[idx] || false;

        return (
          <button
            type="button"
            className={classNames(
              "button__options",
              isActive && "button__options--active"
            )}
            onClick={() => handleToggle(idx)}
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
