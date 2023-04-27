export type FoodType =
  | 'southern comfort'
  | 'pizza'
  | 'cocktail bar'
  | 'burger'
  | 'bar'
  | 'italian'
  | 'bagel'
  | 'bar grill'
  | 'american'
  | 'german'
  | 'mexican'
  | 'french'
  | 'juice'
  | 'coffee'
  | 'chinese'
  | 'japanese'
  | 'thai'
  | 'indian'

export type Neighborhood =
  | 'Harlem'
  | 'Morningside'
  | 'UWS'
  | 'UES'
  | 'Midtown'
  | 'Ktown'

export type Rating = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

export type Subcategory = 'brunch' | 'sushi' | 'ramen'

export type Filter = FoodType | Neighborhood | Rating | 'permanantelyClosed'

export type RestaurantData = {
  name: string
  coordinate: [number, number]
  description: string
  type: FoodType
  rating: Rating
  price: number
  neighborhood: Neighborhood
  firstVisit: number
  link?: string
  permanantlyClosed?: boolean
  subcategory?: Subcategory
}

export type Data = {
  restaurant: RestaurantData[]
}
