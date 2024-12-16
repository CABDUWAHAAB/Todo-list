"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const apollo_server_1 = require("apollo-server");
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeDefs_1 = require("./schema/typeDefs");
dotenv_1.default.config();
// Connect to MongoDB
(0, db_1.default)();
// Create Apollo Server
const server = new apollo_server_1.ApolloServer({
    schema: typeDefs_1.schema,
    context: ({ req }) => {
        // Add context if needed (e.g., authentication)
        return {};
    },
});
// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}graphql`);
});
