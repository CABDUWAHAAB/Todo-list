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
exports.schema = void 0;
// src/schema/typeDefs.ts
const graphql_1 = require("graphql");
const todoResolver_1 = require("../resolvers/todoResolver");
const typeDefs = new graphql_1.GraphQLObjectType({
    name: "Todo",
    fields: {
        id: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        completed: { type: graphql_1.GraphQLBoolean },
        createdAt: { type: graphql_1.GraphQLString },
    }
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        todos: {
            type: new graphql_1.GraphQLList(typeDefs),
            resolve: () => __awaiter(void 0, void 0, void 0, function* () {
                return yield todoResolver_1.todoResolver.getAllTodo();
            })
        },
        todo: {
            type: typeDefs,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
                return yield todoResolver_1.todoResolver.getTodoById(id);
            })
        }
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTodo: {
            type: typeDefs,
            args: {
                title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                completed: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
            },
            resolve: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { title, description, completed }) {
                return yield todoResolver_1.todoResolver.createTodo(title, description, completed);
            }),
        },
        updateTodo: {
            type: typeDefs,
            args: {
                title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                description: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                completed: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLBoolean) },
            },
            resolve: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, title, description, completed }) {
                return yield todoResolver_1.todoResolver.updateTodo(id, title, description, completed);
            }),
        },
        deleteTodo: {
            type: typeDefs,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
                return yield todoResolver_1.todoResolver.deleteTodo(id);
            })
        }
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
