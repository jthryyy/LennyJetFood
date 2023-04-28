import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { ChevronDownIcon, ChevronUpIcon } from '../icons'
import {
  ADVANCED,
  FOOD_TYPES,
  NEIGHBORHOODS,
  RATING,
  SUBCATEGORY,
} from '../const'
import './atoms.css'
import type { Filter, FilterType } from '../types'

interface FilterMenuProps {
  onClick: (filter: Filter | null) => void
}

export const FilterMenu = (props: FilterMenuProps): JSX.Element => {
  const { onClick } = props
  const [showSetting, setSetting] = React.useState<FilterType | null>(null)
  const [showMenu, setShowMenu] = React.useState<boolean>(false)
  const [showSubcategory, setShowSubcategory] = React.useState<boolean>(false)
  const handleSettingClick = (filterType: FilterType | null): void => {
    setSetting(filterType)
  }
  const handleFoodSettingClick = (type: Filter): void => {
    onClick(type)
    setShowSubcategory(false)
  }
  const handleClear = (): void => {
    onClick(null)
    handleSettingClick(null)
    setShowSubcategory(false)
  }

  let options
  switch (showSetting) {
    case 'type': {
      options = FOOD_TYPES.map(type => (
        <Flex
          onClick={() => handleFoodSettingClick(type as Filter)}
          key={type}
          className="Filter-buttons"
        >
          {startCase(type)}
        </Flex>
      ))
      break
    }
    case 'neighborhood': {
      options = NEIGHBORHOODS.map(place => (
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
      options = RATING.map(rate => (
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

  const subCategoryOptions = SUBCATEGORY.map(item => (
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
      {showMenu ? (
        <Flex
          flexDirection="row"
          cursor="pointer"
          position="absolute"
          top="7rem"
          right="58%"
        >
          <Flex
            backgroundColor="white"
            border="1px solid black"
            width="100%"
            height="max-content"
            flexDirection="column"
            gridGap="0.5rem"
            borderRadius="10px"
          >
            <Flex
              onClick={handleClear}
              className={
                showSetting === null
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }
            >
              All
            </Flex>
            <Flex
              className={
                showSetting === 'type'
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }
              onClick={() =>
                handleSettingClick(showSetting === 'type' ? null : 'type')
              }
            >
              Food type
            </Flex>
            <Flex
              className={
                showSetting === 'neighborhood'
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }
              onClick={() =>
                handleSettingClick(
                  showSetting === 'neighborhood' ? null : 'neighborhood'
                )
              }
            >
              Neighborhoods
            </Flex>
            <Flex
              className={
                showSetting === 'rating'
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }
              onClick={() =>
                handleSettingClick(showSetting === 'rating' ? null : 'rating')
              }
            >
              Ratings
            </Flex>
            <Flex
              className={
                showSetting === 'advanced'
                  ? 'Active-filter-buttons'
                  : 'Filter-buttons'
              }
              onClick={() =>
                handleSettingClick(
                  showSetting === 'advanced' ? null : 'advanced'
                )
              }
            >
              Advanced
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            backgroundColor="white"
            width="max-content"
            height="max-content"
          >
            {options}
          </Flex>
          {showSubcategory ? (
            <Flex
              flexDirection="column"
              backgroundColor="white"
              width="max-content"
              height="max-content"
            >
              {subCategoryOptions}
            </Flex>
          ) : null}
        </Flex>
      ) : null}
    </Flex>
  )
}
