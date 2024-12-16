import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String!, $description: String!, $completed: Boolean!) {
    createTodo(title: $title, description: $description, completed: $completed) {
      id
      title
      description
      completed
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $title: String!, $description: String!, $completed: Boolean!) {
    updateTodo(id: $id, title: $title, description: $description, completed: $completed) {
      id
      title
      description
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;