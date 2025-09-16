import { FilterProvider, useFilter } from "./FilterContext";
import CategoryWrap from "./CategoryWrap";
import FilterOptions from "./FilterOptions";
import FilterLayer from "./FilterLayer";
import Loading from "./Loading";
import { createResource } from "./fetchData";
// import dummyData from "./dummyData/dummyData";
import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Profiler } from "react";
import "../../css/filter.css";
import "../../css/error.css";
import "../../css/loading.css";

function onRenderCallback(
  id, // Profiler에 설정한 id
  phase, // "mount" | "update"
  actualDuration, // 실제 렌더링 시간(ms)
  baseDuration,   // 최적화 안 했을 때 예상 시간(ms)
  startTime,
  commitTime,
  interactions
) {
  console.log(
    `[Profiler] ${id} - ${phase}\n` +
    `⏱ 실제 렌더링 시간: ${actualDuration.toFixed(2)}ms\n` +
    `🛠 최적화 안 했을 때 예상: ${baseDuration.toFixed(2)}ms`
  );
}

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
        <Profiler id="CategoryWrap" onRender={onRenderCallback}>
          <CategoryWrap data={data?.filterList} />
        </Profiler>
        <Profiler id="FilterOptions" onRender={onRenderCallback}>
          <FilterOptions data={data?.filterButtonList} />
        </Profiler>
      </div>
      {state.isLayerOpen && (
        <Profiler id="FilterLayer" onRender={onRenderCallback}>
          <FilterLayer
            data={data?.filterList}
            buttonData={data?.filterButtonList}
          />
        </Profiler>
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
