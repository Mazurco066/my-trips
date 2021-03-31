// Dependencies
import { gql } from 'graphql-request'

// Query
export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      name
      slug
      description {
        html
      }
      galery {
        url
        width
        height
      }
      location {
        latitude
        longitude
      }
    }
  }
`