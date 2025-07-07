import { useState, useRef, useEffect } from "react";

const FocusLayer = ({ buttonRef, openLayerRef, handleOpen }) => {
  const layerRef = useRef(null);
  console.log(buttonRef, openLayerRef, "?");
  console.log(layerRef);

  useEffect(() => {
    const focusEl =
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], input[type="radio"]';
    const layerFocus = layerRef.current?.querySelectorAll(focusEl);
    if (layerFocus && layerFocus.length > 0) {
      layerFocus[0].focus();
    }
  }, []);

  const handleKeys = (e) => {
    const focusEl =
      'a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], input[type="radio"]';
    const layerFocus = layerRef.current?.querySelectorAll(focusEl);
    const firstEl = layerFocus[0];
    const lastEl = layerFocus[layerFocus.length - 1];

    console.log(e.key, firstEl, lastEl);
    if (e.key === "Tab") {
      const activeEl = document.activeElement; // 왜 active는 여기서 체크해야하는지?
      if (e.shiftKey && activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
    if (e.key === "Escape") {
      handleOpen?.();
      buttonRef.current?.focus();
    }
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "pink",
        width: "500px",
        height: "500px",
      }}
      ref={layerRef}
      tabIndex={-1}
      onKeyDown={handleKeys}
    >
      <label>
        <input type="text" />
      </label>
      <button type="button">버튼</button>
      <a href="#">링크</a>
      <button type="button" onClick={handleOpen}>
        닫기
      </button>
    </div>
  );
};

const FocusContext = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOpen = () => {
    setIsActive(!isActive);
  };

  const buttonRef = useRef([]);
  const openLayerRef = useRef(null);
  return (
    <>
      <button type="button" onClick={handleOpen} ref={buttonRef}>
        열기1
      </button>
      <button type="button" onClick={handleOpen}>
        열기2
      </button>
      {isActive && (
        <FocusLayer
          buttonRef={buttonRef}
          openLayerRef={openLayerRef}
          handleOpen={handleOpen}
        />
      )}
    </>
  );
};
export default FocusContext;
