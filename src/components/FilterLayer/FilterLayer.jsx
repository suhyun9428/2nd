import { useState, useEffect } from "react";
import { useFilter } from "./FilterContext";
import "../../css/filter.css";

const FilterCheckbox = ({ data }) => {
  const { checked, setChecked } = useFilter();

  const handleCheck = (groupId, idx, value) => {
    setChecked((prev) => ({
      ...prev,
      [groupId]: {
        ...prev[groupId],
        [idx]: value,
      },
    }));
  };

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
              onChange={(e) => handleCheck(data.id, idx, e.target.checked)}
              checked={checked[data.id]?.[idx] || false}
            />
          </label>
        </li>
      ))}
    </>
  );
};

const FilterLayer = ({ data, buttonData }) => {
  const { setIsLayerOpen, setChecked } = useFilter();
  const newData = [...data, ...buttonData];
  const [isListOpen, setIsListOpen] = useState(
    new Array(newData.length).fill(false)
  );

  const handleToggle = (e, idx) => {
    const newToggleOpen = [...isListOpen];
    if (!newToggleOpen[idx]) {
      newToggleOpen[idx] = true;
      e.target.parentElement.classList.add("box__filter-inner--active");
    } else {
      newToggleOpen[idx] = false;
      if (
        e.target.parentElement.classList.contains("box__filter-inner--active")
      ) {
        e.target.parentElement.classList.remove("box__filter-inner--active");
      }
    }
    setIsListOpen(newToggleOpen);
  };

  return (
    <div className="box__filter-layer">
      <div className="box__layer">
        <div className="box__layer-header">
          <div className="box__title-wrap">
            <h3 className="text__title">필터</h3>
            <button
              type="button"
              className="button__reset"
              onClick={() => setChecked({})}
            >
              모두 지우기
            </button>
          </div>
          <button
            type="button"
            className="button__close"
            onClick={() => setIsLayerOpen(false)}
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
export default FilterLayer;
