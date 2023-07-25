import React, { useState } from 'react';

import '../App.css';

export const SimpleTodos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Learn React',
      compeleted: true,
    },
    {
      id: 2,
      title: 'Build React Appp',
      compeleted: false,
    },
    {
      id: 3,
      title: 'Deploy React App',
      compeleted: false,
    },
  ]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const toggleTodoHandle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, compeleted: !todo.compeleted } : todo,
      ),
    );
  };

  const addTodoHandler = () => {
    if (newTodoTitle.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      compeleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoTitle('');
  };

  return (
    <div className="container">
      <h1>Simple Todo App</h1>
      <div className="add-todo-box">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter new todo"
        />
        <button className="add-button" onClick={addTodoHandler}>
          Add Todo
        </button>
      </div>
      {todos.map(({ id, title, compeleted }) => (
        <div key={id} className="todo-item-box">
          <input
            type="checkbox"
            checked={compeleted}
            onChange={() => toggleTodoHandle(id)}
          />
          <span className={compeleted ? 'completed' : ''}>{title}</span>
        </div>
      ))}
      <button className="delete-btn" onClick={() => {}}>
        Delete
      </button>
    </div>
  );
};
