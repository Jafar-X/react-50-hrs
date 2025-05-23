import React, { useState } from 'react';

interface TodoList {
  id: number;
  task: string;
  completed: boolean;
}
const Todo = () => {
  const [todo, setTodo] = useState<TodoList[]>([]);
  const addToDo = (task: string) => {
    const newTodo: TodoList = {
      id: todo?.length + 1,
      task,
      completed: false,
    };

    setTodo((prev) => [...prev, newTodo]);
  };
  return (
    <div>
      <h2>To Do List</h2>
      <button onClick={() => addToDo('New To Do')}>Add To Do</button>

      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.task} - Completed: {item.completed ? '✅' : '✘'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
