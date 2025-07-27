import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";
import Loader from "./components/Loader"; // ⬅️ Import the loader
import "./index.css";

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch todos.");
        return res.json();
      })
      .then((data) => setTodos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <div className="app">
      <h1>📝 React Todo App</h1>
      <NewTodoForm onAdd={addTodo} />
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <TodoList todos={todos} onToggle={toggleCompleted} />
      )}
    </div>
  );
}

export default App;
