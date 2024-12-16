// src/resolvers/todoResolver.ts
import { ITodo, Todo } from '../models/Todo';

export class todoResolver {
    static async getAllTodo(): Promise<ITodo[]> {
        try {
          return await Todo.find();
        } catch (error) {
          console.error("Error fetching posts:", error);
          throw new Error("Failed to fetch posts");
        }
    }

    static async getTodoById(id: string): Promise<ITodo | null> {
        return await Todo.findById(id);
      }

    static async createTodo(title: string, description: string, completed: boolean): Promise<ITodo> {
          const newTodo = new Todo({
            title,
            description,
            completed,
            createdAt: new Date().toISOString()
          });
          return await newTodo.save();
    }

    static async updateTodo(id: string, title: string, description: string, completed: boolean): Promise<ITodo | null> {
        return await Todo.findByIdAndUpdate(
            id, { title, description, completed }, { new: true });
    }

    static async deleteTodo(id: string): Promise<ITodo | null> {
        return await Todo.findByIdAndDelete(id);
      }
    
}