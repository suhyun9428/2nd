import { useState } from "react";

const AgreementTest = () => {
  const dummy = ["사과", "바나나", "포도"];
  const [checkStates, setCheckStates] = useState(
    new Array(dummy.length).fill(false)
  );
  // array로 되어 있으니까 new Array().fill(false)로 각각 모두 상태 값을 false로 일단 설정

  const handleCheck = (e, idx) => {
    const newCheckStates = [...checkStates];
    // checkStates 배열을 복사해서 새 배열 newCheckStates를 만듦
    // 불변성 유지를 위해 원본 배열을 직접 수정하지 않고 복사해서 작업
    // -> ? 그냥 쓰면 안돼? 조작할 때마다 계속 값이 바뀔텐데?
    // React에서 상태는 불변(immutable) 해야 해요. 기존 배열을 직접 수정하면 React가 변경을 감지 못해요. 그래서 항상 ... 스프레드 문법으로 복사하고 새로 설정해야 해요.
    newCheckStates[idx] = e.target.checked;
    // 사용자가 클릭한 체크박스의 idx에 해당하는 위치 값을 업데이트함
    // e.target.checked는 현재 체크 여부 (true 또는 false)
    setCheckStates(newCheckStates);
    // 복사한 배열을 상태로 다시 설정함 → 리렌더링 발생
  };

  const isAllChecked = checkStates.every((e) => {
    return e === true;
  });

  const handleAllCheck = (e) => {
    const isChecked = e.target.checked;
    setCheckStates(new Array(dummy.length).fill(isChecked));
  };
  return (
    <>
      <label htmlFor="checkAll">
        <input
          type="checkbox"
          id="checkAll"
          onChange={handleAllCheck}
          checked={isAllChecked}
        />
        전체선택
      </label>
      {dummy.map((item, idx) => {
        return (
          <label htmlFor={`check${idx}`} key={idx}>
            <input
              type="checkbox"
              className="form__checkbox"
              id={`check${idx}`}
              onChange={(e) => handleCheck(e, idx)}
              checked={checkStates[idx]}
              aria-checked={checkStates[idx]}
            />
            <span className="text">{item}</span>
          </label>
        );
      })}
    </>
  );
};
export default AgreementTest;
