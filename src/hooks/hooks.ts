import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import type { Data } from '../types'

export const useTranslateOnScroll = (): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(-${window.scrollY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return ref
}

export const useRestaurantData = (): Data | null => {
  const [restaurantData, setRestaurantData] = useState<Data | null>(null)

  useEffect(() => {
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
