import classNames from "classnames";
import { useFilter } from "./FilterContext";

const FilterOptions = ({ data }) => {
  const { setIsLayerOpen } = useFilter();
  const { checked, setChecked } = useFilter();

  const filteredData = data.map((item) => ({
    ...item,
    itemList: item.itemList.filter((option) => option.isShow === true),
  }));

  const handleToggle = (groupId, idx) => {
    setChecked((prev) => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [idx]: !prev[groupId]?.[idx],
      },
    }));
  };

  const isAnyChecked = Object.values(checked).some((group) =>
    Object.values(group).some((v) => v === true)
  );

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
          isAnyChecked && "button__open-filter--active"
        )}
        onClick={() => setIsLayerOpen(true)}
      >
        <span className="for-a11y">필터 레이어 열기</span>
      </button>
    </div>
  );
};

export default FilterOptions;
