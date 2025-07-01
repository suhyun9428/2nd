import classNames from "classnames";

const SearchLayer = () => {
  return (
    <div className="box__layer box__layer--active">
      <div className="box__layer-header">
        <p className="text__header">상세검색</p>
        <button type="button" className="button__close">
          x
        </button>
      </div>
      <div className="box__layer-content">
        {/* <div className="box__filter-wrap">
        </div> */}
        <div>
          <ul className="list__types" role="tablist">
            <li className="list-item" role="none">
              <button
                type="button"
                className="button__types"
                role="tab"
                aria-selected={true}
              >
                호텔
              </button>
            </li>
            <li className="list-item" role="none">
              <button
                type="button"
                className="button__types"
                role="tab"
                aria-selected={false}
              >
                리조트
              </button>
            </li>
            <li className="list-item" role="none">
              <button
                type="button"
                className="button__types"
                role="tab"
                aria-selected={false}
              >
                펜션
              </button>
            </li>
            <li className="list-item" role="none">
              <button
                type="button"
                className="button__types"
                role="tab"
                aria-selected={false}
              >
                모텔
              </button>
            </li>
          </ul>
          <div>
            <div>
              <span>가격</span>
              <span>(1박 기준)</span>
            </div>
            <div>
              <span className="text__value">1</span>
              <span className="text__unit">만원</span>~
              <span className="text__value"></span>
              <span className="text__unit">만원이상</span>
            </div>
            <div>
              <p>호텔명</p>
              <input type="text" placeholder="(예:신라호텔)을 입력하세요" />
            </div>
            <div>
              <p>부대/편의시설</p>
              <ul className="list__options">
                <li className="list-item">
                  <button type="button">픽업</button>
                </li>
                <li className="list-item">
                  <button type="button">무료조식</button>
                </li>
                <li className="list-item">
                  <button type="button">수영장</button>
                </li>
                <li className="list-item">
                  <button type="button">스파</button>
                </li>
                <li className="list-item">
                  <button type="button">세미나실</button>
                </li>
                <li className="list-item">
                  <button type="button">인터넷(Wifi)</button>
                </li>
                <li className="list-item">
                  <button type="button">노래방</button>
                </li>
                <li className="list-item">
                  <button type="button">농구장</button>
                </li>
                <li className="list-item">
                  <button type="button">축구장</button>
                </li>
                <li className="list-item">
                  <button type="button">캠프파이어</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="box__buttons-wrap">
          <button type="button" className="button__reset">
            초기화
          </button>
          <button type="button" className="button__result">
            13개의 숙박 보기
          </button>
        </div>
      </div>
      <div className="box__dimmed"></div>
    </div>
  );
};
export default SearchLayer;
