import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos] = useState([
    { id: 1, text: "스터디 자료 준비하기" },
    { id: 2, text: "작업하기" },
  ]);

  return (
    <TodoContext.Provider value={{ todos }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}