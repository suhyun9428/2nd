import { useFilter } from "./FilterContext";
import classNames from "classnames";

export function OptionsButtons({ data }) {
  const { state, dispatch } = useFilter();
  const { checked } = state;

  const handleToggle = (idx) => {
    dispatch({
      type: "TOGGLE_CHECK",
      payload: { groupId: data.id, idx },
    });
  };

  return (
    <div className="box__options-wrap">
      {data.itemList.map((item, idx) => {
        const isActive = checked[data.id]?.[idx] || false;
        return (
          <button
            type="button"
            className={classNames(
              "button__options",
              isActive && "button__options--active"
            )}
            onClick={() => handleToggle(idx)}
            key={`option-${idx}`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

const CategoryWrap = ({ data }) => {
  console.log(data, "data");
  return (
    <div className="box__category-wrap">
      <ul className="list__options">
        {data?.map((item, idx) => {
          return (
            <li className="list-item" key={`item--${idx}`}>
              <span className="text__title">{item.title}</span>
              <OptionsButtons data={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryWrap;
