import * as React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import { Flex } from '../utils/Flex'
import { scrollToActiveButton } from '../utils/ScrollToActiveButton'
import {
  getSortedData,
  getFilterOptions,
  getRestaurantRefs,
} from '../utils/utils'
import { FilterMenu } from '../atoms/FilterMenu'
import { useRestaurantData } from '../hooks'
import { PopupInformation, SortBy, StyledPopup } from '../atoms'
import './components.css'

import type { Filter } from '../types'

export const Map = (): JSX.Element => {
  const locations = useRestaurantData()
  const [showFilters, setFiltered] = React.useState<Filter | null>(null)
  const [showOption, setOption] = React.useState<boolean>(false)
  const [showCurrentButton, setCurrentButton] = React.useState<number | null>(
    null
  )
  const mapRef = React.useRef(null)
  const centerPoint: L.LatLngExpression = [40.7423, -73.9646]
  const DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 25],
  })
  const handleFilterClick = (filter: Filter | null): void => {
    setFiltered(filter)
    setCurrentButton(null)
  }
  const handleSortByClick = (option: string | null): void => {
    if (option == null) {
      setOption(false)
    } else {
      setOption(true)
    }
  }
  const sortedLocations = getSortedData(
    locations,
    showOption ? 'year' : 'alphabetical'
  )
  const filtered = getFilterOptions(showFilters, sortedLocations)
  const data = filtered != null ? filtered : sortedLocations
  const restaurantRefs = getRestaurantRefs(data)
  const handleClick = (index: number) => {
    if (restaurantRefs[index] && restaurantRefs[index].current) {
      const marker = restaurantRefs[index].current
      if (marker) {
        if (showCurrentButton === index) {
          marker.closePopup()
          setCurrentButton(null)
        } else {
          marker.openPopup()
          setCurrentButton(index)
        }
      }
    }
  }

  const activeButtonRef = React.useRef(null)

  React.useEffect(() => {
    scrollToActiveButton(activeButtonRef)
  }, [showCurrentButton])

  return (
    <Flex
      zIndex={10}
      width="98%"
      height="42rem"
      backgroundColor="grey"
      padding="1.5rem"
      boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
      flexDirection="row"
      alignItems="center"
    >
      <Flex width="50%" flexDirection="column">
        <Flex
          fontSize="2.5rem"
          textAlign="center"
          justifyContent="center"
          marginBottom="1rem"
        >
          New York City Locations
        </Flex>
        <Flex flexDirection="row" justifyContent="space-between">
          <Flex
            flexDirection="column"
            maxHeight="38rem"
            overflow="scroll"
            width="max-content"
            backgroundColor="white"
            borderRadius="10px"
          >
            {data.map((res, index) => (
              <Flex
                borderBottom="2px solid grey"
                ref={showCurrentButton === index ? activeButtonRef : null}
                className="Map-buttons"
                padding="0.5rem"
                key={res.name}
                onClick={() => handleClick(index)}
                backgroundColor={showCurrentButton === index ? 'pink' : 'white'}
              >
                {res.name}
              </Flex>
            ))}
          </Flex>
          <Flex flexDirection="row">
            <FilterMenu onClick={handleFilterClick} />
            <SortBy onClick={handleSortByClick} />
          </Flex>
        </Flex>
      </Flex>
      <MapContainer
        center={centerPoint}
        zoom={12}
        style={{
          height: '35rem',
          width: '50%',
          borderRadius: '10px',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.23)',
        }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((res, index) => (
          <div className="leaflet-clickable" key={res.name}>
            <Marker
              position={res.coordinate}
              icon={DefaultIcon}
              eventHandlers={{ click: () => setCurrentButton(index) }}
              ref={restaurantRefs[index]}
            >
              <StyledPopup
                //  TODO: the exit button on the Popup should also set CurrentButton to null
                //    but it doesn't work to have it as below
                // eventHandlers={{ click: () => setCurrentButton(null) }}
                closeButton
              >
                <PopupInformation restuarantData={res} />
              </StyledPopup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </Flex>
  )
}
