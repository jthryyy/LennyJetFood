import * as React from 'react'
import type { Data } from '../types'

export const useRestaurantData = (): Data | null => {
  const [restaurantData, setRestaurantData] = React.useState<Data | null>(null)

  React.useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch('/restaurants.json')
        const data = await response.json()
        setRestaurantData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchRestaurantData()
  }, ['/restaurants.json'])

  return restaurantData
}
