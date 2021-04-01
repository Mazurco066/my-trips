// Dependencies
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'

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
      <NextSeo
        title="My Trips"
        description="A simple project to show in map places i went."
        canonical="https://my-trips-silk.vercel.app"
      />
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
