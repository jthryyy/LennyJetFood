import * as React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'

import { Flex } from '../utils/Flex'
import { scrollToActiveButton } from '../utils/ScrollToActiveButton'
import { getFilterOptions, getRestaurantRefs } from '../utils/utils'
import { useSortedLocations } from '../hooks'
import {
  FilterMenu,
  PopupInformation,
  SortBy,
  StyledPopup,
  Toggle,
} from '../atoms'
import './components.css'

import type { Filter } from '../types'

export const Map = (): JSX.Element => {
  const [key, setKey] = React.useState(Date.now())
  const [showFilters, setFiltered] = React.useState<Filter | null>(null)
  const [isYearOption, setShowYearSortByOption] = React.useState<boolean>(false)
  const [isGlobalRestaurantList, setShowGlobalRestaurantList] =
    React.useState<boolean>(false)
  const [showCurrentButton, setCurrentButton] = React.useState<number | null>(
    null
  )
  const mapRef = React.useRef(null)
  const centerPoint: L.LatLngExpression = [40.7423, -73.9646]
  const DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [20, 25],
  })
  const handleToggle = (checked: boolean): void => {
    setShowGlobalRestaurantList(checked)
    setCurrentButton(null)
    setFiltered(null)
    setKey(Date.now())
  }
  const handleFilterClick = (filter: Filter | null): void => {
    setFiltered(filter)
    setCurrentButton(null)
  }
  const handleSortByClick = (option: string | null): void => {
    if (option == null) {
      setShowYearSortByOption(false)
    } else {
      setShowYearSortByOption(true)
    }
  }
  const sortedLocations = useSortedLocations({
    isGlobalRestaurantList,
    isYearOption,
  })
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
      backgroundColor="lightgray"
      padding="1rem 1.5rem"
      boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
      flexDirection="column"
    >
      <Flex flexDirection="column">
        <Flex fontSize="2.5rem" textAlign="center" justifyContent="center">
          {isGlobalRestaurantList
            ? 'Global Locations'
            : 'New York City Locations'}
        </Flex>
        <Flex
          flexDirection="row"
          paddingBottom="0.5rem"
          justifyContent="space-between"
        >
          <Flex paddingLeft="1rem">Restuarants</Flex>
          <Flex flexDirection="row" alignItems="center">
            <Toggle onChange={handleToggle} />
            <FilterMenu
              onClick={handleFilterClick}
              sortedLocations={sortedLocations}
            />
            <SortBy onClick={handleSortByClick} />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex width="30%" flexDirection="column">
          <Flex flexDirection="row" justifyContent="space-between">
            <Flex
              flexDirection="column"
              maxHeight="35rem"
              overflow="scroll"
              width="90%"
              backgroundColor="white"
              borderRadius="10px"
              boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
            >
              {data.map((res, index) => (
                <Flex
                  borderBottom="2px solid lightgray"
                  ref={showCurrentButton === index ? activeButtonRef : null}
                  className="Map-buttons"
                  padding="0.5rem"
                  key={res.name}
                  onClick={() => handleClick(index)}
                  backgroundColor={
                    showCurrentButton === index ? 'pink' : 'white'
                  }
                >
                  {res.name}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <MapContainer
          key={key}
          center={centerPoint}
          zoom={isGlobalRestaurantList ? 3 : 12}
          style={{
            height: '35rem',
            width: '70%',
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
    </Flex>
  )
}
