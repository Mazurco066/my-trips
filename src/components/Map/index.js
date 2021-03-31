// Dependencies
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

// Env variables
const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

// Map tile Layer
const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

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
      <CustomTileLayer />
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