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

export type RestaurantData = {
  name: string
  coordinate: [number, number]
  description: string
  type: FoodType
  rating: number
  price: number
  neighborhood: Neighborhood
  firstVisit: number
  link?: string
  permanantlyClosed?: boolean
  subcategory?: string
}

export type Data = {
  restaurant: RestaurantData[]
}
