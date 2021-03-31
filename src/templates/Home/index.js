// Dependencies
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

// SSR Components
import LinkWrapper from 'components/LinkWrapper'
import { FaInfoCircle } from 'react-icons/fa'

// Dynamic components
const Map = dynamic(() => import('components/Map'), { ssr: false })

// Component
export default function HomeTemplate({ places }) {
  
  // Jsx
  return (
    <>
      <LinkWrapper href="/about">
        <FaInfoCircle />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

// Prop Types
HomeTemplate.defaultProps = {
  places: []
}

HomeTemplate.propTypes = {
  places: PropTypes.array
}
