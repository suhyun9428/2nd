import React, { useState, useCallback, useMemo } from "react";
import { useFilter } from "./FilterContext";
import "../../css/filter.css";

const FilterCheckbox = React.memo(({ data }) => {
  const { state, dispatch } = useFilter();

  const handleCheck = useCallback(
    (idx) => {
      dispatch({
        type: "TOGGLE_CHECK",
        payload: { groupId: data.id, idx },
      });
    },
    [dispatch, data.id]
  );

  const checkedItems = useMemo(
    () => state.checked[data.id] ?? {},
    [state.checked, data.id]
  );

  return (
    <>
      {data.itemList.map((el, idx) => (
        <li className="list-item" key={`item-${idx}`}>
          <label htmlFor={`form__${data.id}-${idx}`}>
            <span className="text">{el.text ?? el}</span>
            <input
              type="checkbox"
              name={`form__${data.id}`}
              id={`form__${data.id}-${idx}`}
              onChange={() => handleCheck(idx)}
              checked={!!checkedItems[idx]}
            />
          </label>
        </li>
      ))}
    </>
  );
});

const FilterLayer = ({ data, buttonData }) => {
  const { dispatch } = useFilter();
  const newData = [...data, ...buttonData];
  const [isListOpen, setIsListOpen] = useState(
    new Array(newData.length).fill(false)
  );

  const handleToggle = useCallback((e, idx) => {
    setIsListOpen((prev) => {
      const newToggleOpen = [...prev];
      newToggleOpen[idx] = !newToggleOpen[idx];
      return newToggleOpen;
    });
    e.target.parentElement.classList.toggle("box__filter-inner--active");
  }, []);

  return (
    <div className="box__filter-layer">
      <div className="box__layer">
        <div className="box__layer-header">
          <div className="box__title-wrap">
            <h3 className="text__title">필터</h3>
            <button
              type="button"
              className="button__reset"
              onClick={() => dispatch({ type: "SET_CHECKED", payload: {} })}
            >
              모두 지우기
            </button>
          </div>
          <button
            type="button"
            className="button__close"
            onClick={() => dispatch({ type: "TOGGLE_LAYER" })}
          >
            <span className="for-a11y">필터 레이어 닫기</span>
          </button>
        </div>
        <div className="box__layer-body">
          {newData.map((item, idx) => (
            <div className="box__filter-inner" key={`filter-${idx}`}>
              <button
                type="button"
                className="button__title"
                onClick={(e) => handleToggle(e, idx)}
              >
                <span className="text__title">{item.title}</span>
              </button>
              <ul className="list__filter">
                <FilterCheckbox data={item} />
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="box__dimmed" onClick={() => setIsLayerOpen(false)}></div>
    </div>
  );
};
export default React.memo(FilterLayer);
