import * as React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import { Flex } from '../utils/Flex'
import { useRestaurantData } from '../hooks/hooks'

export const Map = (): JSX.Element => {
  const locations = useRestaurantData()
  const home: L.LatLngExpression = [40.803042464648705, -73.95681619540294]
  const DefaultIcon = L.icon({
    iconUrl: icon,
  })

  if (locations == null) return <div>something is wrong</div>
  return (
    <Flex
      width="98%"
      height="40rem"
      backgroundColor="#16212d8c"
      padding="1rem"
      alignItems="center"
      justifyContent="center"
    >
      <MapContainer
        center={home}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '35rem', width: '98%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.restaurant.map(res => (
          <React.Fragment key={res.name}>
            <Marker position={res.coordinate} icon={DefaultIcon}>
              <Popup>
                <Flex>
                  <Flex>{res.name}</Flex>
                  <Flex>Rating {res.rating}</Flex>
                </Flex>
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>
    </Flex>
  )
}
