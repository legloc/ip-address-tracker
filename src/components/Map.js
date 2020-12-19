import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import IconLocation from '../images/icon-location.svg'

const Map = () => {
  const markerIcon = L.icon({
    iconUrl: IconLocation,
    iconRetinaUrl: IconLocation,
    iconSize: [46, 56],
    iconAnchor: [23, 56]
  })

  return (
    <MapContainer className="map-wrapper" center={[51.505, -0.09]} zoom={ 15 } scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[51.505, -0.09]} icon={ markerIcon } />
    </MapContainer>
  )
}

export default Map