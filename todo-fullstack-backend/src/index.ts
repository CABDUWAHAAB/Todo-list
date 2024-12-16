// src/index.ts
import { ApolloServer } from 'apollo-server';
import connectDB from './config/db';
import dotenv from 'dotenv';
import { schema } from './schema/typeDefs';

dotenv.config();

// Connect to MongoDB
connectDB();

// Create Apollo Server
const server = new ApolloServer({
    schema,
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