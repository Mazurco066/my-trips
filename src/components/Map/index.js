// Dependencies
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

// Component
export default function Map({ places }) {

  // Hooks
  const router = useRouter()

  // Jsx
  return (
    <MapContainer
      center={[ 51.505, -0.09 ]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { places.map(({ name, slug, location: { latitude, longitude } }, i) => (
        <Marker
          key={i}
          position={[ latitude, longitude ]} 
          title={name}
          eventHandlers={{
            click: () => router.push(`/places/${slug}`)
          }}
        />
      )) }
    </MapContainer>
  )
}

// Prop Types
Map.defaultProps = {
  places: [{
    id: '1',
    name: 'Example Name',
    slug: 'example-slug',
    location: {
      latitude: 51.505,
      longitude: -0.09
    }
  }]
}

Map.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      })
    })
  )
}