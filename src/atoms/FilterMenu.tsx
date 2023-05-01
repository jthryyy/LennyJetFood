import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'
import {
  ADVANCED,
  CITY_LOCATIONS,
  FILTER_TYPE,
  FILTER_TYPE_GLOBAL,
  FOOD_TYPES,
  NEIGHBORHOODS,
  RATING,
  SUBCATEGORY,
} from '../const'
import { useOnClickOutside } from '../hooks'
import './atoms.css'
import type {
  Filter,
  FilterType,
  RestaurantDataWithId,
  Subcategories,
} from '../types'

interface FilterMenuProps {
  onClick: (filter: Filter | null) => void
  sortedLocations: RestaurantDataWithId[]
  onSubcategoryClick: (Sub: Subcategories | null) => void
}

export const FilterMenu = (props: FilterMenuProps): JSX.Element => {
  const { onClick, sortedLocations, onSubcategoryClick } = props
  const [showSetting, setSetting] = React.useState<FilterType>('all')
  const [showSubSetting, setShowSubSetting] = React.useState<Filter | null>(
    null
  )
  const [showMoreSubSetting, setShowMoreSubSetting] =
    React.useState<Subcategories | null>(null)
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const [showSubcategory, setShowSubcategory] = React.useState<boolean>(false)
  const filterRef = React.useRef(null)
  useOnClickOutside(filterRef, () => {
    setShowMenu(false)
  })
  const handleSettingClick = (filterType: FilterType): void => {
    setSetting(filterType)
  }
  const handleFoodSettingClick = (type: Filter): void => {
    onClick(type)
    setShowSubSetting(type)
    setShowSubcategory(false)
    setShowMenu(false)
  }
  const handleClear = (): void => {
    onClick(null)
    handleSettingClick('all')
    setShowSubcategory(false)
    setShowSubSetting(null)
    setShowMenu(false)
  }
  const handleSubcategoryClick = (sub: Subcategories): void => {
    setShowMoreSubSetting(sub)
    onSubcategoryClick(sub)
  }
  const filteredFoodTypes = FOOD_TYPES.filter(type =>
    sortedLocations.some(restaurant => restaurant.type === type)
  )
  const filteredSubcategories = SUBCATEGORY.filter(sub =>
    sortedLocations.some(restaurant => restaurant.subcategory === sub)
  )
  const filteredRatings = RATING.filter(rate =>
    sortedLocations.some(restaurant => restaurant.rating === rate)
  )
  //  I really want to use 'neighborhood' in sortedLocations but that doesn't work for some reason?
  const hasNeighborhoodKey = sortedLocations.find(
    restaurant => restaurant.neighborhood
  )
  const filter = hasNeighborhoodKey != null ? FILTER_TYPE : FILTER_TYPE_GLOBAL

  let options
  switch (showSetting) {
    case 'type': {
      options = filteredFoodTypes.map(type => (
        <Flex
          onClick={() => handleFoodSettingClick(type as Filter)}
          key={type}
          padding="0.5rem"
          className={`${
            showSubSetting === type ? 'Active-filter-buttons' : 'Filter-buttons'
          }`}
          flexDirection="column"
        >
          {startCase(type)}
        </Flex>
      ))
      break
    }
    case 'neighborhood': {
      options =
        hasNeighborhoodKey != null
          ? NEIGHBORHOODS.map(place => (
              <Flex
                onClick={() => handleFoodSettingClick(place as Filter)}
                key={place}
                padding="0.5rem"
                className={`${
                  showSubSetting === place
                    ? 'Active-filter-buttons'
                    : 'Filter-buttons'
                }`}
              >
                {startCase(place)}
              </Flex>
            ))
          : null
      break
    }
    case 'location': {
      options =
        hasNeighborhoodKey == null
          ? CITY_LOCATIONS.map(location => (
              <Flex
                onClick={() => handleFoodSettingClick(location as Filter)}
                key={location}
                padding="0.5rem"
                className={`${
                  showSubSetting === location
                    ? 'Active-filter-buttons'
                    : 'Filter-buttons'
                }`}
              >
                {startCase(location)}
              </Flex>
            ))
          : null
      break
    }
    case 'rating': {
      options = filteredRatings.map(rate => (
        <Flex
          onClick={() => handleFoodSettingClick(rate as Filter)}
          key={rate}
          padding="0.5rem"
          flexDirection="row"
          className={`${
            showSubSetting === rate ? 'Active-filter-buttons' : 'Filter-buttons'
          }`}
        >
          {rate} Rating
        </Flex>
      ))
      break
    }
    case 'advanced': {
      options = ADVANCED.map(ad => (
        <Flex
          onClick={() =>
            ad === 'permanantelyClosed'
              ? handleFoodSettingClick(ad as Filter)
              : setShowSubcategory(true)
          }
          key={ad}
          padding="0.5rem"
          flexDirection="row"
          className={`${
            showSubSetting === ad ? 'Active-filter-buttons' : 'Filter-buttons'
          }`}
        >
          {ad === 'permanantelyClosed' ? 'Permanently Closed' : 'Subcategory'}
        </Flex>
      ))
      break
    }
  }

  const subCategoryOptions = filteredSubcategories.map(item => (
    <Flex
      onClick={() => handleSubcategoryClick(item as Subcategories)}
      key={item}
      padding="0.5rem"
      flexDirection="row"
      className={`${
        showMoreSubSetting === item ? 'Active-filter-buttons' : 'Filter-buttons'
      }`}
    >
      {startCase(item)}
    </Flex>
  ))

  return (
    <Flex flexDirection="row" paddingX="1rem">
      <Flex flexDirection="row">
        <Flex>Filter</Flex>
        {showMenu ? (
          <ChevronUpIcon onClick={() => setShowMenu(false)} />
        ) : (
          <ChevronDownIcon onClick={() => setShowMenu(true)} />
        )}
      </Flex>
      {showMenu && (
        <Flex flexDirection="row" ref={filterRef}>
          <Flex
            cursor="pointer"
            top="5.8rem"
            position="absolute"
            right="24%"
            zIndex={500}
            border="1px solid gray"
            boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
            backgroundColor="white"
            height="max-content"
            flexDirection="column"
          >
            <Flex
              padding="0.5rem"
              onClick={handleClear}
              className={`${
                showSetting === 'all'
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }`}
            >
              All
            </Flex>
            {filter.map(setting => (
              <Flex
                padding="0.5rem"
                key={setting}
                className={`${
                  showSetting === setting
                    ? 'Active-filter-buttons'
                    : 'Filter-buttons'
                }`}
                onClick={() =>
                  handleSettingClick(showSetting === setting ? 'all' : setting)
                }
              >
                {setting === 'type' ? 'Food type' : startCase(setting)}
              </Flex>
            ))}
          </Flex>
          {options == null ? null : (
            <Flex
              cursor="pointer"
              top="5.8rem"
              position="absolute"
              right="11.5%"
              zIndex={500}
              border="1px solid gray"
              boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
              backgroundColor="white"
              width="175px"
              height="max-content"
              maxHeight="34rem"
              overflow="scroll"
              flexDirection="column"
            >
              <Flex flexDirection="column">{options}</Flex>
            </Flex>
          )}
          {showSubcategory && (
            <Flex
              flexDirection="column"
              backgroundColor="white"
              width="107px"
              height="max-content"
              cursor="pointer"
              top="5.8rem"
              right="2.7%"
              position="absolute"
              zIndex={500}
              border="1px solid gray"
              boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
            >
              {subCategoryOptions}
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  )
}
