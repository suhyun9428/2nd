import { createContext, useContext, useReducer } from "react";

function filterReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_LAYER":
      return { ...state, isLayerOpen: !state.isLayerOpen };
    case "SET_CHECKED":
      return { ...state, checked: action.payload };
    case "TOGGLE_CHECK": {
      const { groupId, idx } = action.payload;

      return {
        ...state,
        checked: {
          ...state.checked,
          [groupId]: {
            ...state.checked[groupId],
            [idx]: !state.checked[groupId]?.[idx],
          },
        },
      };
    }
    default:
      return state;
  }
}

const initialState = {
  isLayerOpen: false,
  checked: [],
};

const FilterContext = createContext(null);
// 기본 null로 해서 context를 만들고

export function FilterProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter는 FilterProvider 내부에서만 사용하세요~");
  return context;
}
