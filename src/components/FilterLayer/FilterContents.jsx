import { FilterProvider, useFilter } from "./FilterContext";
import CategoryWrap from "./CategoryWrap";
import FilterOptions from "./FilterOptions";
import FilterLayer from "./FilterLayer";
import Loading from "./Loading";
import { createResource } from "./fetchData";
// import dummyData from "./dummyData/dummyData";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "../../css/filter.css";
import "../../css/error.css";
import "../../css/loading.css";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="box__error">
      <p className="text__icon">❌</p>
      <p className="text__error">
        에러 발생!
        <br />
        {error.message}
      </p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="button__reset"
      >
        다시 시도하면 가능
      </button>
    </div>
  );
}

const FilterContainer = ({ resource }) => {
  const { state } = useFilter();
  const data = resource.read();

  return (
    <>
      <div className="box__filter-wrap">
        <CategoryWrap data={data?.filterList} />
        <FilterOptions data={data?.filterButtonList} />
      </div>
      {state.isLayerOpen && (
        <FilterLayer
          data={data?.filterList}
          buttonData={data?.filterButtonList}
        />
      )}
    </>
  );
};

const FilterContents = () => {
  const [resource, setResource] = useState(() => createResource());

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setResource(createResource(false))} // 새 resource 생성
    >
      <Suspense fallback={<Loading />}>
        <FilterProvider>
          <FilterContainer resource={resource} />
        </FilterProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default FilterContents;
