//  a list of the constants used throughout the project, organized in a const file

import { FilterType, FoodType } from './types'

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
  'Harlem',
  'MorningSide',
  'UWS',
  'UES',
  'Midtown',
  'Ktown',
  'Flatiron',
  'Chelsea',
  'West Village',
  'Washington Square Park',
  'Lower Manhattan',
  'LES',
  'FiDi',
  'Flushing',
  'Astoria',
  'LIC',
  'Greenpoint',
  'Williamsburg',
  'Bushwick',
  'Park Slope',
  'Prospect Heights',
  'Downtown Brooklyn',
  'DUMBO',
]

export const RATING: number[] = [1, 2, 3, 4, 5]

export const ADVANCED: string[] = ['subcategory', 'permanantelyClosed']

export const SUBCATEGORY: string[] = [
  'brunch',
  'sushi',
  'ramen',
  'kareoke',
  'kbbq',
  'marketplace',
  'jazz',
  'vegan',
  'dog friendly',
  'pub',
]

export const FILTER_TYPE: FilterType[] = [
  'advanced',
  'type',
  'rating',
  'neighborhood',
]
