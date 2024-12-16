import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../graphql/queries';

const TodoList: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <ul>
        {data.todos.map((todo: {id: string, title: string, description: string, completed: boolean}) => (
          <li key={todo.id} className="mb-4">
            <h2 className="text-lg font-semibold">{todo.title}</h2>
            <p className="text-gray-600">{todo.description}</p>
            <p className={`text-sm ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
              {todo.completed ? 'Completed' : 'Incomplete'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;