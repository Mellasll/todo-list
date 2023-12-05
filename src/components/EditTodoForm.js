import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setError('Boş değer giremezsiniz!');
    } else {
      editTodo(value, task.id);
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};