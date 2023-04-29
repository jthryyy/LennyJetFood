import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'
import {
  ADVANCED,
  FILTER_TYPE,
  FOOD_TYPES,
  NEIGHBORHOODS,
  RATING,
  SUBCATEGORY,
} from '../const'
import { useOnClickOutside } from '../hooks'
import './atoms.css'
import type { Filter, FilterType, RestaurantDataWithId } from '../types'

interface FilterMenuProps {
  onClick: (filter: Filter | null) => void
  sortedLocations: RestaurantDataWithId[]
}

export const FilterMenu = (props: FilterMenuProps): JSX.Element => {
  const { onClick, sortedLocations } = props
  const [showSetting, setSetting] = React.useState<FilterType>('all')
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
    setShowSubcategory(false)
  }
  const handleClear = (): void => {
    onClick(null)
    handleSettingClick('all')
    setShowSubcategory(false)
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

  let options
  switch (showSetting) {
    case 'type': {
      options = filteredFoodTypes.map(type => (
        <Flex
          onClick={() => handleFoodSettingClick(type as Filter)}
          key={type}
          className="Filter-buttons"
          flexDirection="column"
        >
          {startCase(type)}
        </Flex>
      ))
      break
    }
    case 'neighborhood': {
      options =
        // 'neighborhood' in sortedLocations
        NEIGHBORHOODS.map(place => (
          <Flex
            onClick={() => handleFoodSettingClick(place as Filter)}
            key={place}
            className="Filter-buttons"
          >
            {startCase(place)}
          </Flex>
        ))
      break
    }
    case 'rating': {
      options = filteredRatings.map(rate => (
        <Flex
          onClick={() => handleFoodSettingClick(rate as Filter)}
          key={rate}
          flexDirection="row"
          className="Filter-buttons"
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
          flexDirection="row"
          className="Filter-buttons"
        >
          {ad === 'permanantelyClosed' ? 'Permanently Closed' : 'Subcategory'}
        </Flex>
      ))
      break
    }
  }

  const subCategoryOptions = filteredSubcategories.map(item => (
    <Flex
      onClick={() => console.log('wire this up')}
      key={item}
      flexDirection="row"
      className="Filter-buttons"
    >
      {item}
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
        <Flex
          ref={filterRef}
          flexDirection="row"
          cursor="pointer"
          position="absolute"
          top="6.38rem"
          right="9%"
          zIndex={500}
          border="1px solid gray"
          boxShadow="0px 3px 6px rgba(0, 0, 0, 0.23)"
        >
          <Flex
            backgroundColor="white"
            border="1px solid black"
            width="100%"
            height="max-content"
            flexDirection="column"
            gridGap="0.5rem"
          >
            <Flex
              onClick={handleClear}
              className={`${
                showSetting === 'all'
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }`}
            >
              All
            </Flex>
            {FILTER_TYPE.map(setting => (
              <Flex
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
                {setting === 'type'
                  ? 'Food type'
                  : setting.charAt(0).toUpperCase() + setting.slice(1)}
              </Flex>
            ))}
          </Flex>
          <Flex flexDirection="column" backgroundColor="white">
            {options}
          </Flex>
          {showSubcategory && (
            <Flex
              flexDirection="column"
              backgroundColor="white"
              width="max-content"
              height="max-content"
            >
              {subCategoryOptions}
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  )
}
