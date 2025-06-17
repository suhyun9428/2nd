import { useAtom } from "jotai";
import { activeTabIndex } from "./atom/atom";
import classNames from "classnames";

const Tabs = ({ data }) => {
  const [active, setActive] = useAtom(activeTabIndex);
  const handleTab = (idx) => {
    setActive(idx);
  };
  return (
    <div className="box__category-wrap">
      {data.map((item, idx) => {
        return (
          <button
            type="button"
            className={classNames(
              "button__category",
              active === idx ? "button__category--active" : ""
            )}
            key={idx}
            onClick={() => handleTab(idx)}
            aria-selected={active === idx}
          >
            <img
              src={
                active === idx
                  ? item.brandLogoImage.onImageUrl
                  : item.brandLogoImage.offImageUrl
              }
              alt={item.sdBrandName}
              className="image__logo"
            />
          </button>
        );
      })}
    </div>
  );
};
export default Tabs;
