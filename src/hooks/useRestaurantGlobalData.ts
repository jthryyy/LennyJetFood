import * as React from 'react'
import type { Data } from '../types'

export const useRestaurantGlobalData = (): Data | null => {
  const [restaurantData, setRestaurantData] = React.useState<Data | null>(null)

  React.useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        //  fetch the data from the restaurants.json file
        const response = await fetch('/restaurantsGlobal.json')
        const data = await response.json()
        setRestaurantData(data)
      } catch (error) {
        //  catch and log any error in console if there is an error with the GET request
        console.error(error)
      }
    }

    fetchRestaurantData()
  }, ['/restaurantsGlobal.json'])

  return restaurantData
}
