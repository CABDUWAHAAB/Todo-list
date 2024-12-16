import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TODO } from '../graphql/mutations';

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const [createTodo] = useMutation(CREATE_TODO, {
    refetchQueries: ['GetTodos'], // Refetch todos after mutation
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTodo({ variables: { title, description, completed } });
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Add Todo</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded w-full"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Completed</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;