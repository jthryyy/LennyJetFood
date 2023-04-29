import { getSortedData } from '../utils/utils'
import { useRestaurantData } from './useRestaurantData'
import { useRestaurantGlobalData } from './useRestaurantGlobalData'
import type { RestaurantDataWithId } from '../types'

interface SortedLocationsProps {
  isGlobalRestaurantList: boolean
  isYearOption: boolean
}
//  returns the sorted location list either sorted by year or alphabetical
//  depending on if it is the global data or NYC data
export const useSortedLocations = (
  props: SortedLocationsProps
): RestaurantDataWithId[] => {
  const { isGlobalRestaurantList, isYearOption } = props
  const nycLocations = useRestaurantData()
  const globalLocations = useRestaurantGlobalData()

  return getSortedData(
    isGlobalRestaurantList ? globalLocations : nycLocations,
    isYearOption ? 'year' : 'alphabetical'
  )
}
