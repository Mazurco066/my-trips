// Template
import PropTypes from 'prop-types'
import { PlaceTemplate } from 'templates'
import { graphqlClient } from 'api'
import { GET_PLACE_BY_SLUG } from 'api/queries'

// Component
export default function PlacesPage({ place }) {
  
  // Jsx
  return (
    <PlaceTemplate place={place} />
  )
}

// Get data from slug param (runtime)
export async function getServerSideProps({ params }) {
  const { place } = await graphqlClient.request(GET_PLACE_BY_SLUG, {
    slug: params?.slug
  })
  if (!place) return { notFound: true }
  return { props: { place: place || {} } }
}

// Prop Types
PlacesPage.defaultProps = {
  place: {}
}

PlacesPage.propTypes = {
  place: PropTypes.object
}
