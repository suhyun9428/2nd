import "../../css/filter.css";
import { openLayer } from "./atom/atom";
import { useAtom } from "jotai";
import CategoryWrap from "./CategoryWrap";
import FilterOptions from "./FilterOptions";
import FilterLayer from "./FilterLayer";
import dummyData from "./dummyData/dummyData";

const FilterContents = () => {
  const [isLayerOpen, setIsLayerOpen] = useAtom(openLayer);

  return (
    <>
      <div className="box__filter-wrap">
        <CategoryWrap data={dummyData.filterList} />
        <FilterOptions data={dummyData.filterButtonList} />
      </div>
      {isLayerOpen && (
        <FilterLayer
          data={dummyData.filterList}
          buttonData={dummyData.filterButtonList}
        />
      )}
    </>
  );
};
export default FilterContents;
