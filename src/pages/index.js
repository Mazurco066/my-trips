// Template
import PropTypes from 'prop-types'
import { HomeTemplate } from 'templates'
import { graphqlClient } from 'api'
import { GET_PLACES } from 'api/queries'

// Component
export default function HomePage({ places }) {
  
  // Jsx
  return (
    <HomeTemplate places={places} />
  )
}

// Get data to map pins (runtime)
export async function getServerSideProps() {
  const { places } = await graphqlClient.request(GET_PLACES)
  return { props: { places: places || [] } }
}

// Prop Types
HomePage.defaultProps = {
  places: []
}

HomePage.propTypes = {
  places: PropTypes.array
}
