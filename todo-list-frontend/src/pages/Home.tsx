import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import "../assets/scss/Home.scss";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Home;