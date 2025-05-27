import React from 'react';
import { useState } from 'react';
import { useTodoStore, type Todo } from '../todoStore';
import { HiH3 } from 'react-icons/hi2';
const TodoApp = () => {
  const { todos, addTodo, removeTodo } = useTodoStore();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const formatDateForInput = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const handleCompletionChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setIsCompleted(e.target.value === 'true');
  };

  const handleAddTodo = () => {
    if (name.trim() === '' || description.trim() === '' || deadline == null) {
      return;
    }
    addTodo({
      id: Date.now(),
      name,
      description,
      deadline,
      isCompleted,
    });

    setName('');
    setDescription('');
    setIsCompleted(false);
    setDeadline(null);
  };

  const handleEdit = (todo: Todo) => {
    setName(todo.name);
    setDescription(todo.description);
    setIsCompleted(todo.isCompleted);
    setDeadline(todo.deadline);
    setEditingTodo(todo);
  };

  const handleUpdateTodo = () => {
    if (name.trim() === '' || description.trim() === '' || deadline == null) {
      return;
    }
    if (editingTodo) {
      removeTodo(editingTodo.id);
      addTodo({
        id: Date.now(),
        name,
        description,
        deadline,
        isCompleted,
      });
    }
    setEditingTodo(null);

    setName('');
    setDescription('');
    setIsCompleted(false);
    setDeadline(null);
  };

  const handleCancelTodo = () => {
    setEditingTodo(null);

    setName('');
    setDescription('');
    setIsCompleted(false);
    setDeadline(null);
  };

  return (
    <div className="py-8">
      <div className="max-w-md mx-auto p-6 bg-black shadow rounded-xl space-y-6">
        <h1 className="text-purple-200  text-2xl  text-center font-bold">
          To Do App
        </h1>
        <div>
          <label htmlFor="name" className="block mb-1 text-white font-medium">
            Title
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Title of Your Todo"
            onChange={(e) => setName(e.target.value)}
            className="focus:outline-none focus:border-2 text-white w-full border border-white rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-1 text-white font-medium"
          >
            Description
          </label>
          <textarea
            className="focus:outline-none focus:border-2 text-white w-full border border-white rounded-lg px-3 py-2"
            placeholder="Enter the detailed description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 text-white font-medium">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            value={formatDateForInput(deadline)}
            placeholder="Enter the deadline"
            onChange={(e) => setDeadline(new Date(e.target.value))}
            className="focus:outline-none focus:border-2 text-white w-full border border-white rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-1 text-white font-medium">
            Is Completed?
          </label>
          <div className="flex items-center space-x-4 text-white">
            <label htmlFor="">
              <input
                type="radio"
                value="true"
                checked={isCompleted === true}
                onChange={handleCompletionChange}
                className="form-radio text-black"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="false"
                checked={isCompleted === false}
                onChange={handleCompletionChange}
                className="form-radio text-black"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between text-white">
          {editingTodo ? (
            <>
              <button
                className="block mb-1 text-white font-medium bg-amber-500 px-4 py-2 rounded-md"
                onClick={handleUpdateTodo}
              >
                Update Todo
              </button>
              <button
                className="block mb-1 text-white font-medium bg-cyan-800 rounded-md py-2 px-4"
                onClick={handleCancelTodo}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="block bg-cyan-300 px-4 py-2 rounded-md mb-1 text-white font-medium"
                onClick={handleAddTodo}
              >
                Add Todo
              </button>
            </>
          )}
        </div>
        <div className="text-black">
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="p-2 bg-green-50 rounded-lg shadow-sm mb-2"
              >
                <strong>{todo.name}</strong>
                <p>{todo.description}</p>
                <p>{formatDateForInput(todo.deadline)}</p>
                <p>{todo.isCompleted ? 'Completed' : 'Yet to complete'}</p>
                <div className="flex justify-between">
                  <button
                    className="px-4 py-2 bg-gray-400 rounded-md"
                    onClick={() => handleEdit(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-400 rounded-md"
                    onClick={() => removeTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
