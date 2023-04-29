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
  'type',
  'neighborhood',
  'rating',
]
