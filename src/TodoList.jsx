import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodos }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodos={deleteTodos}
          />
        );
      })}
    </ul>
  );
}
