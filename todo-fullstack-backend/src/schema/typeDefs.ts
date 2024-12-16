// src/schema/typeDefs.ts
import { GraphQLBoolean, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { todoResolver } from '../resolvers/todoResolver';


const typeDefs = new GraphQLObjectType({
    name: "Todo",
    fields: {
        id: {type: GraphQLString},
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        completed: {type: GraphQLBoolean},
        createdAt: { type: GraphQLString },
    }
})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        todos: {
            type: new GraphQLList(typeDefs),
            resolve: async () => {
                return await todoResolver.getAllTodo();
            }
        },
        todo: {
            type: typeDefs,
            args: {
                id: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: async (_, {id}) => {
                return await todoResolver.getTodoById(id);
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createTodo: {
            type: typeDefs,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                completed: {type: new GraphQLNonNull(GraphQLBoolean)},
            },
            resolve: async (_, { title, description, completed }) => {
                return await todoResolver.createTodo(title, description, completed);
            },
        },
        updateTodo: {
            type: typeDefs,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: new GraphQLNonNull(GraphQLString) },
                completed: {type: new GraphQLNonNull(GraphQLBoolean)},
            },
            resolve: async (_, { id, title, description, completed }) => {
                return await todoResolver.updateTodo(id, title, description, completed);
            },
        },
        deleteTodo: {
            type: typeDefs,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async (_, {id} ) => {
                return await todoResolver.deleteTodo(id);
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
  });
  