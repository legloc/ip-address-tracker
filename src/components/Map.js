import L from 'leaflet'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import IconLocation from '../images/icon-location.svg'

const ChangeView = ({ center }) => {
  const map = useMap()
  map.setView(center, 14)
  return null
}

const Map = ({ lat, lng }) => {
  const markerIcon = L.icon({
    iconUrl: IconLocation,
    iconRetinaUrl: IconLocation,
    iconSize: [46, 56],
    iconAnchor: [23, 56]
  })

  return (
    <MapContainer className="map-wrapper" center={[ lat, lng ]} zoom={ 14 } scrollWheelZoom={ true } zoomControl={ false } >
      <ChangeView center={[ lat, lng ]} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[ lat, lng ]} icon={ markerIcon } />
    </MapContainer>
  )
}

export default Map