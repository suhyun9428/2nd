import { Fragment } from "react/jsx-runtime";
import dummyData from "./dummyData/dummyData";
import { useState } from "react";
import classNames from "classnames";
const Agreement = () => {
  const [open, isOpen] = useState({});
  const [checked, setChecked] = useState([]);
  const allCheck = (e) => {
    if (e.target.checked) {
      console.log("all!");
      // setChecked()
    }
  };
  // console.log(isOpen, open, "????");
  // const handleChecked = (checked) => {
  //   console.log(checked);
  // };
  const handleOpen = (idx) => {
    isOpen((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
    console.log(isOpen, "?isOpen", open);
  };
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
              // aria-checked={handleChecked}
              onChange={allCheck}
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
