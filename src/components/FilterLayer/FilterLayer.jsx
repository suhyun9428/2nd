import "../../css/filter.css";
import { useState, useEffect } from "react";
import { selectedIndex, openLayer } from "./atom/atom";
import { useAtom } from "jotai";
import classNames from "classnames";

const FilterCheckbox = ({ data, index }) => {
  const itemList = data.itemList;
  const [isSelected, setIsSelected] = useAtom(selectedIndex);
  const [checkStates, setCheckStates] = useState(
    new Array(itemList.length).fill(false)
  );

  useEffect(() => {
    console.log(isSelected, "2");
  }, [isSelected]);

  const handleCheck = (e, idx) => {
    const newCheckStates = [...checkStates];
    newCheckStates[idx] = e.target.checked;
    setCheckStates(newCheckStates);
  };
  return (
    <ul className="list__filter">
      {itemList.map((el, idx) => {
        return (
          <li className="list-item" key={`item-${idx}`}>
            <label htmlFor={`form__${data.id}`}>
              <span className="text">{el}</span>
              <input
                type="checkbox"
                name={`form__${data.id}`}
                id={`form__${data.id}`}
                onChange={(e) => {
                  handleCheck(e, idx);
                  setIsSelected({ selectedItemIdx: index, titleIdx: idx });
                }}
                checked={checkStates[idx]}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

const FilterLayer = ({ data }) => {
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);
  const [isOpen, setIsOpen] = useState(new Array(data.length).fill(false));

  const handleToggle = (e, idx) => {
    const newToggleOpen = [...isOpen];
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
    setIsOpen(newToggleOpen);
  };

  const handleReset = () => {
    console.log("체크박스 선택한거 다 날려용");
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
          {data.map((item, idx) => {
            return (
              <div className="box__filter-inner" key={`filter-${idx}`}>
                <button
                  type="button"
                  className="button__title"
                  onClick={(e) => handleToggle(e, idx)}
                >
                  <span className="text__title">{item.title}</span>
                </button>
                <FilterCheckbox data={item} index={idx} />
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
