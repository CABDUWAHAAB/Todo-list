"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoResolver = void 0;
// src/resolvers/todoResolver.ts
const Todo_1 = require("../models/Todo");
class todoResolver {
    static getAllTodo() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Todo_1.Todo.find();
            }
            catch (error) {
                console.error("Error fetching posts:", error);
                throw new Error("Failed to fetch posts");
            }
        });
    }
    static getTodoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Todo_1.Todo.findById(id);
        });
    }
    static createTodo(title, description, completed) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTodo = new Todo_1.Todo({
                title,
                description,
                completed,
                createdAt: new Date().toISOString()
            });
            return yield newTodo.save();
        });
    }
    static updateTodo(id, title, description, completed) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Todo_1.Todo.findByIdAndUpdate(id, { title, description, completed }, { new: true });
        });
    }
    static deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Todo_1.Todo.findByIdAndDelete(id);
        });
    }
}
exports.todoResolver = todoResolver;
