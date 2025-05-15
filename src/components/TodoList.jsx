import React, { useState } from 'react';
import { BsJournalMedical } from 'react-icons/bs';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodo([...todo, input]);
      setInput('');
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Input to do"
        />
        <button type="submit">Add To Do</button>
        <ul>
          {todo.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
