//  a list of the constants used throughout the project, organized in a const file

import { FilterType, FoodType, Location } from './types'

export const FOOD_TYPES: FoodType[] = [
  'american',
  'bagel',
  'bar',
  'bar grill',
  'burger',
  'chinese',
  'cocktail bar',
  'coffee',
  'dessert',
  'filipino',
  'french',
  'german',
  'indian',
  'italian',
  'japanese',
  'juice',
  'korean',
  'mediterranean',
  'mexican',
  'pizza',
  'southern comfort',
  'spanish',
  'thai',
  'tapas',
  'taqueria',
  'ukrainian',
  'vietnamese',
  'spanish',
  'mediterranean',
  'portuguese',
  'lounge',
  'afro-portuguese',
  'english',
]

export const NEIGHBORHOODS: string[] = [
  'Astoria',
  'Bushwick',
  'Chelsea',
  'Downtown Brooklyn',
  'DUMBO',
  'FiDi',
  'Flatiron',
  'Flushing',
  'Greenpoint',
  'Harlem',
  'Ktown',
  'LES',
  'LIC',
  'Lower Manhattan',
  'Midtown',
  'MorningSide',
  'Park Slope',
  'Prospect Heights',
  'UES',
  'UWS',
  'Washington Square Park',
  'West Village',
  'Williamsburg',
]

export const RATING: number[] = [1, 2, 3, 4, 5]

export const ADVANCED: string[] = ['subcategory', 'permanantelyClosed']

export const SUBCATEGORY: string[] = [
  'brunch',
  'dog friendly',
  'jazz',
  'kareoke',
  'kbbq',
  'marketplace',
  'pub',
  'ramen',
  'sushi',
  'vegan',
]

export const FILTER_TYPE: FilterType[] = [
  'advanced',
  'neighborhood',
  'rating',
  'type',
]

export const FILTER_TYPE_GLOBAL: FilterType[] = [
  'advanced',
  'location',
  'rating',
  'type',
]

export const CITY_LOCATIONS: Location[] = [
  'Jersey City',
  'Elizabeth',
  'Freehold',
  'Princeton',
  'Hopewell',
  'Palisade',
  'Grand Junction',
  'Salt Lake City',
  'Seattle',
  'Laguna Beach',
  'Orange',
  'Anaheim',
  'London',
]

//  colors
export const black = '#323031'
export const teaGreen = '#DCE6AC'
export const ashGray = '#B5D8CC'
export const dutchWhite = '#E8DDB5'
export const silver = '#C1B9B9'
export const thistle = '#D3C0DB'
