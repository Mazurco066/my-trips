// Dependencies
import { GraphQLClient} from 'graphql-request'

// GraphQL Host location
/* eslint-disable-next-line */
const endpoint = process.env.GRAPHQL_HOST

// Graphql client instance
export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    /* eslint-disable-next-line */
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})