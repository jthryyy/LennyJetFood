import * as React from 'react'
import { Flex } from './Flex'
import { StarIcon } from '../icons/starIcon'
import type { Data, Rating, RestaurantData } from '../types'

export const getAlphabeticalData = (data: Data | null): RestaurantData[] => {
  if (data == null) return []
  return data.restaurant.sort((a: RestaurantData, b: RestaurantData) =>
    a.name.localeCompare(b.name)
  )
}

export const getYearData = (data: Data | null): RestaurantData[] => {
  if (data == null) return []
  return data.restaurant
    .sort((a: RestaurantData, b: RestaurantData) => a.firstVisit - b.firstVisit)
    .reverse()
}

export const getStarRatings = (rating: Rating): JSX.Element => {
  let stars
  switch (rating) {
    case 1:
    case 1.5: {
      stars = <StarIcon color="#F8CB4F" />
      break
    }
    case 2:
    case 2.5: {
      stars = (
        <>
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
        </>
      )
      break
    }
    case 3:
    case 3.5: {
      stars = (
        <>
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
        </>
      )
      break
    }
    case 4:
    case 4.5: {
      stars = (
        <>
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
        </>
      )
      break
    }
    case 5: {
      stars = (
        <>
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
          <StarIcon color="#F8CB4F" />
        </>
      )
      break
    }
  }
  return (
    <Flex flexDirection="row" gridGap="4px">
      {stars}
    </Flex>
  )
}

export const getPrice = (price: number): JSX.Element => {
  let prices
  switch (price) {
    case 1: {
      prices = <Flex>$</Flex>
      break
    }
    case 2: {
      prices = (
        <>
          <Flex>$</Flex>
          <Flex>$</Flex>
        </>
      )
      break
    }
    case 3: {
      prices = (
        <>
          <Flex>$</Flex>
          <Flex>$</Flex>
          <Flex>$</Flex>
        </>
      )
      break
    }
    case 4: {
      prices = (
        <>
          <Flex>$</Flex>
          <Flex>$</Flex>
          <Flex>$</Flex>
        </>
      )
      break
    }
  }
  return (
    <Flex flexDirection="row" gridGap="4px" color="green">
      {prices}
    </Flex>
  )
}
