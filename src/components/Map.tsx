import * as React from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import { Flex } from '../utils/Flex'
import {
  getAlphabeticalData,
  getPrice,
  getStarRatings,
  getYearData,
} from '../utils/utils'
import { useFilterOptions, useRestaurantData } from '../hooks'
import { FilterMenu } from '../atoms/FilterMenu'
import './components.css'
import { Filter } from '../types'
import { SortBy, StyledPopup } from '../atoms'
import { startCase } from 'lodash'

export const Map = (): JSX.Element => {
  const locations = useRestaurantData()
  const alphabeticalLoc = getAlphabeticalData(locations)
  //   const yearLoc = getYearData(locations)
  const [showFilters, setFiltered] = React.useState<Filter | null>(null)
  const [showOption, setOption] = React.useState<boolean>(false)

  const filtered = useFilterOptions(showFilters, alphabeticalLoc)
  const home: L.LatLngExpression = [40.803042464648705, -73.95681619540294]
  const DefaultIcon = L.icon({
    iconUrl: icon,
  })

  const [showRes, setRes] = React.useState<string | null>(null)
  const handleClick = (name: string): void => {
    setRes(name)
  }
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
  //     data = alphabeticalLoc
  //   }
  //   console.log(data)
  //   console.log(filtered)
  //   const sortedData = showOption === true ? yearLoc : alphabeticalLoc
  const data = filtered != null ? filtered : alphabeticalLoc
  return (
    <Flex
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
            {data.map(res => (
              <Flex
                className="Map-buttons"
                padding="0.5rem"
                key={res.name}
                onClick={() => handleClick(res.name)}
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
        center={home}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '35rem', width: '50%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map(res => (
          <React.Fragment key={res.name}>
            <Marker position={res.coordinate} icon={DefaultIcon}>
              <StyledPopup>
                <Flex flexDirection="column" gridGap="4px">
                  <Flex fontWeight={500} flexDirection="row">
                    <Flex> {res.name}</Flex>
                    {res.permanantlyClosed ? (
                      <Flex color="red" marginLeft="4px">
                        Permanently Closed
                      </Flex>
                    ) : null}
                  </Flex>
                  <Flex>{getPrice(res.price)}</Flex>
                  <Flex>{getStarRatings(res.rating)}</Flex>
                  <Flex>First visited: {res.firstVisit}</Flex>
                  <Flex>
                    {startCase(res.type)}
                    {res.subcategory != null
                      ? ', ' + startCase(res.subcategory)
                      : null}
                  </Flex>
                  <Flex>{res.description}</Flex>
                  {res.link ? <a href={res.link}>Website</a> : null}
                </Flex>
              </StyledPopup>
            </Marker>
          </React.Fragment>
        ))}
      </MapContainer>
    </Flex>
  )
}
