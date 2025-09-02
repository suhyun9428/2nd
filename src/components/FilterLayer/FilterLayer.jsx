import "../../css/filter.css";
import { useState, useEffect } from "react";
import { openLayer, filterChecked } from "./atom/atom";
import { useAtom } from "jotai";
import classNames from "classnames";

const FilterCheckbox = ({ data }) => {
  const itemList = data.itemList;
  const [checked, setChecked] = useAtom(filterChecked);

  useEffect(() => {
    console.log(checked, "2");
  }, [checked]);

  const handleCheck = (e, idx) => {
    setChecked((prev) => ({
      ...prev,
      [data.id]: {
        ...prev[data.id],
        [idx]: e.target.checked,
      },
    }));
  };

  return (
    <>
      {itemList.map((el, idx) => {
        return (
          <li className="list-item" key={`item-${idx}`}>
            <label htmlFor={`form__${data.id}-${idx}`}>
              {el.text !== undefined ? (
                <span className="text">{el.text}</span>
              ) : (
                <span className="text">{el}</span>
              )}
              <input
                type="checkbox"
                name={`form__${data.id}`}
                id={`form__${data.id}-${idx}`}
                onChange={(e) => handleCheck(e, idx)}
                checked={checked[data.id]?.[idx] || false}
              />
            </label>
          </li>
        );
      })}
    </>
  );
};

const FilterLayer = ({ data, buttonData }) => {
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);
  const newData = [...data, ...buttonData];
  const [isListOpen, setIsListOpen] = useState(
    new Array(newData.length).fill(false)
  );
  const [checked, setChecked] = useAtom(filterChecked);

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

  const handleReset = () => {
    setChecked({});
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
              onClick={() => handleReset()}
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
          {newData.map((item, idx) => {
            return (
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
            );
          })}
        </div>
      </div>
      <div className="box__dimmed" onClick={() => setIsLayerOpen(false)}></div>
    </div>
  );
};
export default FilterLayer;
