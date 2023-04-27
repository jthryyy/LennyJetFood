import type { Filter, RestaurantData } from '../types'

export const useFilterOptions = (
  filter: Filter | null,
  restaurants: RestaurantData[]
): RestaurantData[] => {
  if (filter == null) return restaurants

  return restaurants.reduce((acc: RestaurantData[], current) => {
    if (
      current.rating === filter ||
      current.neighborhood === filter ||
      (current.permanantlyClosed && filter === 'permanantelyClosed') ||
      current.type === filter
    ) {
      return [...acc, current]
    }
    return acc
  }, [])
}
