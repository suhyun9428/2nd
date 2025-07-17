import { useState } from "react"

const Tooltip = () => {
  const [open, setOpen] = useState(false);

  return(
    <>
      <p className="text__date">09.02 10:24 기준
        <button type="button" className="button__info sprite" aria-expanded={open} onClick={()=>setOpen(true)}>
          <span className="for-a11y">베스트 선정 기준 안내창</span>
        </button>
      </p>
      {open && 
        <div className={`box__tooltip-layer ${open ? 'box__tooltip-layer--active':''}`}>
          <button type="button" className="button__close sprite" onClick={()=>setOpen(false)}>
            <span className="for-a11y">닫기</span>
          </button>
          <p className="text__title">베스트 선정 기준</p>
          <ul className="list__text">
            <li className="list-item">G마켓 베스트 랭킹은 상품의 판매수량, 매출을 기반으로, 각각의 가중치 및 카테고리 가격대 가중치를 반영하여 선정됩니다.</li>
            <li className="list-item">전체 베스트 랭킹은 실시간, 일간, 주간 별로 나누어 확인할 수 있으며, 실시간 랭킹은 최근 2시간 판매 데이터로 집계됩니다.</li>
            <li className="list-item">베스트 상품과 연관 있는 개인화 추천 광고 상품이 노출될 수 있습니다.</li>
          </ul>
        </div>
      }
    </>
  )
}
const Sorting = () => {
  const [selectOpen, setSelectOpen] = useState(false);

  return(
    <div className="box__sorting">
      <button type="button" className="button__sorting sprite" title="정렬 방식을 변경하려면 버튼을 클릭해 주세요." id="sorting" aria-haspopup="dialog" aria-controls="sorting_list" onClick={()=>setSelectOpen(true)}>
        <span className="text">실시간</span>
      </button>
      {selectOpen && 
        <div className={`box__sorting-option ${selectOpen ? 'box_sorting-option--active' : ''}`} id="sorting_list" aria-labelledby="sorting" role="dialog" aria-modal="true">
          <div className="box__option-content" tabIndex="0">
            <p className="text__title">정렬</p>
            <button type="button" className="button__close sprite" title="정렬 방식 변경 레이어 닫기" onClick={()=>setSelectOpen(false)}>
              <span className="for-a11y">닫기</span>
            </button>
            <ul className="list__sorting-option">
              <li className="list-item list-item--active list-item__rank">
                <span className="text__item" id="item-sort-1">실시간<span className="for-a11y">으로 정렬</span></span>
                <button type="button" className="button__radio sprite" aria-current="true" aria-describedby="item-sort-1"></button>
              </li>
              <li className="list-item  list-item__rank">
                <span className="text__item" id="item-sort-2">
                일간
                <span className="for-a11y">으로 정렬</span>
                </span>
                <button type="button" className="button__radio sprite" aria-current="false" aria-describedby="item-sort-2"></button>
              </li>
              <li className="list-item  list-item__rank">
                <span className="text__item" id="item-sort-3">주간
                <span className="for-a11y">으로 정렬</span>
                </span>
                <button type="button" className="button__radio sprite last-focus" aria-current="false" aria-describedby="item-sort-3"></button>
              </li>
            </ul>
          </div>
          <div className="box__dimmed" aria-hidden="true" onClick={()=>setSelectOpen(false)}>
            <span className="for-a11y">정렬레이어 딤드배경</span>
          </div>
        </div>
      }
    </div>
  )
}

const MobileSoritng = () => {
  return(
    <div className="box__container">
      <div className="box__search-result-container">
        <Tooltip />
        <Sorting />
      </div>
    </div>
  )
}

export default MobileSoritng;