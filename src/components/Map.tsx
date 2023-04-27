import * as React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import { Flex } from '../utils/Flex'
import { scrollToActiveButton } from '../utils/ScrollToActiveButton'
import { getAlphabeticalData, getYearData } from '../utils/utils'
import { FilterMenu } from '../atoms/FilterMenu'
import { useFilterOptions, useRestaurantData } from '../hooks'
import { PopupInformation, SortBy, StyledPopup } from '../atoms'
import './components.css'

import type { Filter, MarkerWithPopup } from '../types'

export const Map = (): JSX.Element => {
  const locations = useRestaurantData()
  const alphabeticalLoc = getAlphabeticalData(locations)
  //   const yearLoc = getYearData(locations)
  const [showFilters, setFiltered] = React.useState<Filter | null>(null)
  const [showOption, setOption] = React.useState<boolean>(false)
  const [showCurrentButton, setCurrentButton] = React.useState<number | null>(
    null
  )
  const mapRef = React.useRef(null)
  const filtered = useFilterOptions(showFilters, alphabeticalLoc)
  const centerPoint: L.LatLngExpression = [40.7423, -73.9646]
  const DefaultIcon = L.icon({
    iconUrl: icon,
  })
  const handleFilterClick = (filter: Filter | null): void => {
    setFiltered(filter)
  }
  const handleSortByClick = (option: string | null): void => {
    if (option == null) {
      setOption(false)
    } else {
      setOption(true)
    }
  }
  //   let data = alphabeticalLoc
  //   if (filtered != null) {
  //     data = filtered
  //   } else if (showOption) {
  //     data = yearLoc
  //   } else {
  //     data = alphabeticalLocz
  //   }
  //   const sortedData = showOption === true ? yearLoc : alphabeticalLoc

  const data = filtered != null ? filtered : alphabeticalLoc
  const restaurantRefs = React.useMemo(
    () =>
      data.map(() => {
        return React.createRef<MarkerWithPopup>()
      }),
    [data]
  )
  const handleClick = (index: number) => {
    if (restaurantRefs[index] && restaurantRefs[index].current) {
      const marker = restaurantRefs[index].current
      if (marker != null) {
        if (showCurrentButton === index) {
          marker.closePopup()
        } else {
          marker.openPopup()
        }
      }
    }
    setCurrentButton(showCurrentButton === index ? null : index)
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
    >
      <Flex width="50%" flexDirection="column">
        <Flex fontSize="2.5rem" textAlign="center">
          New York City Locations
        </Flex>
        <Flex flexDirection="row">
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
          <FilterMenu onClick={handleFilterClick} />
          <SortBy onClick={handleSortByClick} />
        </Flex>
      </Flex>
      <MapContainer
        center={centerPoint}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '35rem', width: '50%' }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((res, index) => (
          <Marker
            key={res.name}
            position={res.coordinate}
            icon={DefaultIcon}
            ref={restaurantRefs[index]}
            eventHandlers={{ click: () => setCurrentButton(index) }}
          >
            <StyledPopup
              //   eventHandlers={{ click: () => setCurrentButton(null) }}
              closeButton
            >
              <PopupInformation restuarantData={res} />
            </StyledPopup>
          </Marker>
        ))}
      </MapContainer>
    </Flex>
  )
}
