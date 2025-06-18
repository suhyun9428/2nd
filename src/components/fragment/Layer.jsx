import classNames from "classnames";
import { useAtom } from "jotai";
import { activeLayer } from "../Emart/atom/atom";

const Layer = ({ isActive }) => {
  const [activelayer, setActiveLayer] = useAtom(activeLayer);

  // const closeLayer = () => {
  //   setActiveLayer((prev) =>
  //     prev.map((item) =>
  //       item.isActive === true ? { ...item, isActive: false } : item
  //     )
  //   );
  // };
  return (
    <div className={classNames("box__layer", isActive && "box__layer--active")}>
      <div className="box__layer-content">
        <button type="button" className="button__close">
          x
        </button>
        <p className="text__title">닫으세용</p>
        <button type="button" className="button__confirm">
          확인
        </button>
      </div>
      <div className="box__dimmed"></div>
    </div>
  );
};

export default Layer;
