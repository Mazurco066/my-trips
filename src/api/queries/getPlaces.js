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
      gallery {
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