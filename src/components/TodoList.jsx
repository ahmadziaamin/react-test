import TodoItem from "./TodoItem";


const TodoList = ({ todos, onToggle }) => {
  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
