import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/index.scss'
import {App} from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './api/apollo-client.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
