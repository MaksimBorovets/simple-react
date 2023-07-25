import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// CRUD
// C - create / axios.post
// R - read /  axios.get
// U - update / axios.put
// D - delete / axios.delete

// Turbo Console Log

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const addNewTodo = async () => {
    try {
      const { data } = await axios.post(`${API_BASE_URL}/todos`, {
        title: newTodo,
        completed: false,
      });

      setTodos([data, ...todos]);
      setNewTodo('');
    } catch (error) {
      console.log('🚀 ~ file: App.jsx:28 ~ addNewTodo ~ error:', error);
    }
  };

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(
        `${API_BASE_URL}/todos/?_page=1&_limit=20`,
      );
      setTodos(data);
    } catch (error) {
      console.log('ERROR -> ', error);
    }
  };

  const toggleTodoIsCompleted = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      await axios.put(`${API_BASE_URL}/todos/${id}`, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      console.log(
        '🚀 ~ file: App.jsx:38 ~ toggleTodoIsCompleted ~ error:',
        error,
      );
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log('🚀 ~ file: App.jsx:55 ~ deleteTodo ~ error:', error);
    }
  };

  return (
    <div>
      <h1>Todo App JSON Placeholder </h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        disabled={!newTodo}
        onClick={addNewTodo}
        style={{ marginLeft: 15 }}>
        Add Todo
      </button>
      {todos.map((todo) => (
        <li className="todo-item">
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            onClick={() => toggleTodoIsCompleted(todo.id)}>
            {todo.title}
          </span>
          <button
            style={{ marginLeft: 15 }}
            onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

export default App;
