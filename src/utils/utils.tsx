import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Flex } from './Flex'
import { StarIcon } from '../icons'
import type {
  Data,
  Filter,
  MarkerWithPopup,
  Rating,
  RestaurantDataWithId,
  Subcategories,
} from '../types'

//  get the filtered options to filter the restaurant info
export const getFilterOptions = (
  filter: Filter | null,
  restaurants: RestaurantDataWithId[],
  subcategory: Subcategories | null
): RestaurantDataWithId[] => {
  if (filter == null) return restaurants

  return restaurants.reduce((acc: RestaurantDataWithId[], current) => {
    if (
      current.rating === filter ||
      current.neighborhood === filter ||
      (current.permanantlyClosed && filter === 'permanantelyClosed') ||
      current.type === filter ||
      current.location?.city === filter ||
      current.subcategory === subcategory
    ) {
      return [...acc, current]
    }
    return acc
  }, [])
}

//  get the restaurant refs for assigning the refs to the different popups and buttons
export const getRestaurantRefs = (
  restaurantDataWithIds: RestaurantDataWithId[]
): React.RefObject<MarkerWithPopup>[] => {
  return React.useMemo(
    () =>
      restaurantDataWithIds.map(() => {
        return React.createRef<MarkerWithPopup>()
      }),
    [restaurantDataWithIds]
  )
}

export const getSortedData = (
  data: Data | null,
  sortedOption: 'alphabetical' | 'year'
): RestaurantDataWithId[] => {
  //  if data is null, return an empty object
  if (data == null) return []

  // add a unique ID to every restaurant
  const restaurantsWithIds = data.restaurant.reduce(
    (acc: RestaurantDataWithId[], restaurant) => {
      const id = uuidv4()
      acc.push({ ...restaurant, id })
      return acc
    },
    []
  )

  //  return the array of restaurants either in alphabetical order
  //  or according to year first visited, sorted by latest to earliest
  return sortedOption === 'year'
    ? restaurantsWithIds
        .sort(
          (a: RestaurantDataWithId, b: RestaurantDataWithId) =>
            a.firstVisit - b.firstVisit
        )
        .reverse()
    : restaurantsWithIds.sort(
        (a: RestaurantDataWithId, b: RestaurantDataWithId) =>
          a.name.localeCompare(b.name)
      )
}

export const getStarRatings = (rating: Rating): JSX.Element => {
  //  depending on the ratings, return the correct number of stars
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
  //  according to the price number, return correct number of dollar signs
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
          <Flex>$</Flex>
        </>
      )
      break
    }
  }
  return (
    <Flex
      flexDirection="row"
      gridGap="4px"
      color="green"
      fontWeight={500}
      fontSize="14px"
    >
      {prices}
    </Flex>
  )
}
