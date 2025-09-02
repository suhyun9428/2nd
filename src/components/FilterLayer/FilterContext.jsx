import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);
// 기본 null로 해서 context를 만들고

export function FilterProvider({ children }) {
  const [isLayerOpen, setIsLayerOpen] = useState(false);
  const [checked, setChecked] = useState({});

  const value = { isLayerOpen, setIsLayerOpen, checked, setChecked };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter는 FilterProvider 내부에서만 사용하세요.");
  return context;
}
