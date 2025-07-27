const TodoItem = ({ todo, onToggle }) => {
  return (
    <li
      className={`todo-item ${todo.completed ? "done" : ""}`}
      onClick={() => onToggle(todo.id)}
    >
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.title}</span>
    </li>
  );
};

export default TodoItem;
