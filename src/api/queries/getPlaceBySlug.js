// Dependencies
import { gql } from 'graphql-request'

// Query
export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String!) {
    place(where:{ slug: $slug }) {
      id
      name
      slug
      description {
        html
        text
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
