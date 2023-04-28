import type { Filter, RestaurantDataWithId } from '../types'

export const useFilterOptions = (
  filter: Filter | null,
  restaurants: RestaurantDataWithId[]
): RestaurantDataWithId[] => {
  if (filter == null) return restaurants

  return restaurants.reduce((acc: RestaurantDataWithId[], current) => {
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
