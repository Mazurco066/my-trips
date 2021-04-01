// Template
import PropTypes from 'prop-types'
import { PlaceTemplate } from 'templates'
import { graphqlClient } from 'api'
import { GET_PLACE_BY_SLUG, GET_PLACES } from 'api/queries'

// Component
export default function PlacesPage({ place }) {
  
  // Jsx
  return (
    <PlaceTemplate place={place} />
  )
}

// Generate static places pages using slug
export async function getStaticPaths() {
  const { places } = await graphqlClient.request(GET_PLACES, { first: 20 })
  const paths = places?.map(({ slug }) => ({ params: { slug } }))
  return { paths, fallback: true }
}

// Get data from current place
export async function getStaticProps({ params }) {
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
