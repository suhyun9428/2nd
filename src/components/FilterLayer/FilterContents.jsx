import { FilterProvider, useFilter } from "./FilterContext";
import CategoryWrap from "./CategoryWrap";
import FilterOptions from "./FilterOptions";
import FilterLayer from "./FilterLayer";
import dummyData from "./dummyData/dummyData";
import "../../css/filter.css";

const FilterContainer = () => {
  const { isLayerOpen } = useFilter();
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

const FilterContents = () => {
  return (
    <FilterProvider>
      <FilterContainer />
    </FilterProvider>
  );
};
export default FilterContents;
