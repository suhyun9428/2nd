import { Fragment } from "react/jsx-runtime";
import dummyData from "./dummyData/dummyData";

const Agreement = () => {
  return (
    <div className="box__agreement-wrap">
      <h1 className="text__title">{dummyData.title}</h1>
      <div className="box__agreement">
        <div className="box__agreement-title">
          <label htmlFor="allCheck">
            <input type="checkbox" className="form__checkbox" id="allCheck" />
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
                  <button type="button" className="button__detail">
                    자세히
                  </button>
                </div>
                <ul className="list__detail">
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
