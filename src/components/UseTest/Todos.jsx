import { useTodoContext } from "./TodoContext";

function Todos() {
  const { todos } = useTodoContext();

  return (
    <div>
      <h2>이번주 할 일</h2>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
