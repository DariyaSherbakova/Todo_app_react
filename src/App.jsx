import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const addTodo = () => {
    if (value !== '') {
      setTodos([...todos, value]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setValue('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Todo list</h1>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
