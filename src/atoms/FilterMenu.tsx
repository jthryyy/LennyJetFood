import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { ADVANCED, FOOD_TYPES, NEIGHBORHOODS, RATING } from '../const'
import type { Filter } from '../types'

interface FilterMenuProps {
  onClick: (filter: Filter | null) => void
}

type FilterType = 'type' | 'neighborhood' | 'rating' | 'advanced'

export const FilterMenu = (props: FilterMenuProps): JSX.Element => {
  const { onClick } = props
  const [showSetting, setSetting] = React.useState<FilterType | null>(null)
  const handleSettingClick = (filterType: FilterType | null): void => {
    setSetting(filterType)
  }
  const handleFoodSettingClick = (type: Filter): void => {
    onClick(type)
  }
  const handleClear = (): void => {
    onClick(null)
    handleSettingClick(null)
  }

  let options
  switch (showSetting) {
    case 'type': {
      options = FOOD_TYPES.map(type => (
        <Flex onClick={() => handleFoodSettingClick(type as Filter)}>
          {startCase(type)}
        </Flex>
      ))
      break
    }
    case 'neighborhood': {
      options = NEIGHBORHOODS.map(place => (
        <Flex onClick={() => handleFoodSettingClick(place as Filter)}>
          {startCase(place)}
        </Flex>
      ))
      break
    }
    case 'rating': {
      options = RATING.map(rate => (
        <Flex onClick={() => handleFoodSettingClick(rate as Filter)}>
          {rate} Rating
        </Flex>
      ))
      break
    }
    case 'advanced': {
      options = ADVANCED.map(ad => (
        <Flex onClick={() => handleFoodSettingClick(ad as Filter)}>
          {ad === 'permanantelyClosed' ? 'Permanently Closed' : 'Subcategory'}
        </Flex>
      ))
      break
    }
  }

  return (
    <Flex flexDirection="row" padding="1rem">
      <Flex>Filter</Flex>
      <Flex
        backgroundColor="white"
        border="1px solid black"
        width="100%"
        height="max-content"
        flexDirection="column"
        gridGap="0.5rem"
      >
        <Flex onClick={handleClear} padding="0.5rem">
          All
        </Flex>
        <Flex
          padding="0.5rem"
          onClick={() =>
            handleSettingClick(showSetting === 'type' ? null : 'type')
          }
        >
          Food type
        </Flex>
        <Flex
          padding="0.5rem"
          onClick={() =>
            handleSettingClick(
              showSetting === 'neighborhood' ? null : 'neighborhood'
            )
          }
        >
          Neighborhoods
        </Flex>
        <Flex
          padding="0.5rem"
          onClick={() =>
            handleSettingClick(showSetting === 'rating' ? null : 'rating')
          }
        >
          Ratings
        </Flex>
        <Flex
          padding="0.5rem"
          onClick={() =>
            handleSettingClick(showSetting === 'advanced' ? null : 'advanced')
          }
        >
          Advanced
        </Flex>
        {options}
      </Flex>
    </Flex>
  )
}
