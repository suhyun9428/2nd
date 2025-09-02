import { openLayer, filterChecked } from "./atom/atom";
import { useAtom } from "jotai";
import classNames from "classnames";

const FilterOptions = ({ data }) => {
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);
  const [checked, setChecked] = useAtom(filterChecked);

  const filteredData = data.map((item) => ({
    ...item,
    itemList: item.itemList.filter((option) => option.isShow === true),
  }));

  const handleToggle = (itemId, idx) => {
    const isActive = checked[itemId]?.[idx] || false;

    setChecked((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [idx]: !isActive, // 해당 그룹 안에서만 토글
      },
    }));
  };

  return (
    <div className="box__filter-options">
      <ul className="list__filter-options">
        {filteredData.map((item) =>
          item.itemList.map((option, idx) => (
            <li className="list-item" key={idx}>
              <button
                className={classNames(
                  "button__option",
                  checked[item.id]?.[idx] && "button__option--active"
                )}
                onClick={() => handleToggle(item.id, idx)}
              >
                {option.text}
              </button>
            </li>
          ))
        )}
      </ul>
      <button
        type="button"
        className={classNames(
          "button__open-filter",
          Object.keys(checked).length && "button__open-filter--active"
        )}
        onClick={() => setIsLayerOpen(true)}
      >
        <span className="for-a11y">필터 레이어 열기</span>
      </button>
    </div>
  );
};

export default FilterOptions;
