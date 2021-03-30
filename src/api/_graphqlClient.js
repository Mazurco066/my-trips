// Dependencies
import { GraphQLClient} from 'graphql-request'

// GraphQL Host location
const endpoint = process.env.GRAPHQL_HOST

// Graphql client instance
export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})