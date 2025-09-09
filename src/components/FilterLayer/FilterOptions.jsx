import classNames from "classnames";
import { useFilter } from "./FilterContext";
import { useCallback, useMemo } from "react";

const FilterOptions = ({ data }) => {
  const { state, dispatch } = useFilter();
  const { checked } = state;

  const filteredData = data.map((item) => ({
    ...item,
    itemList: item.itemList.filter((option) => option.isShow === true),
  }));

  const handleToggle = useCallback(
    (groupId, idx) => {
      dispatch({
        type: "TOGGLE_CHECK",
        payload: { groupId, idx },
      });
    },
    [dispatch]
  );

  const isAnyChecked = useMemo(() => {
    return Object.values(checked).some((group) =>
      Object.values(group).some((v) => v === true)
    );
  }, [checked]);

  const activeMapList = useMemo(() => {
    return filteredData.map((item) =>
      item.itemList.map((_, idx) => !!checked[item.id]?.[idx])
    );
  }, [checked, filteredData]);

  return (
    <div className="box__filter-options">
      <ul className="list__filter-options">
        {filteredData.map((item, itemIdx) =>
          item.itemList.map((option, idx) => (
            <li className="list-item" key={idx}>
              <button
                className={classNames(
                  "button__option",
                  activeMapList[itemIdx][idx] && "button__option--active"
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
        onClick={() => dispatch({ type: "TOGGLE_LAYER" })}
      >
        <span className="for-a11y">필터 레이어 열기</span>
      </button>
    </div>
  );
};

export default FilterOptions;
