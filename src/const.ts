//  a list of the constants used throughout the project, organized in a const file

import { FilterType, FoodType, Location } from './types'

export const FOOD_TYPES: FoodType[] = [
  'afro-portuguese',
  'american',
  'bagel',
  'bar',
  'bar grill',
  'burger',
  'chinese',
  'cocktail bar',
  'coffee',
  'dessert',
  'english',
  'filipino',
  'french',
  'german',
  'indian',
  'italian',
  'japanese',
  'juice',
  'korean',
  'lounge',
  'mediterranean',
  'mexican',
  'pizza',
  'portuguese',
  'singaporean',
  'southern comfort',
  'spanish',
  'thai',
  'tapas',
  'taqueria',
  'ukrainian',
  'vietnamese',
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
  'Washington Heights',
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
  'Anaheim',
  'Boston',
  'Cambridge',
  'Elizabeth',
  'Freehold',
  'Grand Junction',
  'Hopewell',
  'Jersey City',
  'Laguna Beach',
  'London',
  'Orange',
  'Palisade',
  'Princeton',
  'Salt Lake City',
  'Seattle',
]

//  colors
export const black = '#323031'
export const teaGreen = '#DCE6AC'
export const ashGray = '#B5D8CC'
export const dutchWhite = '#E8DDB5'
export const silver = '#C1B9B9'
export const thistle = '#D3C0DB'
