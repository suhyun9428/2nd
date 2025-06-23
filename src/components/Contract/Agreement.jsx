import { Fragment } from "react/jsx-runtime";
import dummyData from "./dummyData/dummyData";
import { useState } from "react";
import classNames from "classnames";
const Agreement = () => {
  const [open, isOpen] = useState({});
  const [checked, setChecked] = useState(
    new Array(dummyData.terms.length).fill(false)
  );
  const handleCheck = (e, idx) => {
    const newSetChecked = [...checked];
    newSetChecked[idx] = e.target.checked;
    setChecked(newSetChecked);
    // !!!! 복사해서 사용하지 않으면 리액트는 상태 변화를 감지하지 못함;;;;
  };
  const handleOpen = (idx) => {
    isOpen((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  const handleAllCheck = (e) => {
    if (e.target.checked) {
      setChecked(new Array(dummyData.terms.length).fill(true));
    } else {
      setChecked(new Array(dummyData.terms.length).fill(false));
    }
  };
  const isAllChecked = checked.every((e) => e === true);
  return (
    <div className="box__agreement-wrap">
      <h1 className="text__title">{dummyData.title}</h1>
      <div className="box__agreement">
        <div className="box__agreement-title">
          <label htmlFor="allCheck">
            <input
              type="checkbox"
              className="form__checkbox"
              id="allCheck"
              checked={isAllChecked}
              aria-checked={isAllChecked}
              onChange={handleAllCheck}
            />
            <span className="text text__emphasis">전체 동의</span>
          </label>
        </div>
        {dummyData.terms &&
          dummyData.terms.map((item, idx) => {
            return (
              <Fragment key={idx}>
                <div className="box__agreement-title">
                  <label htmlFor={`check${idx}`}>
                    <input
                      type="checkbox"
                      className="form__checkbox"
                      id={`check${idx}`}
                      onChange={(e) => handleCheck(e, idx)}
                      checked={checked[idx]}
                      aria-checked={checked[idx]}
                    />
                    <span className="text">{item.title}</span>
                  </label>
                  <button
                    type="button"
                    className="button__detail"
                    onClick={() => handleOpen(idx)}
                    aria-expanded={open[idx]}
                    aria-controls={`detail${idx}`}
                  >
                    자세히
                  </button>
                </div>
                <ul
                  className={classNames(
                    "list__detail",
                    open[idx] && "list__detail--active"
                  )}
                  id={`detail${idx}`}
                >
                  {item.detail.map((detail, idx) => {
                    return (
                      <li className="list-item" key={idx}>
                        {detail}
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
};
export default Agreement;
